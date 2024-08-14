import React from "react";
import TripStepCard from "../cards/TripStepCard";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose Destination",
      description: " ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Contact Us",
      description: "",
    },
    {
      id: 2,
      iconUrl: "/images/payment-icon.png",
      title: "Make Payment",
      description: "",
    },
    {
      id: 3,
      iconUrl: "/images/airport-icon.png",
      title: "Reach Airport on Selected Date",
      description: "",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-[-3rem] pb-52">
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left">
          Easy and Fast
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          Book your next trip in 4 easy steps
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <img
          src="/images/choose.jpg"
          alt="card with a girl on a wall"
          className="h-[254px] py-4"
        />
      </div>
    </section>
  );
}

export default BookNextTripSection;
