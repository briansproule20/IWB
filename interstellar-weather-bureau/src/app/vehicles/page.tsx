"use client";

import { useState, useEffect } from "react";
import DotBackground from "@/components/ui/dot-background";

interface Vehicle {
  name: string;
  universe: string;
  franchise: string | null;
  class_or_variant: string;
  type: string;
  status: string;
  first_flight_or_era: number | string;
  mass_liftoff_kg: number | null;
  thrust_liftoff_kN: number | null;
  tw_liftoff: number | null;
  payload_leo_kg: number | null;
  payload_gto_kg: number | null;
  payload_other: string | null;
  propulsion_or_drive: string;
  engine_or_drive_model: string;
  energy_source: string;
  cost_estimate: string | null;
  destinations: string;
  notes: string | null;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    fetch('/data/spacecraft_and_launchers_unified.jsonl')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then(text => {
        const lines = text.trim().split('\n').filter(line => line.length > 0);
        const parsed = lines.map(line => JSON.parse(line));
        setVehicles(parsed);
        console.log('Loaded vehicles:', parsed.length);
      })
      .catch(err => {
        console.error('Failed to load vehicles:', err);
      });
  }, []);

  const sortedVehicles = [...vehicles].sort((a, b) => {
    // Always put fictional ships at the end
    if (a.universe === "Fiction" && b.universe !== "Fiction") return 1;
    if (a.universe !== "Fiction" && b.universe === "Fiction") return -1;
    
    // Sort real vehicles by year
    const getYear = (v: Vehicle) => {
      const year = typeof v.first_flight_or_era === 'number' 
        ? v.first_flight_or_era 
        : parseInt(String(v.first_flight_or_era).match(/\d+/)?.[0] || '0');
      return year;
    };
    
    const yearA = getYear(a);
    const yearB = getYear(b);
    
    return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
  });

  const formatNumber = (num: number | null) => {
    if (num === null) return "—";
    return num.toLocaleString();
  };

  const formatMass = (kg: number | null) => {
    if (kg === null) return "—";
    if (kg >= 1000000) return `${(kg / 1000000).toFixed(1)} kt`;
    if (kg >= 1000) return `${(kg / 1000).toFixed(1)} t`;
    return `${kg.toFixed(0)} kg`;
  };

  const formatDestinations = (dest: string): string => {
    // Make destinations more readable
    return dest
      .replace(/LEO/g, 'Low Earth Orbit')
      .replace(/GTO/g, 'Geosync Transfer')
      .replace(/TLI/g, 'Trans-Lunar')
      .replace(/TMI/g, 'Trans-Mars')
      .replace(/SSO/g, 'Sun-Sync Orbit')
      .replace(/ISS/g, 'Space Station')
      .replace(/\(ISS,/g, '(Station,');
  };

  const getManufacturer = (vehicle: Vehicle): string => {
    if (vehicle.universe === "Fiction") return vehicle.franchise || "Unknown";
    
    // Real-world manufacturers
    const name = vehicle.name.toLowerCase();
    if (name.includes('v-2') || name.includes('a-4')) return 'Nazi Germany';
    if (name.includes('sputnik')) return 'USSR / OKB-1';
    if (name.includes('redstone')) return 'USA / Army Ballistic Missile Agency';
    if (name.includes('r-7') || name.includes('semyorka')) return 'USSR / OKB-1';
    if (name.includes('atlas') && !name.includes('atlas v')) return 'USA / Convair';
    if (name.includes('titan')) return 'USA / Martin Marietta';
    if (name.includes('iss') || name.includes('international space station')) return 'NASA / Roscosmos / ESA / JAXA / CSA';
    if (name.includes('voyager')) return 'NASA / JPL';
    if (name.includes('hubble')) return 'NASA / ESA';
    if (name.includes('webb') || name.includes('jwst')) return 'NASA / ESA / CSA';
    if (name.includes('new horizons')) return 'NASA / APL';
    if (name.includes('curiosity') || name.includes('perseverance') || name.includes('spirit') || name.includes('opportunity')) return 'NASA / JPL';
    if (name.includes('apollo') && name.includes('rover')) return 'NASA / Boeing';
    if (name.includes('falcon') || name.includes('starship')) return 'SpaceX';
    if (name.includes('saturn') || name.includes('sls') || name.includes('space shuttle') || name.includes('shuttle')) return 'NASA';
    if (name.includes('delta') || name.includes('atlas v') || name.includes('vulcan')) return 'ULA';
    if (name.includes('ariane')) return 'ESA / Arianespace';
    if (name.includes('new glenn') || name.includes('blue origin')) return 'Blue Origin';
    if (name.includes('soyuz') || name.includes('proton') || name.includes('angara')) return 'Roscosmos';
    if (name.includes('long march')) return 'CNSA';
    if (name.includes('h-ii') || name.includes('h3')) return 'JAXA';
    if (name.includes('electron') || name.includes('neutron')) return 'Rocket Lab';
    if (name.includes('lvm') || name.includes('pslv') || name.includes('gslv')) return 'ISRO';
    if (name.includes('kslv') || name.includes('nuri')) return 'KARI';
    if (name.includes('vega')) return 'ESA / Avio';
    
    return 'Various';
  };

  return (
    <DotBackground>
      <div className="h-full w-full p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Hero Section */}
          <div className="text-center space-y-4 py-6 md:py-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Terran Stellar Vehicles
            </h1>
            <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
              From Earth to the stars — past, present, future, and speculative
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-neutral-400">
              {vehicles.length} vehicles
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Sort:</span>
              <button
                onClick={() => setSortOrder("newest")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  sortOrder === "newest"
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                Newest First
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  sortOrder === "oldest"
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                Oldest First
              </button>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-white/30 transition-all group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                {/* Header - Fixed Height */}
                <div className="mb-3 min-h-[60px]">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                      {vehicle.name}
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono flex-shrink-0">
                      {typeof vehicle.first_flight_or_era === 'number' 
                        ? vehicle.first_flight_or_era 
                        : String(vehicle.first_flight_or_era).match(/\d+/)?.[0] || '—'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-neutral-400 line-clamp-1">{getManufacturer(vehicle)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <span className={`${
                      vehicle.status.includes("Active")
                        ? "text-green-400"
                        : vehicle.status.includes("Retired")
                        ? "text-neutral-500"
                        : "text-amber-400"
                    }`}>
                      {vehicle.status}
                    </span>
                    {vehicle.universe === "Fiction" && (
                      <>
                        <span className="text-neutral-600">•</span>
                        <span className="text-purple-400">Fictional</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Stats Section - Fixed Height */}
                <div className="flex-1 space-y-2 text-xs mb-3">
                  <div className="flex justify-between items-center h-5">
                    <span className="text-neutral-500">Payload LEO</span>
                    <span className="text-white font-mono font-semibold">
                      {formatMass(vehicle.payload_leo_kg)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center h-5">
                    <span className="text-neutral-500">Thrust</span>
                    <span className="text-white font-mono">
                      {vehicle.thrust_liftoff_kN ? `${formatNumber(vehicle.thrust_liftoff_kN)} kN` : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center h-5">
                    <span className="text-neutral-500">T/W</span>
                    <span className="text-white font-mono">
                      {vehicle.tw_liftoff ? vehicle.tw_liftoff.toFixed(2) : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between items-start gap-2 pt-1 border-t border-white/5">
                    <span className="text-neutral-500">Engine</span>
                    <span className="text-neutral-300 text-right text-xs line-clamp-2 flex-1">
                      {vehicle.engine_or_drive_model}
                    </span>
                  </div>
                </div>

                {/* Missions/Destinations - Fixed at Bottom */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2.5 py-2 mt-auto">
                  <p className="text-[10px] md:text-xs text-blue-200 text-center line-clamp-1 leading-tight">
                    {formatDestinations(vehicle.destinations)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Modal */}
          {selectedVehicle && (
            <div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4"
              onClick={() => setSelectedVehicle(null)}
            >
              <div
                className="w-full md:max-w-3xl bg-black/98 md:bg-neutral-900/95 border-t md:border border-white/20 rounded-t-3xl md:rounded-xl overflow-hidden flex flex-col"
                style={{ maxHeight: '85vh' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drag Handle (Mobile) */}
                <div className="md:hidden flex-shrink-0 pt-3 pb-2">
                  <div className="w-10 h-1 bg-white/40 rounded-full mx-auto" />
                </div>

                {/* Header */}
                <div className="flex-shrink-0 px-5 md:px-6 py-3 md:py-4 border-b border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg md:text-xl font-bold text-white break-words">
                        {selectedVehicle.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <span className="text-neutral-400">{getManufacturer(selectedVehicle)}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="text-neutral-500 font-mono">
                          {typeof selectedVehicle.first_flight_or_era === 'number' 
                            ? selectedVehicle.first_flight_or_era 
                            : selectedVehicle.first_flight_or_era}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedVehicle(null)}
                      className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-5 md:px-6 py-4 md:py-5 space-y-4 overscroll-contain">
                  {/* Status & Era */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-neutral-500 mb-1">Status</p>
                      <p className="text-sm text-white font-medium">{selectedVehicle.status}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-neutral-500 mb-1">First Flight</p>
                      <p className="text-sm text-white font-medium">{selectedVehicle.first_flight_or_era}</p>
                    </div>
                  </div>

                  {/* Performance Specs */}
                  {selectedVehicle.universe === "Real" && (
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Performance</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {selectedVehicle.mass_liftoff_kg && (
                          <div className="flex justify-between bg-white/5 rounded p-2">
                            <span className="text-neutral-500">Mass</span>
                            <span className="text-neutral-300 font-mono">{formatMass(selectedVehicle.mass_liftoff_kg)}</span>
                          </div>
                        )}
                        {selectedVehicle.thrust_liftoff_kN && (
                          <div className="flex justify-between bg-white/5 rounded p-2">
                            <span className="text-neutral-500">Thrust</span>
                            <span className="text-neutral-300 font-mono">{formatNumber(selectedVehicle.thrust_liftoff_kN)} kN</span>
                          </div>
                        )}
                        {selectedVehicle.tw_liftoff && (
                          <div className="flex justify-between bg-white/5 rounded p-2">
                            <span className="text-neutral-500">T/W</span>
                            <span className="text-neutral-300 font-mono">{selectedVehicle.tw_liftoff.toFixed(2)}</span>
                          </div>
                        )}
                        {selectedVehicle.payload_leo_kg && (
                          <div className="flex justify-between bg-white/5 rounded p-2">
                            <span className="text-neutral-500">LEO</span>
                            <span className="text-neutral-300 font-mono">{formatMass(selectedVehicle.payload_leo_kg)}</span>
                          </div>
                        )}
                        {selectedVehicle.payload_gto_kg && (
                          <div className="flex justify-between bg-white/5 rounded p-2">
                            <span className="text-neutral-500">GTO</span>
                            <span className="text-neutral-300 font-mono">{formatMass(selectedVehicle.payload_gto_kg)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Propulsion */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Propulsion</h4>
                    <div className="space-y-2">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-neutral-500 mb-1">Type</p>
                        <p className="text-sm text-neutral-300">{selectedVehicle.propulsion_or_drive}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-neutral-500 mb-1">Engine</p>
                        <p className="text-sm text-neutral-300">{selectedVehicle.engine_or_drive_model}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-neutral-500 mb-1">Energy Source</p>
                        <p className="text-sm text-neutral-300">{selectedVehicle.energy_source}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mission Profile */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Mission</h4>
                    <div className="space-y-2">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-xs text-neutral-500 mb-1">Destinations</p>
                        <p className="text-sm text-neutral-300">{selectedVehicle.destinations}</p>
                      </div>
                      {selectedVehicle.cost_estimate && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-neutral-500 mb-1">Cost Estimate</p>
                          <p className="text-sm text-neutral-300">{selectedVehicle.cost_estimate}</p>
                        </div>
                      )}
                      {selectedVehicle.payload_other && (
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-neutral-500 mb-1">Payload</p>
                          <p className="text-sm text-neutral-300">{selectedVehicle.payload_other}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 p-4 border-t border-white/10 bg-black/30">
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-sm text-white font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DotBackground>
  );
}
