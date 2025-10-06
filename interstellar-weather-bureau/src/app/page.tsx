import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DrakePassageWeather from "@/components/weather/drake-passage-weather";
import EverestWeather from "@/components/weather/everest-weather";
import ExtremeLocationWeather from "@/components/weather/extreme-location-weather";
import AtacamaDesertWeather from "@/components/weather/atacama-desert-weather";
import DanakilDepressionWeather from "@/components/weather/danakil-depression-weather";
import VostokStationWeather from "@/components/weather/vostok-station-weather";
import SolarFlaresCard from "@/components/nasa/solar-flares-card";
import APODCard from "@/components/nasa/apod-card";
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
import OlympusMonsCard from "@/components/mars/olympus-mons-card";
import PolarIceCapsCard from "@/components/mars/polar-ice-caps-card";
import VallesMarinerisCard from "@/components/mars/valles-marineris-card";
import TharsisSandstormCard from "@/components/mars/tharsis-sandstorm-card";
import VenusAtmosphereCard from "@/components/venus/venus-atmosphere-card";
import VenusSurfaceCard from "@/components/venus/venus-surface-card";
import MercuryTemperatureCard from "@/components/mercury/mercury-temperature-card";
import MercuryOrbitalCard from "@/components/mercury/mercury-orbital-card";

const apodItems = [
  {
    title: "",
    description: "",
    header: <APODCard />,
    className: "md:col-span-2",
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
    header: <EverestWeather />,
    className: "md:col-span-1",
  },
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
    header: <DrakePassageWeather />,
    className: "md:col-span-1",
  },
  {
    title: "",
    description: "",
    header: <NeptuneOceanCard />,
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full p-8 space-y-12">
      {/* APOD Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Astronomy Picture of the Day</h2>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
          {apodItems.map((item, i) => (
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

      {/* Sol Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sol</h2>
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
      </div>

      {/* Mercury Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mercury</h2>
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
      </div>

      {/* Venus Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Venus</h2>
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
      </div>

      {/* Earth Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Earth</h2>
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
      </div>

      {/* Luna Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Luna</h2>
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
      </div>

      {/* Mars Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mars</h2>
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
      </div>

      {/* Oceans Category */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Oceans</h2>
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
      </div>
    </div>
  );
}