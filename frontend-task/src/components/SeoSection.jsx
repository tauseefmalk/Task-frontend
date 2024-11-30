import React from "react";


export default function SeoSection() {
    const hashtagData = [
        ["#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods"], 
        ["#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods"], 
        ["#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods", "#SupplyWoods"],
      ];
  return (
    <>
      <div className="flex justify-center mt-16">
        <h1 className="text-black/70 font-bold text-5xl">
          Search By Trusted Matrimony Site
        </h1>
      </div>
      <div className=" m-16">
      {hashtagData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {row.map((hashtag, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black/50  px-5 py-2 rounded-full shadow-md text-sm"
            >
              {hashtag}
            </div>
          ))}
        </div>
      ))}
    </div>

    </>
  );
}
