import React from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#BDBDBD] w-full h-[40rem]   gap-5 ">
        <div className="flex flex-row justify-center items-center  gap-10 mx-40 py-20">
          <div className="k w-[30%] h-96">
            <img src={logo} alt="" />

            <div>
              <p className="text-black/70 text-lg  font-medium pt-8">
                Our experts can provide valuable insights and assist you in
                identifying properties.
              </p>
              <h1 className="text-5xl font-bold py-8 pr-11">
                DOWNLOAD OUR FREE APP
              </h1>
            </div>
          </div>
          <div className=" w-[20%] h-96 p-8">
            <ul className="gap-4">
              <li>Home</li>
              <li>Membership</li>
              <li>FAQs / Help</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Testimonials</li>
              <li>Complaint</li>
            </ul>
          </div>
          <div className=" w-[20%] h-96 p-8 ">
            <ul className="gap-4">
              <li>TV Commercials</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Blog</li>
              <li>Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
              <li>Create Horoscope</li>
            </ul>
          </div>
        </div>

        <div className=" flex justify-between mx-32 p-6 border-black border-t-2">
            <div>
            <h1 className="font-semibold text-lg">2023. All rights reserved</h1>
            </div>
            <div className="flex gap-8">
                <p>Legal Notice</p>
                <p>Data Protection</p>
                <p>Cookies Policy</p>
            </div>
            <div>
                <p>Terms & Conditions</p>
            </div>
        </div>
      </div>
    </>
  );
}
