import React from "react";
import Button from "./Button";

export default function SubscriptionPlan() {
  return (
    <div className="bg-[#FDF6F6] flex h-screen w-full shadow-2xl">
      <div className="w-96 h-[50rem] bg-white relative ">
        <div className="bg-[#FFBA52] w-full h-96 ">
          <div className="flex flex-col justify-center px-8 pt-16">
            <h1 className="font-bold text-3xl">Free Members</h1>
            <p className="text-black/70 font-medium">Plans that are carefully crafted to suit your business.</p>
          </div>
          <div className="absolute left-9 mt-6 bg-black w[17rem] h-[35rem] flex">
            <div className="flex flex-col  ">

            <div className="bg-[#F0EAFB] w-full h-52">
              <h2 className="font-semibold text-lg">Free</h2>
              <h1 className="font-bold text-3xl">For All</h1>
              <Button label={"Get started"} className={"bg-custom-linear-3"}/>
            </div>
            <div className="bg-white h-full">
hsadhkjas
            </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
