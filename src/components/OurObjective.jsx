import React from "react";
import TitleText from "./TitleText";
import { homeCards } from "@/constants/appdata";

const OurObjective = () => {
  return (
    <div className="bg-teal-50 pt-12">
      <TitleText
        title={<span className="text-gray-900 font-bold">Our Objective</span>}
      />
      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {homeCards.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg-amber-50">
              <div className="w-full relative">
                <img src={car.img} alt="" className="w-full object-cover " />
              </div>
              <div className="font-bold text-xl mb-2 text-cyan-400 p-2">
                {car.title}
              </div>
              <p className="text-gray-500 text--base p-2">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
