"use client";

import { useState } from "react";
import DotBackground from "@/components/ui/dot-background";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import {
  Mail,
  Sun,
  Sparkles,
  Telescope,
  Cloud,
  AlertTriangle,
  Zap,
  Globe,
  Clock,
  ArrowLeft,
  ChevronDown,
  Code,
  Terminal,
  Webhook,
  Loader2,
  Check,
  AlertCircle,
  Waves,
  Mountain,
  Orbit,
  Flame,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

const BULLETIN_NAMES = [
  "The Interstellar Bulletin",
  "Sol's Wake-Up Call",
  "The Void Report",
  "The Galactic Forecast",
  "Dispatch from the Bureau",
];

export default function DailyRoundsPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!phoneNumber.trim()) {
      setStatus("error");
      setMessage("Please enter a phone number");
      return;
    }

    // Basic phone validation - should start with + and have digits
    const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");
    if (!/^\+?[1-9]\d{6,14}$/.test(cleanNumber)) {
      setStatus("error");
      setMessage("Please enter a valid phone number (e.g. +1 555 123 4567)");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/daily-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: cleanNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setMessage("Your first bulletin is on its way!");
      setPhoneNumber("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const features = [
    {
      icon: Mountain,
      title: "Earth Weather",
      description:
        "Conditions from Everest summit to the hottest and coldest spots on the planet. Death Valley, Vostok Station, and everywhere extreme.",
    },
    {
      icon: Waves,
      title: "Ocean Conditions",
      description:
        "Wave heights from Drake Passage and Nazare, plus iceberg risk at the Titanic site. For sailors and surfers with a death wish.",
    },
    {
      icon: Sun,
      title: "Solar Activity",
      description:
        "Solar flares, coronal mass ejections, and geomagnetic storms. Know when to reschedule that EVA or expect aurora.",
    },
    {
      icon: AlertTriangle,
      title: "Near-Earth Objects",
      description:
        "Tracking asteroids that swing by your neighborhood. Distance in lunar units. Most are harmless. Probably.",
    },
    {
      icon: Sparkles,
      title: "Meteor Showers",
      description:
        "Active showers and what's coming next. Never miss the Perseids, Geminids, or that obscure shower only visible from Europa.",
    },
    {
      icon: Telescope,
      title: "Exoplanet Spotlight",
      description:
        "Featured worlds from across the galaxy. New discoveries from Terran telescopes. Some might be habitable. Emphasis on 'might'.",
    },
    {
      icon: Orbit,
      title: "Mars Weather",
      description:
        "Live conditions from the red planet. Sol date, high and low temps. For future colonists and current dreamers.",
    },
    {
      icon: Flame,
      title: "Comets",
      description:
        "Upcoming perihelion approaches and visibility forecasts. Get alerts when icy visitors swing by the inner solar system.",
    },
    {
      icon: Zap,
      title: "Absurd Forecast",
      description:
        "One completely real but utterly ridiculous weather phenomenon from somewhere in the galaxy. Iron rain, diamond hail, and worse.",
    },
  ];

  const sampleForecasts = [
    {
      location: "Jupiter",
      forecast: "Great Red Spot holding steady at 400 mph winds. Excellent day for absolutely nothing outdoors.",
    },
    {
      location: "Miami, FL",
      forecast: "85°F, humid, 40% chance of afternoon thunderstorms. Basically every day. You know the drill.",
    },
    {
      location: "Pittsburgh, PA",
      forecast: "Gray. Just gray. Might be 40°F, might be 70°F. Bring layers and lower your expectations.",
    },
    {
      location: "WASP-76b",
      forecast: "Iron rain expected in the evening. Umbrella status: inadequate.",
    },
    {
      location: "Titan",
      forecast: "Methane lake levels stable. Swimming not recommended unless you enjoy -179°C.",
    },
  ];

  return (
    <DotBackground>
      <div className="h-full w-full overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-12">
          {/* Back navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Home</span>
          </Link>

          {/* Hero Section */}
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-neutral-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Delivered daily at 0600 GST</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              <LayoutTextFlip words={BULLETIN_NAMES} duration={3000} wordClassName="text-primary" />
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Three hundred years on the job, and they still make me do the morning shift.
              The least I can do is keep you informed about what's happening across this
              godforsaken galaxy.
            </p>
          </div>

          {/* Signup Section */}
          <div className="relative overflow-hidden rounded-xl border border-white/[0.2] bg-black p-6 md:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="p-4 rounded-full bg-white/[0.05] text-white">
                <Mail className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Get the Daily Bulletin
                </h2>
                <p className="text-neutral-400 max-w-md">
                  Your personalized cosmic weather report, delivered via iMessage.
                  It's free, it's informative, and it might just save your life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <Input
                  type="tel"
                  placeholder="+1 555 123 4567"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  disabled={status === "loading"}
                  className="flex-1 bg-white/[0.05] border-white/[0.1] text-white placeholder:text-neutral-500"
                />
                <Button
                  size="lg"
                  onClick={handleSubscribe}
                  disabled={status === "loading" || status === "success"}
                  className={status === "success" ? "bg-emerald-600 hover:bg-emerald-600" : ""}
                >
                  {status === "loading" && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  {status === "success" && <Check className="h-4 w-4 mr-2" />}
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send My First Bulletin"}
                </Button>
              </div>

              {message && (
                <div className={`flex items-center gap-2 text-sm ${status === "error" ? "text-red-400" : "text-emerald-400"}`}>
                  {status === "error" && <AlertCircle className="h-4 w-4" />}
                  {status === "success" && <Check className="h-4 w-4" />}
                  {message}
                </div>
              )}

              <p className="text-xs text-neutral-500">
                Delivered daily via iMessage at 0600 galactic standard time with the help of{" "}
                <a
                  href="https://mrwhiskers.chat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mr. Whiskers
                </a>
                .
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                What's in the Forecast
              </h2>
              <p className="text-neutral-400">
                Everything you need to navigate your day in the cosmos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-xl border border-white/[0.1] bg-black hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/[0.05] text-neutral-400 group-hover:text-white transition-colors">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-neutral-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Absurd Forecasts */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Sample Absurd Forecasts
              </h2>
            </div>

            <div className="space-y-3">
              {sampleForecasts.map((item) => (
                <div
                  key={item.location}
                  className="p-4 rounded-lg border border-white/[0.1] bg-black"
                >
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">{item.location}:</span>
                      <span className="text-neutral-400 ml-2">{item.forecast}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-neutral-500 italic">
              "Every absurd forecast is based on actual scientific observations. The
              galaxy is stranger than fiction. Trust me, I've been watching it for
              centuries."
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-4 py-8 border-t border-white/[0.1]">
            <h3 className="text-xl font-bold text-white">
              Ready for your first forecast?
            </h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              Enter your phone number above and we'll send you today's bulletin right now.
              Join fellow travelers who trust the Interstellar Weatherman with their cosmic commute.
            </p>
          </div>

          {/* Developer Info Dropdown */}
          <Collapsible className="border-t border-white/[0.1] pt-8">
            <CollapsibleTrigger className="flex items-center justify-between w-full group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/[0.05] text-neutral-400 group-hover:text-white transition-colors">
                  <Code className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                    How It Works
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Setup daily delivery & API integration
                  </p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-neutral-400 group-hover:text-white transition-all group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-6 space-y-8">
              {/* How It Works */}
              <div className="space-y-4">
                <h4 className="font-medium text-white">Architecture</h4>
                <div className="p-4 rounded-lg border border-white/[0.1] bg-white/[0.02] space-y-4">
                  <p className="text-sm text-neutral-400">
                    The Interstellar Weather Bureau provides the data layer. Mr. Whiskers handles message delivery and scheduling.
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 text-sm">
                    <div className="flex-1 p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-primary font-medium mb-1">1. IWB compiles report</p>
                      <p className="text-xs text-neutral-500">
                        Fetches live data from NASA, weather APIs, and space agencies
                      </p>
                    </div>
                    <div className="flex-1 p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-primary font-medium mb-1">2. Whiskers delivers</p>
                      <p className="text-xs text-neutral-500">
                        Routes the formatted bulletin to your phone via iMessage
                      </p>
                    </div>
                    <div className="flex-1 p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-primary font-medium mb-1">3. Daily at 0600 GST</p>
                      <p className="text-xs text-neutral-500">
                        Scheduled job triggers automatically every morning
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setup Daily Delivery */}
              <div className="space-y-4">
                <h4 className="font-medium text-white">Setup Daily Delivery</h4>
                <div className="p-4 rounded-lg border border-white/[0.1] bg-white/[0.02] space-y-4">
                  <p className="text-sm text-neutral-400">
                    To receive the bulletin every day at 0600, ask Mr. Whiskers to set up a scheduled job.
                    Click below to start a conversation with a pre-configured message:
                  </p>
                  <a
                    href="sms:+17243216167&body=Hey Whiskers! Please set up a daily scheduled job at 0600 to fetch the Interstellar Weather Bulletin from https://interstellar.computer/api/daily-report and send me the formattedMessage. Thanks!"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">Text Mr. Whiskers to Setup Daily Delivery</span>
                  </a>
                  <p className="text-xs text-neutral-500">
                    Opens your iMessage app with a pre-filled request. Whiskers will confirm once your daily bulletin is scheduled.
                  </p>
                </div>
              </div>

              {/* Report Contents */}
              <div className="space-y-4">
                <h4 className="font-medium text-white">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {[
                    { name: "Earth Weather", desc: "Everest, extremes" },
                    { name: "Ocean Conditions", desc: "Waves, icebergs" },
                    { name: "Solar Activity", desc: "Flares, CMEs, storms" },
                    { name: "Near-Earth Objects", desc: "Asteroid approaches" },
                    { name: "Meteor Showers", desc: "Active & upcoming" },
                    { name: "Exoplanet Spotlight", desc: "Featured worlds" },
                    { name: "Mars Weather", desc: "Live from the red planet" },
                    { name: "Comets", desc: "Perihelion alerts" },
                    { name: "Absurd Forecast", desc: "Cosmic insanity" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="p-2 rounded-lg border border-white/[0.1] bg-black"
                    >
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-neutral-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Endpoints */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="h-4 w-4" />
                  <h4 className="font-medium">API Reference</h4>
                </div>

                <div className="space-y-3">
                  {/* GET endpoint */}
                  <div className="p-4 rounded-lg border border-white/[0.1] bg-white/[0.02] space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        GET
                      </span>
                      <code className="text-sm text-neutral-300 font-mono">
                        /api/daily-report
                      </code>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Returns the compiled bulletin as JSON. Whiskers fetches this endpoint and sends <code className="text-neutral-300 bg-white/[0.05] px-1 rounded text-xs">formattedMessage</code> to subscribers.
                    </p>
                    <div className="bg-black/50 rounded p-3 overflow-x-auto">
                      <pre className="text-xs text-neutral-400 font-mono">
{`curl https://interstellar.computer/api/daily-report`}
                      </pre>
                    </div>
                  </div>

                  {/* POST endpoint */}
                  <div className="p-4 rounded-lg border border-white/[0.1] bg-white/[0.02] space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        POST
                      </span>
                      <code className="text-sm text-neutral-300 font-mono">
                        /api/daily-report
                      </code>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Compile and immediately send a bulletin to a specific phone number via Whiskers.
                    </p>
                    <div className="bg-black/50 rounded p-3 overflow-x-auto">
                      <pre className="text-xs text-neutral-400 font-mono whitespace-pre">
{`curl -X POST https://interstellar.computer/api/daily-report \\
  -H "Content-Type: application/json" \\
  -d '{"phoneNumber": "+15551234567"}'`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Bus */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Webhook className="h-4 w-4" />
                  <h4 className="font-medium">Message Bus</h4>
                </div>

                <div className="p-4 rounded-lg border border-white/[0.1] bg-white/[0.02] space-y-3">
                  <p className="text-sm text-neutral-400">
                    IWB posts to the Whiskers message bus. Whiskers prioritizes and delivers messages via iMessage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                    <div className="p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-xs text-neutral-500 mb-1">Endpoint</p>
                      <code className="text-xs text-primary font-mono">mrwhiskers.chat/api/message</code>
                    </div>
                    <div className="p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-xs text-neutral-500 mb-1">Source</p>
                      <code className="text-xs text-primary font-mono">IWB-daily-report</code>
                    </div>
                    <div className="p-3 rounded bg-black/30 border border-white/[0.05]">
                      <p className="text-xs text-neutral-500 mb-1">Payload Type</p>
                      <code className="text-xs text-primary font-mono">daily-interstellar-bulletin</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/[0.05]">
                <a
                  href="https://mrwhiskers.chat/scheduled-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg border border-white/[0.1] text-neutral-400 hover:text-white hover:border-white/[0.2] transition-colors text-sm"
                >
                  View Scheduled Jobs
                </a>
                <a
                  href="https://mrwhiskers.chat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg border border-white/[0.1] text-neutral-400 hover:text-white hover:border-white/[0.2] transition-colors text-sm"
                >
                  Learn about Mr. Whiskers
                </a>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </DotBackground>
  );
}
