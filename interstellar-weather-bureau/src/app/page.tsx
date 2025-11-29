"use client";

import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DotBackground from "@/components/ui/dot-background";
import APODCard from "@/components/nasa/apod-card";
import { DailyRoundsCTA } from "@/components/daily-rounds/daily-rounds-cta";
import { ArrowRight, MessageSquare, Telescope, Rocket, FileText, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <DotBackground>
      <div className="h-full w-full overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 py-8 md:py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              The Interstellar Weather Bureau
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Your gateway to cosmic conditions across the solar system and beyond
            </p>
          </div>

          {/* Featured APOD */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                NASA's Astronomy Picture of the Day
              </h2>
              <Link
                href="/gallery"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group"
              >
                <span className="text-sm md:text-base">View Archive</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <BentoGrid className="md:auto-rows-[400px]">
              <BentoGridItem
                title=""
                description=""
                header={<APODCard />}
                className="md:col-span-2"
              />
            </BentoGrid>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Reports Card */}
            <Link href="/reports">
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.2] bg-black hover:bg-white/[0.05] transition-all duration-300 p-6 md:p-8 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.05] text-white">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Solar System Reports
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base">
                      Explore real-time conditions across planets, moons, and cosmic phenomena throughout your solar system
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300 group-hover:text-white mt-4 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">View Reports</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Chat Card */}
            <Link href="/chat">
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.2] bg-black hover:bg-white/[0.05] transition-all duration-300 p-6 md:p-8 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.05] text-white">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Interstellar Weatherman
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base">
                      Chat with the interstellar weatherman about cosmic conditions, celestial events, and space weather forecasts—just know he's not always in a good mood after 300 years on the job
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300 group-hover:text-white mt-4 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Start Chatting</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* AetherScope Card */}
            <Link href="/aetherscope">
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.2] bg-black hover:bg-white/[0.05] transition-all duration-300 p-6 md:p-8 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.05] text-white">
                        <Telescope className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        AetherScope
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base">
                      Visualize never-before-seen interstellar phenomena with AI-powered image generation
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300 group-hover:text-white mt-4 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Explore Space</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Vehicles Card */}
            <Link href="/vehicles">
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.2] bg-black hover:bg-white/[0.05] transition-all duration-300 p-6 md:p-8 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.05] text-white">
                        <Rocket className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Terran Vehicles
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base">
                      Compare and explore spacecraft, rockets, and other Terran vehicles designed for stellar and interstellar travel
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300 group-hover:text-white mt-4 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">View Vehicles</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Daily Bulletin CTA */}
          <DailyRoundsCTA />
        </div>
      </div>
    </DotBackground>
  );
}