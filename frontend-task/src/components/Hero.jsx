import React from "react";
import couple from "../assets/couple.png";
import avatar from "../assets/Ellipse 3.png";
import avatar1 from "../assets/Ellipse 4.png";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className=" w-full h-[55rem] rounded-b-[55rem] bg-custom-linear-2 ">
        <div className="bg-custom-linear-3 w-full h-[45rem]">
          <div className="flex h-full ">
            <div className=" w-[90%]   gap-4 mt-24 ml-32">
              <h1 className="text-white text-7xl font-extrabold pb-6">
                Some Where Some <br />
                One Is Dreaming <br />
                For You
              </h1>
              <p className="text-white ">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.{" "}
                <br /> Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>
            <div className=" w-[60%] flex justify-end">
              <img src={couple} alt="" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
          <div className="relative w-full max-w-6xl mx-auto mt-10">
            <div className="absolute -top-9 left-0 bg-white  rounded-t-xl px-4 py-2 border border-gray-300">
              <h2 className="text-sm font-semibold text-gray-700">
                FILTER YOUR SELECTION
              </h2>
            </div>
            <div className=" bg-white/90 h-24 shadow-lg rounded-2xl rounded-tl-none p-6 w-full flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col md:flex-row gap-4 flex-grow w-full">
                <div className="  h-14 border-r-2 w-52">
                  <h1 className="font-medium text-lg">Looking for</h1>
                  <select className="w-full  p-3 bg-transparent text-black/50">
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="  h-14 border-r-2 w-52 ">
                  <h1 className="font-medium text-lg">Religion</h1>
                  <select className="w-full  p-3 bg-transparent text-black/50">
                    <option value="female">Muslim</option>
                  </select>
                </div>
                <div className="  h-14 border-r-2 w-52">
                  <h1 className="font-medium text-lg">Select Age</h1>
                  <select className="w-full  p-3 bg-transparent text-black/50">
                    <option value="female">24</option>
                  </select>
                </div>
                <div className="  h-14 border-r-2 w-52 ">
                  <h1 className="font-medium text-lg">Mother Toungue</h1>
                  <select className="w-full p-3 bg-transparent text-black/50 ">
                    <option value="female">Urdu</option>
                  </select>
                </div>
              </div>
              <button className="bg-custom-linear text-white p-3 rounded-2xl hover:bg-red-600 flex items-center">
                <Search />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-10">
          <div className="bg-white shadow-md rounded-full p-6 flex  items-center gap-2 w-72">
            <div className="flex items-center flex-shrink-0 ">
              <img
                src={avatar}
                alt="avatars"
                className="  w-10 h-10 rounded-full border-l-2 border-white"
              />
              <img
                src={avatar}
                alt="avatars"
                className="w-10 h-10 rounded-full border-l-2 border-white"
              />
              <img
                src={avatar}
                alt="avatars"
                className="w-10 h-10 rounded-full border-l-2 border-white"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">
                10k+ Happy Weddings
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-full p-6 flex  items-center gap-2 w-72">
            <div className="flex items-center flex-shrink-0 ">
              <img
                src={avatar1}
                alt="avatars"
                className="  w-12 h-12 rounded-full border-l-2 border-white"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">
                200+ New Proposals Each Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
