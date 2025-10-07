import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Titanic wreck coordinates: 41.7325°N, 49.9469°W
    const latitude = 41.7325;
    const longitude = -49.9469;

    // Open-Meteo Marine Weather API for wave data
    const marineParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current: 'wave_height,swell_wave_height,wave_period,wave_direction',
      timezone: 'auto',
    });

    const marineUrl = `https://marine-api.open-meteo.com/v1/marine?${marineParams.toString()}`;

    const marineResponse = await fetch(marineUrl, {
      next: { revalidate: 1800 }, // Cache for 30 minutes
    });

    if (!marineResponse.ok) {
      throw new Error('Failed to fetch marine data');
    }

    const marineData = await marineResponse.json();

    // Open-Meteo Weather API for temperature
    const weatherParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current: 'temperature_2m,surface_pressure',
      temperature_unit: 'fahrenheit',
      timezone: 'auto',
    });

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?${weatherParams.toString()}`;

    const weatherResponse = await fetch(weatherUrl, {
      next: { revalidate: 1800 },
    });

    let weatherData = null;
    if (weatherResponse.ok) {
      weatherData = await weatherResponse.json();
    }

    // Calculate iceberg risk based on month (iceberg season in North Atlantic)
    const currentMonth = new Date().getMonth() + 1; // 1-12
    let icebergRisk = 'Low';
    let icebergDetails = 'Minimal iceberg activity';

    // Peak iceberg season: February-July, especially March-June
    if (currentMonth >= 3 && currentMonth <= 6) {
      icebergRisk = 'High';
      icebergDetails = 'Peak iceberg season - heightened risk';
    } else if (currentMonth === 2 || currentMonth === 7) {
      icebergRisk = 'Moderate';
      icebergDetails = 'Moderate iceberg activity';
    }

    // Estimate ocean temperature at surface (cold North Atlantic waters)
    // Typical range: 32-50°F depending on season
    const estimatedWaterTempF = currentMonth >= 6 && currentMonth <= 9
      ? 45 + Math.random() * 5  // Summer: 45-50°F
      : 32 + Math.random() * 8; // Winter/Spring: 32-40°F
    const estimatedWaterTempC = ((estimatedWaterTempF - 32) * 5/9).toFixed(1);

    return NextResponse.json({
      current: {
        time: marineData.current.time,
        wave_height: marineData.current.wave_height,
        swell_wave_height: marineData.current.swell_wave_height,
        wave_period: marineData.current.wave_period,
        wave_direction: marineData.current.wave_direction,
        air_temperature: weatherData?.current?.temperature_2m,
        surface_pressure: weatherData?.current?.surface_pressure,
        water_temperature_estimate: parseFloat(estimatedWaterTempF.toFixed(1)),
      },
      iceberg_warning: {
        risk_level: icebergRisk,
        details: icebergDetails,
        season: currentMonth >= 2 && currentMonth <= 7,
      },
      location: {
        latitude,
        longitude,
        name: 'RMS Titanic',
        description: 'Wreck Site',
        depth: '12,500 ft (3,800 m)',
        sank: 'April 15, 1912',
      },
    });
  } catch (error) {
    console.error('Titanic Site API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
