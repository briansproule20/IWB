"use client";

import { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DotBackground from "@/components/ui/dot-background";
import DrakePassageWeather from "@/components/weather/drake-passage-weather";
import ExtremeLocationWeather from "@/components/weather/extreme-location-weather";
import AtacamaDesertWeather from "@/components/weather/atacama-desert-weather";
import DanakilDepressionWeather from "@/components/weather/danakil-depression-weather";
import VostokStationWeather from "@/components/weather/vostok-station-weather";
import SolarFlaresCard from "@/components/nasa/solar-flares-card";
import CMECard from "@/components/nasa/cme-card";
import GeomagneticStormsCard from "@/components/nasa/geomagnetic-storms-card";
import SolarCoreCard from "@/components/nasa/solar-core-card";
import SolarCoronaCard from "@/components/nasa/solar-corona-card";
import IPSCard from "@/components/nasa/ips-card";
import SEPCard from "@/components/nasa/sep-card";
import MPCCard from "@/components/nasa/mpc-card";
import RBECard from "@/components/nasa/rbe-card";
import HSSCard from "@/components/nasa/hss-card";
import LunarEquatorCard from "@/components/nasa/lunar-equator-card";
import LunarCraterCard from "@/components/nasa/lunar-crater-card";
import MareTranquillitatisfCard from "@/components/nasa/mare-tranquillitatis-card";
import NeptuneOceanCard from "@/components/nasa/neptune-ocean-card";
import ChallengerDeepCard from "@/components/ocean/challenger-deep-card";
import NazareWavesCard from "@/components/ocean/nazare-waves-card";
import MDRAtlanticCard from "@/components/ocean/mdr-atlantic-card";
import TitanicSiteCard from "@/components/ocean/titanic-site-card";
import AgulhasPassageCard from "@/components/ocean/agulhas-passage-card";
import BeringStraitCard from "@/components/ocean/bering-strait-card";
import LakeSuperiorCard from "@/components/ocean/lake-superior-card";
import Everest8000mCard from "@/components/peaks/everest-8000m-card";
import K28000mCard from "@/components/peaks/k2-8000m-card";
import Kangchenjunga8000mCard from "@/components/peaks/kangchenjunga-8000m-card";
import Lhotse8000mCard from "@/components/peaks/lhotse-8000m-card";
import Makalu8000mCard from "@/components/peaks/makalu-8000m-card";
import ChoOyu8000mCard from "@/components/peaks/cho-oyu-8000m-card";
import Dhaulagiri8000mCard from "@/components/peaks/dhaulagiri-8000m-card";
import Manaslu8000mCard from "@/components/peaks/manaslu-8000m-card";
import NangaParbat8000mCard from "@/components/peaks/nanga-parbat-8000m-card";
import Annapurna8000mCard from "@/components/peaks/annapurna-8000m-card";
import Gasherbrum18000mCard from "@/components/peaks/gasherbrum1-8000m-card";
import BroadPeak8000mCard from "@/components/peaks/broad-peak-8000m-card";
import Gasherbrum28000mCard from "@/components/peaks/gasherbrum2-8000m-card";
import Shishapangma8000mCard from "@/components/peaks/shishapangma-8000m-card";
import Everest7SummitsCard from "@/components/peaks/everest-7summits-card";
import Aconcagua7SummitsCard from "@/components/peaks/aconcagua-7summits-card";
import Denali7SummitsCard from "@/components/peaks/denali-7summits-card";
import Kilimanjaro7SummitsCard from "@/components/peaks/kilimanjaro-7summits-card";
import Elbrus7SummitsCard from "@/components/peaks/elbrus-7summits-card";
import Vinson7SummitsCard from "@/components/peaks/vinson-7summits-card";
import Kosciuszko7SummitsCard from "@/components/peaks/kosciuszko-7summits-card";
import OlympusMonsCard from "@/components/mars/olympus-mons-card";
import PolarIceCapsCard from "@/components/mars/polar-ice-caps-card";
import VallesMarinerisCard from "@/components/mars/valles-marineris-card";
import TharsisSandstormCard from "@/components/mars/tharsis-sandstorm-card";
import VenusAtmosphereCard from "@/components/venus/venus-atmosphere-card";
import VenusSurfaceCard from "@/components/venus/venus-surface-card";
import MercuryTemperatureCard from "@/components/mercury/mercury-temperature-card";
import MercuryOrbitalCard from "@/components/mercury/mercury-orbital-card";
import GreatRedSpotCard from "@/components/jupiter/great-red-spot-card";
import IoCard from "@/components/jupiter/io-card";
import EuropaCard from "@/components/jupiter/europa-card";
import GanymedeCard from "@/components/jupiter/ganymede-card";
import CallistoCard from "@/components/jupiter/callisto-card";
import TitanCard from "@/components/saturn/titan-card";
import UranusTiltCard from "@/components/uranus/uranus-tilt-card";
import NeptuneWindsCard from "@/components/neptune/neptune-winds-card";
import PlutoHeartCard from "@/components/pluto/pluto-heart-card";
import KuiperBeltCard from "@/components/kuiper-belt/kuiper-belt-card";
import OortCloudCard from "@/components/oort-cloud/oort-cloud-card";
import SagittariusACard from "@/components/extremities/sagittarius-a-card";
import MagnetarCard from "@/components/extremities/magnetar-card";
import QuasarCard from "@/components/extremities/quasar-card";
import PulsarCard from "@/components/extremities/pulsar-card";
import SupernovaCard from "@/components/extremities/supernova-card";
import NeutronStarCard from "@/components/extremities/neutron-star-card";
import GammaRayBurstCard from "@/components/extremities/gamma-ray-burst-card";
import Voyager1Card from "@/components/extremities/voyager-1-card";
import OTypeCard from "@/components/stellar-classifications/o-type-card";
import BTypeCard from "@/components/stellar-classifications/b-type-card";
import ATypeCard from "@/components/stellar-classifications/a-type-card";
import FTypeCard from "@/components/stellar-classifications/f-type-card";
import GTypeCard from "@/components/stellar-classifications/g-type-card";
import KTypeCard from "@/components/stellar-classifications/k-type-card";
import MTypeCard from "@/components/stellar-classifications/m-type-card";
import LDwarfCard from "@/components/stellar-classifications/l-dwarf-card";
import TDwarfCard from "@/components/stellar-classifications/t-dwarf-card";
import YDwarfCard from "@/components/stellar-classifications/y-dwarf-card";
import WolfRayetCard from "@/components/stellar-classifications/wolf-rayet-card";
import CarbonStarCard from "@/components/stellar-classifications/carbon-star-card";
import STypeCard from "@/components/stellar-classifications/s-type-card";
import TTauriCard from "@/components/stellar-classifications/t-tauri-card";
import HerbigAeBeCard from "@/components/stellar-classifications/herbig-ae-be-card";
import WhiteDwarfCard from "@/components/stellar-classifications/white-dwarf-card";
import NeutronStarClassCard from "@/components/stellar-classifications/neutron-star-card";
import BlackHoleCard from "@/components/stellar-classifications/black-hole-card";
import BlueDwarfCard from "@/components/stellar-classifications/blue-dwarf-card";
import BlackDwarfCard from "@/components/stellar-classifications/black-dwarf-card";
import AsteroidBeltCard from "@/components/asteroid-belt/asteroid-belt-card";
import NEOClosestCard from "@/components/nasa/neo-closest-card";
import NEOUpcomingCard from "@/components/nasa/neo-upcoming-card";
import NEOInfoCard from "@/components/nasa/neo-info-card";
import MeteorShowersCard from "@/components/nasa/meteor-showers-card";
import ObservableCometsCard from "@/components/nasa/observable-comets-card";
import ExoplanetSystemOfWeekCard from "@/components/exoplanets/exoplanet-system-of-week-card";
import ExoplanetNewsCard from "@/components/exoplanets/exoplanet-news-card";
import TOI700dCard from "@/components/exoplanets/toi-700d-card";
import ProximaBCard from "@/components/exoplanets/proxima-b-card";
import Trappist1eCard from "@/components/exoplanets/trappist-1e-card";
import Kepler452bCard from "@/components/exoplanets/kepler-452b-card";
import LHS1140bCard from "@/components/exoplanets/lhs-1140b-card";


const neoItems = [
  {
    title: "",
    description: "",
    header: <NEOClosestCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NEOUpcomingCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NEOInfoCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MeteorShowersCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ObservableCometsCard />,
    className: "md:col-span-1",
  },
];

const solItems = [
  {
    title: "",
    description: "",
    header: <SolarCoreCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <SolarCoronaCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <SolarFlaresCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <CMECard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <GeomagneticStormsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <IPSCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <SEPCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MPCCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <RBECard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <HSSCard />,
    className: "md:col-span-1",
  },
];

const earthItems = [
  {
    title: "",
    description: "",
    header: <ExtremeLocationWeather endpoint="/api/weather/north-pole" colorScheme="blue" />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ExtremeLocationWeather endpoint="/api/weather/south-pole" colorScheme="purple" />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ExtremeLocationWeather endpoint="/api/weather/death-valley" colorScheme="red" />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <AtacamaDesertWeather />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <DanakilDepressionWeather />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <VostokStationWeather />,
    className: "md:col-span-1",
  },
];

const lunaItems = [
  {
    title: "",
    description: "",
    header: <LunarEquatorCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <LunarCraterCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MareTranquillitatisfCard />,
    className: "md:col-span-1",
  },
];

const marsItems = [
  {
    title: "",
    description: "",
    header: <OlympusMonsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <PolarIceCapsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <VallesMarinerisCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <TharsisSandstormCard />,
    className: "md:col-span-1",
  },
];

const asteroidBeltItems = [
  {
    title: "",
    description: "",
    header: <AsteroidBeltCard />,
    className: "md:col-span-1",
  },
];

const mercuryItems = [
  {
    title: "",
    description: "",
    header: <MercuryTemperatureCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MercuryOrbitalCard />,
    className: "md:col-span-1",
  },
];

const venusItems = [
  {
    title: "",
    description: "",
    header: <VenusAtmosphereCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <VenusSurfaceCard />,
    className: "md:col-span-1",
  },
];

const jupiterItems = [
  {
    title: "",
    description: "",
    header: <GreatRedSpotCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <IoCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <EuropaCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <GanymedeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <CallistoCard />,
    className: "md:col-span-1",
  },
];

const saturnItems = [
  {
    title: "",
    description: "",
    header: <TitanCard />,
    className: "md:col-span-1",
  },
];

const uranusItems = [
  {
    title: "",
    description: "",
    header: <UranusTiltCard />,
    className: "md:col-span-1",
  },
];

const neptuneItems = [
  {
    title: "",
    description: "",
    header: <NeptuneWindsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NeptuneOceanCard />,
    className: "md:col-span-2",
  },
];

const plutoItems = [
  {
    title: "",
    description: "",
    header: <PlutoHeartCard />,
    className: "md:col-span-1",
  },
];

const kuiperBeltItems = [
  {
    title: "",
    description: "",
    header: <KuiperBeltCard />,
    className: "md:col-span-1",
  },
];

const oortCloudItems = [
  {
    title: "",
    description: "",
    header: <OortCloudCard />,
    className: "md:col-span-1",
  },
];

const extremitiesItems = [
  {
    title: "",
    description: "",
    header: <SagittariusACard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MagnetarCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <QuasarCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <PulsarCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <SupernovaCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NeutronStarCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <GammaRayBurstCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Voyager1Card />,
    className: "md:col-span-1",
  },
];

const stellarClassificationsItems = [
  {
    title: "",
    description: "",
    header: <OTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ATypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <FTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <GTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <KTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MTypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <LDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <TDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <YDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BlueDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BlackDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <WolfRayetCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <CarbonStarCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <STypeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <TTauriCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <HerbigAeBeCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <WhiteDwarfCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NeutronStarClassCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BlackHoleCard />,
    className: "md:col-span-1",
  },
];

const peaks8000mItems = [
  {
    title: "",
    description: "",
    header: <Everest8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <K28000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Kangchenjunga8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Lhotse8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Makalu8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ChoOyu8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Dhaulagiri8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Manaslu8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NangaParbat8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Annapurna8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Gasherbrum18000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BroadPeak8000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Gasherbrum28000mCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Shishapangma8000mCard />,
    className: "md:col-span-1",
  },
];

const peaks7SummitsItems = [
  {
    title: "",
    description: "",
    header: <Everest7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Aconcagua7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Denali7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Kilimanjaro7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Elbrus7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Vinson7SummitsCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Kosciuszko7SummitsCard />,
    className: "md:col-span-1",
  },
];

const oceansItems = [
  {
    title: "",
    description: "",
    header: <ChallengerDeepCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NazareWavesCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <MDRAtlanticCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <TitanicSiteCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <DrakePassageWeather />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <AgulhasPassageCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <BeringStraitCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <LakeSuperiorCard />,
    className: "md:col-span-1",
  },
];

const exoplanetItems = [
  {
    title: "",
    description: "",
    header: <ExoplanetSystemOfWeekCard />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "",
    description: "",
    header: <TOI700dCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <ExoplanetNewsCard />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "",
    description: "",
    header: <ProximaBCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Trappist1eCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <Kepler452bCard />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <LHS1140bCard />,
    className: "md:col-span-1",
  },
];

export default function Report() {
  const [expandedSection, setExpandedSection] = useState<string>("");
  const [showLocationModal, setShowLocationModal] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <DotBackground>
      <div className="h-full w-full p-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Weather Reports
          </h1>
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="text-lg md:text-xl text-neutral-300">
              Current conditions across the cosmos
            </p>
            <div 
              className="space-y-1.5 text-xs md:text-sm font-mono cursor-pointer hover:bg-white/5 rounded-lg p-3 transition-colors"
              onClick={() => setShowLocationModal(true)}
              title="Click to learn about our galactic position"
            >
              <p className="text-neutral-400">
                <span className="text-neutral-500">📍 </span>
                Earth • Sol System
              </p>
              <p className="text-neutral-400">
                Local Interstellar Cloud • Local Bubble
              </p>
              <p className="text-neutral-400">
                Orion–Cygnus Arm
              </p>
              <p className="text-neutral-400">
                Milky Way <span className="text-neutral-500">(R≈8.2 kpc, φ=0°, z≈+20 pc)</span> • Local Group • Virgo Supercluster
              </p>
            </div>
          </div>
        </div>

        {/* Location Explanation Modal */}
        {showLocationModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 animate-in fade-in duration-200"
            onClick={() => setShowLocationModal(false)}
          >
            <div 
              className="w-full md:w-auto md:min-w-[600px] md:max-w-xl bg-black/98 md:bg-neutral-900/95 border-t md:border border-white/20 rounded-t-3xl md:rounded-xl overflow-hidden flex flex-col shadow-2xl"
              style={{ maxHeight: '85vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag Handle (Mobile Only) */}
              <div className="md:hidden flex-shrink-0 pt-3 pb-2">
                <div className="w-10 h-1 bg-white/40 rounded-full mx-auto" />
              </div>

              {/* Header - Fixed */}
              <div className="flex-shrink-0 px-5 md:px-6 py-3 md:py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl font-bold text-white">Galactic Position</h2>
                  <button
                    onClick={() => setShowLocationModal(false)}
                    className="p-1.5 -mr-1.5 text-neutral-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-5 md:px-6 py-4 md:py-5 space-y-4 md:space-y-5 text-neutral-300 overscroll-contain">
                {/* Nested Structure */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">Nested Structure</h3>
                  <p className="text-xs md:text-sm text-neutral-500 mb-2">Smallest to largest:</p>
                  <div className="bg-white/5 rounded-lg p-3 space-y-1.5 text-xs md:text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Earth</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">Our home planet</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Sol System</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">8 planets, asteroid belt, Kuiper belt</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Local Cloud</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">Gas cloud we're passing through</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Local Bubble</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">~300 light-years across</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Orion–Cygnus</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">Minor spiral arm</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Milky Way</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">~100,000 ly across</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Local Group</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">50+ galaxies</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">Virgo SC</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-neutral-400">Part of Laniakea</span>
                    </div>
                  </div>
                </div>

                {/* Coordinates */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">3D Galactocentric Coordinates</h3>
                  <p className="text-xs text-neutral-500 mb-2">Cylindrical system (R, φ, z):</p>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-mono text-sm text-blue-400 mb-1">R ≈ 8.2 kpc</p>
                      <p className="text-xs leading-relaxed text-neutral-400">
                        <span className="font-medium text-white">Radial Distance</span> from galactic center<br />
                        ≈ 26,700 light-years<br />
                        ~60% from center to edge
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-mono text-sm text-blue-400 mb-1">φ = 0°</p>
                      <p className="text-xs leading-relaxed text-neutral-400">
                        <span className="font-medium text-white">Azimuthal Angle</span> in galactic plane<br />
                        Sun defines φ=0° by convention
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="font-mono text-sm text-blue-400 mb-1">z ≈ +20 pc</p>
                      <p className="text-xs leading-relaxed text-neutral-400">
                        <span className="font-medium text-white">Height Above Plane</span><br />
                        ≈ 65 light-years "north"<br />
                        Slightly above galactic midplane
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2 italic">
                    Also written as Cartesian: (X, Y, Z) ≈ (+8.2, 0, +0.02) kpc
                  </p>
                </div>

                {/* Data Organization */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">Data Coverage</h3>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 flex-shrink-0">•</span>
                      <span className="text-neutral-400"><span className="font-medium text-white">Sol</span> — Solar weather</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 flex-shrink-0">•</span>
                      <span className="text-neutral-400"><span className="font-medium text-white">Planets</span> — Solar system conditions</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 flex-shrink-0">•</span>
                      <span className="text-neutral-400"><span className="font-medium text-white">Exoplanets</span> — Other star systems</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 flex-shrink-0">•</span>
                      <span className="text-neutral-400"><span className="font-medium text-white">Extremities</span> — Cosmic phenomena</span>
                    </div>
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-xs leading-relaxed text-blue-200">
                    <span className="font-semibold">💡</span> Our position between the Perseus and Sagittarius arms gives us a clear view of the galaxy!
                  </p>
                </div>
              </div>

              {/* Footer - Fixed */}
              <div className="flex-shrink-0 p-4 border-t border-white/10 bg-black/30">
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 rounded-lg text-sm text-white font-medium transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sol Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("sol")}
        >
          <span>{expandedSection === "sol" ? "▼" : "▶"}</span>
          Sol
        </h2>
        {expandedSection === "sol" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {solItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Mercury Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("mercury")}
        >
          <span>{expandedSection === "mercury" ? "▼" : "▶"}</span>
          Mercury
        </h2>
        {expandedSection === "mercury" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {mercuryItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Venus Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("venus")}
        >
          <span>{expandedSection === "venus" ? "▼" : "▶"}</span>
          Venus
        </h2>
        {expandedSection === "venus" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {venusItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Earth Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("earth")}
        >
          <span>{expandedSection === "earth" ? "▼" : "▶"}</span>
          Earth
        </h2>
        {expandedSection === "earth" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {earthItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Peaks Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("peaks")}
        >
          <span>{expandedSection === "peaks" ? "▼" : "▶"}</span>
          Peaks
        </h2>
        {expandedSection === "peaks" && (
          <div className="space-y-8">
            {/* 8,000 Meter Peaks Subsection */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 pl-4 border-l-4 border-blue-500">
                8,000 Meter Peaks
              </h3>
              <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
                {peaks8000mItems.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
            </div>

            {/* 7 Summits Subsection */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 pl-4 border-l-4 border-purple-500">
                7 Summits
              </h3>
              <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
                {peaks7SummitsItems.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        )}
      </div>

      {/* Oceans Category */}
      {oceansItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("oceans")}
          >
            <span>{expandedSection === "oceans" ? "▼" : "▶"}</span>
            Oceans
          </h2>
          {expandedSection === "oceans" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {oceansItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Luna Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("luna")}
        >
          <span>{expandedSection === "luna" ? "▼" : "▶"}</span>
          Luna
        </h2>
        {expandedSection === "luna" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {lunaItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Near-Earth Objects Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("neo")}
        >
          <span>{expandedSection === "neo" ? "▼" : "▶"}</span>
          Near-Earth Objects
        </h2>
        {expandedSection === "neo" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {neoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Mars Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("mars")}
        >
          <span>{expandedSection === "mars" ? "▼" : "▶"}</span>
          Mars
        </h2>
        {expandedSection === "mars" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {marsItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Asteroid Belt Category */}
      {asteroidBeltItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("asteroidBelt")}
          >
            <span>{expandedSection === "asteroidBelt" ? "▼" : "▶"}</span>
            Asteroid Belt
          </h2>
          {expandedSection === "asteroidBelt" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {asteroidBeltItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Jupiter Category */}
      {jupiterItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("jupiter")}
          >
            <span>{expandedSection === "jupiter" ? "▼" : "▶"}</span>
            Jupiter
          </h2>
          {expandedSection === "jupiter" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {jupiterItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Saturn Category */}
      {saturnItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("saturn")}
          >
            <span>{expandedSection === "saturn" ? "▼" : "▶"}</span>
            Saturn
          </h2>
          {expandedSection === "saturn" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {saturnItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Uranus Category */}
      {uranusItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("uranus")}
          >
            <span>{expandedSection === "uranus" ? "▼" : "▶"}</span>
            Uranus
          </h2>
          {expandedSection === "uranus" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {uranusItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Neptune Category */}
      {neptuneItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("neptune")}
          >
            <span>{expandedSection === "neptune" ? "▼" : "▶"}</span>
            Neptune
          </h2>
          {expandedSection === "neptune" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {neptuneItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Pluto Category */}
      {plutoItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("pluto")}
          >
            <span>{expandedSection === "pluto" ? "▼" : "▶"}</span>
            Pluto
          </h2>
          {expandedSection === "pluto" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {plutoItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Kuiper Belt Category */}
      {kuiperBeltItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("kuiper")}
          >
            <span>{expandedSection === "kuiper" ? "▼" : "▶"}</span>
            Kuiper Belt
          </h2>
          {expandedSection === "kuiper" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {kuiperBeltItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Oort Cloud Category */}
      {oortCloudItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("oort")}
          >
            <span>{expandedSection === "oort" ? "▼" : "▶"}</span>
            Oort Cloud
          </h2>
          {expandedSection === "oort" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {oortCloudItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Extremities Category */}
      {extremitiesItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("extremities")}
          >
            <span>{expandedSection === "extremities" ? "▼" : "▶"}</span>
            Extremities
          </h2>
          {expandedSection === "extremities" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {extremitiesItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}

      {/* Exoplanets Category */}
      <div>
        <h2
          className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("exoplanets")}
        >
          <span>{expandedSection === "exoplanets" ? "▼" : "▶"}</span>
          Exoplanets
        </h2>
        {expandedSection === "exoplanets" && (
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
            {exoplanetItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        )}
      </div>

      {/* Stellar Classifications Category */}
      {stellarClassificationsItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
            onClick={() => toggleSection("stellarClassifications")}
          >
            <span>{expandedSection === "stellarClassifications" ? "▼" : "▶"}</span>
            Stellar Classifications
          </h2>
          {expandedSection === "stellarClassifications" && (
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
              {stellarClassificationsItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          )}
        </div>
      )}
      </div>
    </DotBackground>
  );
}
