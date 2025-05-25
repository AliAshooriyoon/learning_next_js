"use client";
import Image from "next/image";
import nextIcon from "@/public/icons8-eingekreistes-rangabzeichen-rechts-100.png";
import { useState } from "react";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
import pic4 from "@/public/pic4.jpg";
const SliderShow = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pictures: [] = [
    { pic: pic1, alt: "test" },
    { pic: pic2, alt: "test" },
    { pic: pic3, alt: "test" },
    { pic: pic4, alt: "test" },
  ];
  const changeSliderPic = (inp) => {
    if (inp.target.id === "nextEvent") {
      setCurrentPage((prev) =>
        currentPage < pictures.length - 1 ? prev + 1 : 0,
      );
    }

    if (inp.target.id === "privousEvent") {
      setCurrentPage((prev) =>
        currentPage <= pictures.length - 1 && currentPage > 0
          ? prev - 1
          : pictures.length - 1,
      );
    }
  };
  return (
    <>
      <div className="slider w-[40rem] h-[27rem] relative mx-auto mt-8 mb-5 bg-stone-500 rounded-3xl">
        <Image
          className={"w-full h-full rounded-3xl"}
          src={pictures[currentPage].pic}
          alt="randPic"
          width={500}
          height={600}
        />

        <div onClick={changeSliderPic}>
          <Image
            id={"nextEvent"}
            className="absolute cursor-pointer right-[5%] bottom-[40%] my-auto"
            src={nextIcon}
            alt="nexticon"
            width={70}
            height={70}
          />
        </div>

        <div onClick={changeSliderPic} id={"privousEvent"}>
          <Image
            id={"privousEvent"}
            className="absolute cursor-pointer left-[5%] rotate-180 bottom-[40%] my-auto"
            src={nextIcon}
            alt="nexticon"
            width={70}
            height={70}
          />
        </div>
      </div>
    </>
  );
};
export default SliderShow;
