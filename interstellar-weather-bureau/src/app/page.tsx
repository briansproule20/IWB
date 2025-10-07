"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import DotBackground from "@/components/ui/dot-background";
import APODCard from "@/components/nasa/apod-card";

const apodItems = [
  {
    title: "",
    description: "",
    header: <APODCard />,
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <DotBackground>
      <div className="h-full w-full p-8 space-y-4">
        {/* APOD Category */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Astronomy Picture of the Day
          </h2>
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
      </div>
    </DotBackground>
  );
}