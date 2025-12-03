"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import {
  Mail,
  Sparkles,
  Sun,
  Telescope,
  Waves,
  Mountain,
  Orbit,
  Flame,
  Zap,
  Loader2,
  Check,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const BULLETIN_NAMES = [
  "The Interstellar Bulletin",
  "Sol's Wake-Up Call",
  "The Void Report",
  "The Galactic Forecast",
  "Dispatch from the Bureau",
];

export function DailyRoundsCTA() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!phoneNumber.trim()) {
      setStatus("error");
      setMessage("Please enter a phone number");
      return;
    }

    const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");
    if (!/^\+?[1-9]\d{6,14}$/.test(cleanNumber)) {
      setStatus("error");
      setMessage("Please enter a valid phone number with country code");
      return;
    }

    // Add + if not present
    const fullNumber = cleanNumber.startsWith("+") ? cleanNumber : `+${cleanNumber}`;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/daily-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: fullNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setMessage("Your first bulletin is on its way!");
      setPhoneNumber("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
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
              <LayoutTextFlip words={BULLETIN_NAMES} duration={3000} wordClassName="text-primary" />
            </h3>
          </div>

          <p className="text-neutral-400 text-sm md:text-base max-w-xl">
            Every morning, your weary weatherman compiles a comprehensive cosmic briefing. Earth extremes, ocean conditions, solar flares, asteroid approaches, meteor showers, Mars weather, comets, exoplanets—plus one scientifically accurate but utterly absurd weather phenomenon from somewhere in the galaxy.
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Mountain className="h-3.5 w-3.5" />
              <span>Earth Weather</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Waves className="h-3.5 w-3.5" />
              <span>Ocean Conditions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5" />
              <span>Solar Activity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Meteor Showers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Orbit className="h-3.5 w-3.5" />
              <span>Mars & NEOs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5" />
              <span>Comets</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Telescope className="h-3.5 w-3.5" />
              <span>Exoplanets</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              <span>Absurd Forecast</span>
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="tel"
              placeholder="1 555 123 4567"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              disabled={status === "loading"}
              className="min-w-[180px] bg-white/[0.05] border-white/[0.1] text-white placeholder:text-neutral-500"
            />
            <Button
              onClick={handleSubscribe}
              disabled={status === "loading" || status === "success"}
              className={`whitespace-nowrap ${status === "success" ? "bg-emerald-600 hover:bg-emerald-600" : ""}`}
            >
              {status === "loading" && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4 mr-2" />}
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send First Bulletin"}
            </Button>
          </div>
          {message && (
            <div className={`flex items-center gap-1.5 text-xs mt-2 ${status === "error" ? "text-red-400" : "text-emerald-400"}`}>
              {status === "error" && <AlertCircle className="h-3 w-3" />}
              {status === "success" && <Check className="h-3 w-3" />}
              {message}
            </div>
          )}
          {!message && (
            <p className="text-xs text-neutral-500 mt-2">
              Include country code (e.g. 1 for US). Delivered via{" "}
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
          )}
        </div>
      </div>
    </div>
  );
}
