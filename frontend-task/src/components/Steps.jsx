import React from "react";
import { User, Sliders, Search, Phone, Divide } from "lucide-react";
import step from "../assets/Group 4526.png";

export default function Steps() {
    const steps = [
        {
            id: 1,
            icon: step,
            title: "Create Your Profile",
            description: "Just fill basic details & access the huge database of Brides / Grooms.",
        },
        {
            id: 2,
            icon: step,
            title: "Set Partner Preference",
            description: "Set your Partner Preference & let’s match your requirement with others.",
        },
        {
            id: 3,
            icon: step,
            title: "Receive Matching Profiles",
            description: "Receive matching profiles daily as per your set partner preference.",
        },
        {
            id: 4,
            icon: step,
            title: "Send/Receive Interest ",
            description: "Send/receive interest to suitable profiles and connect.",
        },
    ];

    return (
        <>
            <div>

                <h2 className="text-3xl font-bold text-center text-black mb-12">
                    Four Simple Steps to find your Life Partner
                </h2>
            </div>
            <div className="bg-custom-linear-3 w-full h-48 flex gap-5 px-20 justify-center">
                {steps.map((step) => (
                    <div key={step.id} className=" flex flex-col justify-center text-center gap-4 ">
                        <div className="flex justify-center">
                            <img src={step.icon} alt="" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">{step.title}</h1>
                        <p className="text-white text-lg">{step.description}</p>
                    </div>

                ))}

            </div>
        </>
    );
}
