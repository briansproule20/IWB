"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Mail, Sparkles, Sun, Telescope, Loader2, Check } from "lucide-react";
import Link from "next/link";

const BULLETIN_NAMES = [
  "The Interstellar Bulletin",
  "Sol's Wake-Up Call",
  "The Void Report",
  "The Galactic Forecast",
  "Dispatch from the Bureau",
];

export function DailyRoundsCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Implement actual email signup
    // For now, simulate a successful signup
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.2] bg-black p-6 md:p-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        {/* Content */}
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-white/[0.05] text-white">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              <LayoutTextFlip words={BULLETIN_NAMES} duration={3000} />
            </h3>
          </div>

          <p className="text-neutral-400 text-sm md:text-base max-w-xl">
            Every morning, your weary weatherman drags himself out of cryosleep to deliver your personalized cosmic forecast. Solar flares, near-Earth objects, meteor showers, exoplanet discoveries—plus one completely absurd weather event that <span className="italic">technically</span> exists somewhere in the galaxy.
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5" />
              <span>Solar Activity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>NEOs & Meteor Showers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Telescope className="h-3.5 w-3.5" />
              <span>Exoplanet Discoveries</span>
            </div>
          </div>

          <Link
            href="/daily-rounds"
            className="inline-flex text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Learn more about the bulletin →
          </Link>
        </div>

        {/* Signup form */}
        <div className="w-full md:w-auto">
          {status === "success" ? (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.05] border border-white/[0.1]">
              <div className="p-2 rounded-full bg-green-500/20 text-green-400">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">You're on the list</p>
                <p className="text-xs text-neutral-400">Check your cryopod for confirmation</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-[240px] bg-white/[0.05] border-white/[0.1] focus:border-primary"
                disabled={status === "loading"}
                required
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="whitespace-nowrap"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Get the Forecast"
                )}
              </Button>
            </form>
          )}
          <p className="text-xs text-neutral-500 mt-2">
            Delivered daily at 0600 galactic standard time. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
