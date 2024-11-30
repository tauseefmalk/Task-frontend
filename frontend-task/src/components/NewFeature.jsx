import React from "react";
import mobile from "../assets/Frame 1597884354.png";

export default function NewFeature() {
  return (
    <>
      <div className="bg-[#FDF6F6] h-[70rem]  pt-16 text-center">
        <h1 className="text-7xl font-bold text-black  mx-96">
          Express Yourself Better with  New Video Feature
        </h1>
        <p className="text-black/70 mx-96 mt-10">
          o sodales malesuada. Pe risus diam Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum dui nisi, porttior sit amet
          diam ut, congue fermentum dui. Aenean gravida p{" "}
        </p>
        <div className="w-full h-screen flex pt-10 ">
          <div className="w-[60%] pl-20 h-full">
            <img src={mobile} alt="" />
          </div>
          <div className=" w-[40%] ml-10 gap-6 flex flex-col justify-center ">
            <div className="relative h-14 border-2 border-red-500 border-dotted w-80 flex  justify-center content-center items-center  z-10 ">
              <div className="bg-custom-linear-3 w-16 h-full text-center flex justify-center content-center items-center ">
                <h1 className="text-white font-bold text-lg w-fullk ">01.</h1>
              </div>
              <p className="pl-4 w-full">Be Yourself, Smile, Be confident</p>
            </div>
            <div className="pl-14">
              <div className="h-14 border-2 border-red-500 border-dotted w-80 flex  justify-center content-center items-center   ">
                <div className="bg-custom-linear-3 w-16 h-full text-center flex justify-center content-center items-center ">
                  <h1 className="text-white font-bold text-lg w-fullk ">02.</h1>
                </div>
                <p className="pl-4 w-full">Prepare what you
                want to say</p>
              </div>
            </div>

            <div className="h-14 border-2 border-red-500 border-dotted w-80 flex  justify-center content-center items-center  ">
              <div className="bg-custom-linear-3 w-16 h-full text-center flex justify-center content-center items-center ">
                <h1 className="text-white font-bold text-lg w-fullk ">03.</h1>
              </div>
              <p className="pl-4 w-full">Lamet, consectetur adipiscing elit</p>
            </div>
            <div className="pl-14">
              <div className="h-14 border-2 border-red-500 border-dotted w-80 flex  justify-center content-center items-center  ">
                <div className="bg-custom-linear-3 w-16 h-full text-center flex justify-center content-center items-center ">
                  <h1 className="text-white font-bold text-lg w-fullk ">04.</h1>
                </div>
                <p className="pl-4 w-full">Lamet, consectetur adipiscing elit?</p>
              </div>
            </div>
          <div className="absolute  border-l-2 border-red-500 border-dotted h-48 ml-20 z-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
