import SliderShow from "@/component/sliderShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="indent-4 mt-4 text-2xl text-center">
        <h2 className="">Home Page</h2>
        <Link href={"/shop"}>See Shop</Link>
      </div>
      <SliderShow />
    </>
  );
}
