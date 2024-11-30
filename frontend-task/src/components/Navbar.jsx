import React from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg";
import heart from "../assets/heart_plus.png";
import down from "../assets/down.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <div className="bg-black w-full h-10 items-center">
        <div className="flex justify-around h-full items-center">
          <div className="flex ">
            <MapPin color="white" />
            <p className="text-white">India</p>
          </div>
          <div className="flex gap-4">
            <div className="flex">
              <Phone color="white" />
              <p className="text-white">+91 1234567890</p>
            </div>
            <div className="flex">
              <Mail color="white" />
              <p className="text-white">support@abc34.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-20  ">
        <div className="flex justify-around h-full  items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex gap-4">
            <Button
              label={"Browse Profile"}
              className={"text-black"}
              endIcon={down}
            />
            <Button
              label={"Register Free"}
              className={"rounded-full px-5 py-2 bg-custom-linear text-white"}
            />
            <Button
              label={"Members login"}
              className={
                "rounded-full border border-orange-600 text-orange-700 "
              }
              startIcon={heart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
