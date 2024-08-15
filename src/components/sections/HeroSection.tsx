import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex lg:justify-between md:flex-row flex-col lg:mt-24">
      <div className="pt-24 md:pt-12">
        <p className="text-[1.128rem] text-center md:text-start font-[700] text-primary uppercase mb-4 ">
          Choudhary Facilities Travel Solutions Tailored for You
        </p>
        <div className="flex flex-col md:mt-16">
          <div className="font-[700] text-center md:text-start text-[1.8rem] md:text-[4.73756rem] md:leading-large  text-lightBlue">
            Travel, Enjoy And Live
          </div>
          <div className="font-[700] text-center md:text-start text-[1.8rem] md:text-[4.73756rem] md:leading-large  text-lightBlue">
            A New And Full Life
          </div>
        </div>

        <p className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem] md:mt-16 md:text-start text-center">
          From visa services and international air tickets to hotel bookings and
          UAE city tours{" "}
          <span className="font-bold text-primary">
            &quot;Choudhary Facilities Management Service&quot;
          </span>{" "}
          is your trusted partner for a stress-free travel experience.
        </p>

        {/* <div className="flex gap-6 items-center ">
          <div>
            <MainButton
              text="Find out more"
              classes="bg-secondary text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]"
            />
          </div>
          <div className="flex items-center mt-6 hover:cursor-pointer">
            <img
              src="/images/play-shadow.png"
              alt="rounded play icon with shadow"
            />
            <p className="text-lightGrayAlt -mt-6">Play Demo</p>
          </div>
        </div> */}
      </div>
      <div className="md:mt-8">
        <img
          src="/images/lady-with-aircraft.png"
          alt="girl with phone with aircrafts on the background"
        />
      </div>
    </section>
  );
}

export default HeroSection;
