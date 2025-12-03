import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Types for the daily report payload
interface DailyReportPayload {
  date: string;
  generatedAt: string;
  apod: {
    title: string;
    explanation: string;
    url: string;
    mediaType: string;
  } | null;
  solarActivity: {
    solarFlares: {
      count: number;
      strongest: string | null;
      recentEvents: Array<{
        classType: string;
        beginTime: string;
        peakTime: string;
      }>;
    };
    cme: {
      count: number;
      recentEvents: Array<{
        activityID: string;
        startTime: string;
        note: string;
      }>;
    };
  };
  nearEarthObjects: {
    count: number;
    closestApproach: {
      designation: string;
      date: string;
      distanceAU: number;
      distanceLunar: number;
      velocityKmS: number;
    } | null;
    upcomingApproaches: Array<{
      designation: string;
      date: string;
      distanceAU: number;
    }>;
  };
  meteorShowers: {
    active: Array<{
      name: string;
      daysToPeak: number;
      zhr: number;
      radiant: string;
    }>;
    nextUp: {
      name: string;
      peakDate: string;
      zhr: number;
    } | null;
  };
}

async function fetchWithTimeout(url: string, timeout = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

async function compileReport(baseUrl: string): Promise<DailyReportPayload> {
  const today = new Date();

  // Fetch all data sources in parallel
  const [apodRes, solarFlaresRes, cmeRes, neoRes, meteorRes] = await Promise.allSettled([
    fetchWithTimeout(`${baseUrl}/api/nasa/apod`),
    fetchWithTimeout(`${baseUrl}/api/nasa/solar-flares`),
    fetchWithTimeout(`${baseUrl}/api/nasa/cme`),
    fetchWithTimeout(`${baseUrl}/api/nasa/neo`),
    fetchWithTimeout(`${baseUrl}/api/nasa/meteor-showers`),
  ]);

  // Process APOD
  let apod: DailyReportPayload['apod'] = null;
  if (apodRes.status === 'fulfilled' && apodRes.value.ok) {
    const data = await apodRes.value.json();
    apod = {
      title: data.title,
      explanation: data.explanation?.slice(0, 300) + (data.explanation?.length > 300 ? '...' : ''),
      url: data.url,
      mediaType: data.media_type,
    };
  }

  // Process Solar Flares
  let solarFlares = { count: 0, strongest: null as string | null, recentEvents: [] as any[] };
  if (solarFlaresRes.status === 'fulfilled' && solarFlaresRes.value.ok) {
    const data = await solarFlaresRes.value.json();
    const events = data.events || [];
    solarFlares = {
      count: events.length,
      strongest: events.length > 0 ? events.reduce((max: any, e: any) =>
        (e.classType > (max?.classType || '')) ? e : max, null)?.classType || null : null,
      recentEvents: events.slice(0, 3).map((e: any) => ({
        classType: e.classType,
        beginTime: e.beginTime,
        peakTime: e.peakTime,
      })),
    };
  }

  // Process CME
  let cme = { count: 0, recentEvents: [] as any[] };
  if (cmeRes.status === 'fulfilled' && cmeRes.value.ok) {
    const data = await cmeRes.value.json();
    const events = data.events || [];
    cme = {
      count: events.length,
      recentEvents: events.slice(0, 3).map((e: any) => ({
        activityID: e.activityID,
        startTime: e.startTime,
        note: e.note?.slice(0, 100) || '',
      })),
    };
  }

  // Process NEO
  let nearEarthObjects: DailyReportPayload['nearEarthObjects'] = {
    count: 0,
    closestApproach: null,
    upcomingApproaches: [],
  };
  if (neoRes.status === 'fulfilled' && neoRes.value.ok) {
    const data = await neoRes.value.json();
    const objects = data.objects || [];
    const closest = objects[0]; // Already sorted by distance
    nearEarthObjects = {
      count: data.count || objects.length,
      closestApproach: closest ? {
        designation: closest.designation,
        date: closest.closeApproachDate,
        distanceAU: closest.distance,
        distanceLunar: closest.distance * 389.17, // AU to lunar distances
        velocityKmS: closest.velocity,
      } : null,
      upcomingApproaches: objects.slice(0, 5).map((o: any) => ({
        designation: o.designation,
        date: o.closeApproachDate,
        distanceAU: o.distance,
      })),
    };
  }

  // Process Meteor Showers
  let meteorShowers: DailyReportPayload['meteorShowers'] = {
    active: [],
    nextUp: null,
  };
  if (meteorRes.status === 'fulfilled' && meteorRes.value.ok) {
    const data = await meteorRes.value.json();
    meteorShowers = {
      active: (data.active || []).map((s: any) => ({
        name: s.name,
        daysToPeak: s.daysToPeak,
        zhr: s.zhr,
        radiant: s.radiant,
      })),
      nextUp: data.upcoming?.[0] ? {
        name: data.upcoming[0].name,
        peakDate: data.upcoming[0].peakDate,
        zhr: data.upcoming[0].zhr,
      } : null,
    };
  }

  return {
    date: today.toISOString().split('T')[0],
    generatedAt: today.toISOString(),
    apod,
    solarActivity: {
      solarFlares,
      cme,
    },
    nearEarthObjects,
    meteorShowers,
  };
}

// GET: Compile and return the daily report (for Whiskers to fetch and broadcast)
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const report = await compileReport(baseUrl);

    return NextResponse.json({
      ...report,
      formattedMessage: formatReportForMessage(report),
    });
  } catch (error) {
    console.error('Daily report compilation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to compile daily report',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// POST: Compile report and send to Mr. Whiskers message bus
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phoneNumber, sendToWhiskers = true } = body;

    // Require a phone number - this is who receives the daily report
    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'phoneNumber is required. This is the recipient\'s phone number.' },
        { status: 400 }
      );
    }

    // Build target for Mr. Whiskers message bus
    const target = {
      type: 'phone_number' as const,
      phoneNumber,
    };

    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    // Compile the report
    const report = await compileReport(baseUrl);

    if (!sendToWhiskers) {
      return NextResponse.json({
        success: true,
        report,
        message: 'Report compiled but not sent to Whiskers (sendToWhiskers=false)'
      });
    }

    // Send to Mr. Whiskers message bus
    const whiskerPayload = {
      target,
      source: 'IWB-daily-report',
      payload: {
        type: 'daily-interstellar-bulletin',
        report,
        formattedMessage: formatReportForMessage(report),
      },
    };

    const whiskerResponse = await fetch('https://mrwhiskers.chat/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(whiskerPayload),
    });

    if (!whiskerResponse.ok) {
      const errorText = await whiskerResponse.text();
      return NextResponse.json(
        {
          error: 'Failed to send to Mr. Whiskers',
          details: errorText,
          report, // Still return the compiled report
        },
        { status: whiskerResponse.status }
      );
    }

    const whiskerResult = await whiskerResponse.json();

    return NextResponse.json({
      success: true,
      report,
      whiskerResponse: whiskerResult,
    });
  } catch (error) {
    console.error('Daily report POST error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process daily report',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Format the report as a human-readable message
function formatReportForMessage(report: DailyReportPayload): string {
  const lines: string[] = [];

  lines.push(`🌌 THE INTERSTELLAR BULLETIN`);
  lines.push(`📅 ${report.date}`);
  lines.push('');

  // APOD
  if (report.apod) {
    lines.push(`📸 ASTRONOMY PICTURE OF THE DAY`);
    lines.push(`"${report.apod.title}"`);
    lines.push('');
  }

  // Solar Activity
  lines.push(`☀️ SOLAR ACTIVITY REPORT`);
  if (report.solarActivity.solarFlares.count > 0) {
    lines.push(`• ${report.solarActivity.solarFlares.count} solar flares in the last 30 days`);
    if (report.solarActivity.solarFlares.strongest) {
      lines.push(`• Strongest class: ${report.solarActivity.solarFlares.strongest}`);
    }
  } else {
    lines.push(`• Solar activity: Quiet`);
  }
  if (report.solarActivity.cme.count > 0) {
    lines.push(`• ${report.solarActivity.cme.count} coronal mass ejections detected`);
  }
  lines.push('');

  // NEOs
  lines.push(`🪨 NEAR-EARTH OBJECTS`);
  lines.push(`• ${report.nearEarthObjects.count} close approaches in next 30 days`);
  if (report.nearEarthObjects.closestApproach) {
    const neo = report.nearEarthObjects.closestApproach;
    lines.push(`• Closest: ${neo.designation} on ${neo.date}`);
    lines.push(`  Distance: ${neo.distanceLunar.toFixed(1)} lunar distances`);
  }
  lines.push('');

  // Meteor Showers
  lines.push(`☄️ METEOR SHOWERS`);
  if (report.meteorShowers.active.length > 0) {
    report.meteorShowers.active.forEach(s => {
      const peakStatus = s.daysToPeak === 0 ? 'PEAK TODAY!' :
        s.daysToPeak > 0 ? `peak in ${s.daysToPeak} days` : `${Math.abs(s.daysToPeak)} days past peak`;
      lines.push(`• ${s.name}: Active (${peakStatus}, ZHR: ${s.zhr})`);
    });
  } else if (report.meteorShowers.nextUp) {
    lines.push(`• Next up: ${report.meteorShowers.nextUp.name} (${report.meteorShowers.nextUp.peakDate})`);
  } else {
    lines.push(`• No major activity`);
  }
  lines.push('');

  lines.push(`🚀 Stay curious, space cadet!`);
  lines.push(`— The Interstellar Weather Bureau`);

  return lines.join('\n');
}
