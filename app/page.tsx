import Hero from "@/pages/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-10 mix-blend-difference bg-white rounded-full h-7 w-7 cursor-pointer">
    </div>
    <Hero/>
    </>
  );
}
