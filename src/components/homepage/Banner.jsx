import Image from "next/image";
import React from "react";
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6">
        
        {/* Left: Text Content */}
        <div className="max-w-xl space-y-6">
          <p className="uppercase text-[#ccff00] font-bold tracking-wide">
            Workout Library
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            TRAIN WITH INTENT. <br /> LOG EVERY SET.
          </h1>
          <p className="text-gray-300">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded-md hover:bg-lime-400 transition">
            Browse Workouts
          </button>
        </div>

        
        <div className="mt-10 lg:mt-0 lg:ml-12">
          
          <Image
            src={banner}
            alt="Workout Illustration"
            height={334}
            width={334}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
