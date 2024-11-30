import React from "react";
import video from "../assets/Screenshot 2023-09-18 132822 1.png";
import bg from "../assets/bg.png";
import bgcover from "../assets/bgcover.png";
import Button from "./Button";


export default function Video() {
  return (
    <>
      <div className="p-32 flex ">
        <div className="flex  justify-center  w-[50%] h-96">
          <img src={video} alt="video" />
        </div>
        <div className="flex flex-col text-black/70   w-[50%] h-96 pl-28 mr-10 gap-8">
          <h1 className="font-bold text-5xl text-black/70 mt-14 ">
            TV Commercials
          </h1>

          <p className="">
            o sodales malesuada. Pe risus diam Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum dui nisi, porttior sit amet
            diam ut, congue fermentum dui. Aenean gravida p
          </p>
          <p>
            o sodales malesuada. Pe risus diam Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum dui nisi, porttior sit amet
            diam ut, congue fermentum dui. Aenean gravida p
          </p>
        </div>
      </div>
      <div className="text-center px-5 ">
        <h1 className="font-bold text-5xl text-black/70 ">
          Why MatrimonialsIndia.com?
        </h1>
      </div>
      <div className="flex my-20 justify-center gap-28">
        <div className=" h-60 w-64 ">
          <img src={bg} alt="" className="absolute"/>
          <img src={bgcover} alt="" className="relative top-5 left-5 z-10 " />
          <h2 className="py-8 text-lg font-medium">26+ Years of Trust</h2>
          <p>
            Showered by the trust and love of our clients for the last 24 Years.
          </p>
        </div>
        <div className=" h-60 w-64 ">
        <img src={bg} alt="" className="absolute"/>
        <img src={bgcover} alt="" className="relative top-5 left-5 z-10 " />
          <h2 className="py-8 text-lg font-medium">26+ Years of Trust</h2>
          <p>
            Showered by the trust and love of our clients for the last 24 Years.
          </p>
        </div>
        <div className=" h-60 w-64 ">
        <img src={bg} alt="" className="absolute"/>
        <img src={bgcover} alt="" className="relative top-5 left-5 z-10 " />
          <h2 className="py-8 text-lg font-medium">26+ Years of Trust</h2>
          <p>
            Showered by the trust and love of our clients for the last 24 Years.
          </p>
        </div>
        <div className=" h-60 w-64 ">
        <img src={bg} alt="" className="absolute"/>
        <img src={bgcover} alt="" className="relative top-5 left-5 z-10 " />
          <h2 className="py-8 text-lg font-medium">26+ Years of Trust</h2>
          <p>
            Showered by the trust and love of our clients for the last 24 Years.
          </p>
        </div>
      </div>
      <div className="bg-custom-linear-3 w-full h-20 text-white flex justify-center gap-8 items-center">
        <h2 className=" font-semibold text-3xl">So what are you waiting for? Let us find Your Dream Partner</h2>
        <Button label={'Register Free'} className={"bg-[#ff6e52] rounded-full h-12 font-semibold"} />
      </div>
    </>
  );
}
