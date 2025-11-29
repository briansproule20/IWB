"use client";

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
} from "lucide-react";
import Link from "next/link";

const BULLETIN_NAMES = [
  "The Interstellar Bulletin",
  "Sol's Wake-Up Call",
  "The Void Report",
  "The Galactic Forecast",
  "Dispatch from the Bureau",
];

export default function DailyRoundsPage() {
  const features = [
    {
      icon: Sun,
      title: "Solar Activity Report",
      description:
        "Daily updates on solar flares, coronal mass ejections, and sunspot activity. Know when to reschedule that EVA.",
    },
    {
      icon: AlertTriangle,
      title: "Near-Earth Objects",
      description:
        "Tracking asteroids and comets that swing by your neighborhood. Most are harmless. Probably.",
    },
    {
      icon: Sparkles,
      title: "Meteor Shower Calendar",
      description:
        "Never miss the Perseids, Geminids, or that obscure shower only visible from the dark side of Europa.",
    },
    {
      icon: Telescope,
      title: "Exoplanet Discoveries",
      description:
        "New worlds discovered by Terran telescopes. Some might even be habitable. Emphasis on 'might'.",
    },
    {
      icon: Cloud,
      title: "Your Local Forecast",
      description:
        "Weather for your coordinates, delivered in the sardonic style of someone who's been forecasting for 300 years.",
    },
    {
      icon: Zap,
      title: "The Absurd Forecast",
      description:
        "One completely real but utterly ridiculous weather phenomenon from somewhere in the galaxy. Educational despair included.",
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
                  Subscribe to the Daily Rounds
                </h2>
                <p className="text-neutral-400 max-w-md">
                  Get your personalized cosmic weather report every morning. It's free,
                  it's informative, and it might just save your life. No pressure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  disabled
                  className="flex-1 bg-white/[0.03] border-white/[0.05] text-neutral-600 cursor-not-allowed"
                />
                <Button disabled size="lg" className="opacity-50 cursor-not-allowed">
                  Coming Soon
                </Button>
              </div>

              <p className="text-xs text-neutral-500">
                Delivered daily via iMessage. The weatherman is working on it.
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
            <Button
              size="lg"
              disabled
              className="opacity-50 cursor-not-allowed"
            >
              Coming Soon
            </Button>
            <p className="text-sm text-neutral-400">
              Join fellow travelers who trust the Interstellar Weatherman with their
              cosmic commute.
            </p>
          </div>
        </div>
      </div>
    </DotBackground>
  );
}
