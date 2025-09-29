import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DrakePassageWeather from "@/components/weather/drake-passage-weather";
import EverestWeather from "@/components/weather/everest-weather";
import ExtremeLocationWeather from "@/components/weather/extreme-location-weather";

const items = [
  {
    title: "",
    description: "",
    header: <DrakePassageWeather />,
    className: "md:col-span-1",
  },
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
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-800"></div>,
    className: "md:col-span-1",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full p-8">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
        {items.map((item, i) => (
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
  );
}