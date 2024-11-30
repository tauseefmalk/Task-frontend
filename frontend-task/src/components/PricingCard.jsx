import React from "react";
import Button from "./Button";

const PricingCard = () => {
  const plans = [
    {
      type: "Free Member",
      subscriptionType: "Free",
      price: "For All",
      buttonText: "Get Started",
      features: [
        { text: "Send Express Interests", included: true },
        { text: "Send Photo Requests", included: true },
        { text: "Search Suitable Profiles", included: true },
        { text: "View Contact Detail of the Profile", included: false },
        { text: "Bold Listing of your profile", included: false },
        { text: "Send Unlimited Personalized Messages", included: false },
        { text: "Astro Matching Profiles", included: false },
        { text: "Initiate the Chat from your end", included: false },
        { text: "Dedicated Relationship Manager", included: false },
      ],
    },
    {
      type: "Paid Member",
      subscriptionType: "Paid Member",
      price: "$487",
      buttonText: "Get Started",
      features: [
        { text: "Send Express Interests", included: true },
        { text: "Send Photo Requests", included: true },
        { text: "Search Suitable Profiles", included: true },
        { text: "View Contact Detail of the Profile", included: true },
        { text: "Bold Listing of your profile", included: true },
        { text: "Send Unlimited Personalized Messages", included: true },
        { text: "Astro Matching Profiles", included: true },
        { text: "Initiate the Chat from your end", included: true },
        { text: "Dedicated Relationship Manager", included: true },
      ],
    },
  ];

  return (
    <>
    <div className="py-20"> 

    <div className="flex justify-center text-center flex-col gap-10">
    <div >
      <h1 className="font-bold text-5xl">Benefits of Premium Membership</h1>
    </div>
    <div>
      <p className="text-black/70 px-60 text-lg">Upgrade to Paid Membership and Speed-up your Partner Search by directly connecting (via chat/call) with suitable profile. Avail NOW to Enjoy many Premium Benefits.</p>
    </div>
    </div>
    <div className=" flex flex-col md:flex-row gap-4 justify-center items-center py-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="relative text-black rounded-xl border border-gray-200 max-w-sm w-full min-h-[32rem]"
        >
          <div className="bg-[#FFBA52] rounded-t-xl absolute w-full h-64 -z-10"></div>
          <div className="px-4 py-6">
            <h3 className="text-2xl font-bold">{plan.type}</h3>
            <p className="font-light text-md mt-4 leading-tight tracking-wide">
              Plans that are carefully crafted to suit your business.
            </p>
          </div>
          <div className="px-6 mb-4">
            <div className="border border-gray-300 rounded-xl">
              <div className="relative flex flex-col items-center py-6 bg-[#F0EAFB] rounded-t-xl">
                <p className="font-bold text-lg">{plan.subscriptionType}</p>
                <h1 className="font-bold text-3xl">
                  { plan.price === "number" ? `$${plan.price}` : plan.price}
                </h1>
                <Button label={plan.buttonText} className="bg-custom-linear-3 text-white font-semibold px-8 py-3 rounded-full mt-4 hover:bg-red-600" />
                 
              </div>
              <div className="px-4 py-4">
                <p className="text-sm text-gray-600">
                  Access these features when you get this pricing package:
                </p>
                <ul className="space-y-2 mt-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-4 h-4 flex items-center justify-center rounded-full ${
                          feature.included
                            ? "bg-red-600 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`${
                          feature.included
                            ? "text-black"
                            : "text-gray-500 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

    </>
  );
};

export default PricingCard;
