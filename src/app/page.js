import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import Subfooter from "@/components/Subfooter";
import React from "react";
import OurObjective from "@/components/OurObjective";

import { Car } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative bg-white">
        <Explore />
        <Subfooter />
        <OurObjective />
      </div>
    </div>
  );
}
