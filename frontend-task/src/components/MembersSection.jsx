import React from "react";
import card1 from "../assets/proofile card 6.png"
import card2 from "../assets/proofile card 7.png"
import card3 from "../assets/proofile card 8.png"
import card4 from "../assets/proofile card 9.png"
import card5 from "../assets/proofile card 10.png"
import card6 from "../assets/proofile card 11.png"
import card7 from "../assets/proofile card 12.png"
import card8 from "../assets/proofile card 13.png"

export default function MembersSection() {
    const cards=[
        card1,card2,card3,card4,card5,card6,card7,card8
        
    ]
  return (
    <div className="bg-gray-100 w-full h-auto  py-20 px-32 ">
      <div className="flex justify-center flex-col items-center text-center">
        <h1 className="font-bold text-5xl text-black/70 mb-10">
          Over Lakhs of Premium Members Looking for Partner
        </h1>
        <p className="text-black/70 px-60 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className=" grid grid-cols-4 gap-8 px-40 py-16">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center ">
            <img
              src={card}
              alt={`Profile card ${index + 1}`}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
