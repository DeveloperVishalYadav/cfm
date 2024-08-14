import React from "react";
import DestinationCard from "../cards/DestinationCard";

function TopSellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: "/images/a.avif",
      title: "UAE Tourist Visa",
      amount: "AED 349",
      duration: "15 Days",
      duration2: "Insurance & Vat Tax Included",
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: "/images/b.avif",
      title: "UAE Tourist Visa",
      amount: "AED 349",
      duration: "30 Days (Single Entry)",
      duration2: "Insurance & Vat Tax Included",
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: "/images/c.avif",
      title: "UAE Tourist Visa",
      amount: "AED 649",
      duration: "60 Days (Single Entry)",
      duration2: "Insurance & Vat Tax Included",
      highlighted: false,
    },
    {
      id: 3,
      imageUrl: "/images/d.avif",
      title: "Inside Country Visa Change",
      amount: "AED 1550",
      duration: "60 Days (Single Entry)",
      duration2: "Vat Tax Included",
      highlighted: false,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Top Selling
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Top Visa Packages
      </p>
      <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            duration2={destination.duration2}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;
