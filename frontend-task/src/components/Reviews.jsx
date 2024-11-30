import React from "react";
import vector from "../assets/Vector.png";
import img from "../assets/Image.png";
import img1 from "../assets/Image1.png";
import quote from "../assets/quote.png";
import Button from "./Button";
// import { ChevronLeft } from "lucide-react";
import right from "../assets/right-chevron.png"

export default function Reviews() {
  return (
    <div className="my-20  ">
      <div className="text-center px-5">
        <h1 className="font-bold text-5xl text-black">
          Matrimonials India Success Stories
        </h1>
        <p className="text-black/70 my-10 mx-96">
          o sodales malesuada. Pe risus diam Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum dui nisi, porttior sit amet
          diam ut, congue fermentum dui. Aenean gravida p
        </p>
      </div>
      <div className="flex justify-center gap-5">

      <div className="bg-gray-100 rounded-3xl w-[40rem] h-[20rem] pt-6 shadow-red-200 shadow-lg">
        <div className="flex justify-around content-center">
          <img src={vector} alt="" className="absolute " />
          <div className="relative  flex flex-col justify-center w-80 p-6">
            <h1 className="text-2xl font-semibold mb-3">Freda Collier</h1>
            <div className="border-t-2 border-black w-20 py-2 ">
                <img src={quote} alt="" />
            </div>
            <p>
              Ipsum vel nobis doloremque est aut non accusantium vero molestias.
              Et est minima dolorem eum modi atque sint nobis. Enim quod facere.
              Reiciendis necessitatibus ipsam non aspernatur voluptate id.
            </p>
            <Button label={"Read more"} className={'bg-transparent flex justify-end p-3'} endIcon={right}/>
          </div>
          <div className="bg-black h-64 w-48 ">
            <img src={img} alt="" className="h-full" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-3xl w-[40rem] h-[20rem] pt-6 shadow-red-200 shadow-lg">
        <div className="flex justify-around content-center">
          <img src={vector} alt="" className="absolute " />
          <div className="relative  flex flex-col justify-center w-80 p-6">
            <h1 className="text-2xl font-semibold mb-3">Freda Collier</h1>
            <div className="border-t-2 border-black w-20 py-2 ">
                <img src={quote} alt="" />
            </div>
            <p>
              Ipsum vel nobis doloremque est aut non accusantium vero molestias.
              Et est minima dolorem eum modi atque sint nobis. Enim quod facere.
              Reiciendis necessitatibus ipsam non aspernatur voluptate id.
            </p>
            <Button label={"Read more"} className={'bg-transparent flex justify-end p-3'} endIcon={right}/>
          </div>
          <div className="bg-black h-64 w-48 ">
            <img src={img1} alt="" className="h-full" />
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center my-12">
      <Button label={"Load More"} className={'text-red-500 font-bold text-2xl p-3'} />

      </div>
    </div>
  );
}
