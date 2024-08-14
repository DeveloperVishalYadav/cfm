import React from "react";
import CatergoryCard from "../cards/CatergoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/images/s1.png",
      title: "Visa Services",
      description: "Hassle-free visa processing and assistance.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/s2.png",
      title: "Best Flights",
      description:
        "Booking of domestic and international flights at competitive rates.",
      highlighted: true,
    },
    {
      id: 3,
      iconUrl: "/images/s3.png",
      title: "Hotel Reservations",
      description:
        "International hotel booking services to ensure a comfortable stay.",
      highlighted: false,
    },
  ];
  const features2 = [
    {
      id: 0,
      iconUrl: "/images/s4.png",
      title: "City Tours",
      description: "Personalized tours to explore the best of UAE’s cities.",
      highlighted: false,
    },
    {
      id: 2,
      iconUrl: "/images/s5.png",
      title: "Hajj & Umrah Services",
      description:
        "Complete pilgrimage packages with all necessary arrangements. ",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/s6.png",
      title: "Travel Insurance",
      description: "Coverage plans to ensure a safe and worry-free journey.",
      highlighted: false,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Our Services
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        We Offer Best Services
      </p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features2.map((feature2) => (
          <CatergoryCard
            key={feature2.id}
            iconUrl={feature2.iconUrl}
            title={feature2.title}
            description={feature2.description}
            highlighted={feature2.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
