"use client";

import { useState } from "react";
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
  const [expandedSection, setExpandedSection] = useState<string>("apod");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <div className="h-full w-full p-8 space-y-4">
      {/* APOD Category */}
      <div>
        <h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          onClick={() => toggleSection("apod")}
        >
          <span>{expandedSection === "apod" ? "▼" : "▶"}</span>
          Astronomy Picture of the Day
        </h2>
        {expandedSection === "apod" && (
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
        )}
      </div>

      {/* Sol Category */}
      <div>
        <h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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

      {/* Oceans Category */}
      {oceansItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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

      {/* Mars Category */}
      <div>
        <h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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

      {/* Jupiter Category */}
      {jupiterItems.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
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
    </div>
  );
}