import MainButton from "@/components/common/MainButton";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <h2 className="text-lightGray text-[1.125rem] font-[600]">
        Our Services
      </h2>
      <p className="volkhov text-[3.125rem] text-title font-[700] ">
        We Offer Best Services
      </p>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Visa Services
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Navigating the complexities of visa applications can be
              challenging, but our expert team is here to simplify the process
              for you. We provide comprehensive visa services for various
              countries, ensuring that your application is accurate, complete,
              and submitted on time. Whether you’re traveling for leisure,
              business, or education, our hassle-free visa assistance guarantees
              a smooth experience from start to finish. We handle everything
              from document verification to submission and follow-up, allowing
              you to focus on your travel plans with peace of mind.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full">
            {" "}
            <img
              src={"/images/s1.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Flights
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Finding the best flight deals can be time-consuming, but with our
              flight booking services, you gain access to a vast network of
              airlines offering competitive rates. Whether you’re planning a
              domestic getaway or an international adventure, we’ll help you
              find the most suitable flights that match your schedule and
              budget. Our team can also assist with special requirements, such
              as meal preferences, seat selection, and flight changes, ensuring
              your journey is as comfortable and convenient as possible.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full">
            {" "}
            <img
              src={"/images/s2.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
        <div className="grid items-center grid-cols-1  mt-24 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Hotel Reservations
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Choosing the right accommodation is key to enjoying your trip, and
              our hotel reservation services are designed to meet your needs, no
              matter where in the world you travel. We partner with a wide range
              of hotels, from luxury resorts to budget-friendly options,
              ensuring that you find the perfect place to stay. Our service
              includes booking, special requests, and handling modifications,
              all while securing the best rates available. We aim to make your
              stay as comfortable and enjoyable as possible.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full">
            {" "}
            <img
              src={"/images/s3.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
        <div className="grid mb-24 flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              City Tours
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Discover the unique charm and culture of the UAE with our
              personalized city tours. Whether you're interested in the bustling
              streets of Dubai, the cultural heritage of Abu Dhabi, or the
              scenic beauty of Sharjah, we craft tailor-made itineraries to
              match your interests and pace. Our experienced guides offer
              insider knowledge and unique experiences, from iconic landmarks to
              hidden gems. Enjoy a stress-free exploration of the UAE’s cities,
              designed just for you.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full ">
            {" "}
            <img
              src={"/images/s4.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
        <div className="grid items-center grid-cols-1  mt-24 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Hajj & Umrah Services
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Embarking on a spiritual journey for Hajj or Umrah is a
              significant life event, and we are dedicated to making it as
              smooth and fulfilling as possible. Our comprehensive pilgrimage
              packages cover every aspect of your trip, including visa
              processing, flight bookings, accommodations close to holy sites,
              guided tours, and more. We ensure that all religious requirements
              are met, and our on-ground support team is there to assist you
              throughout your journey. With our meticulous planning and
              attention to detail, you can focus entirely on your spiritual
              experience.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full ">
            {" "}
            <img
              src={"/images/s5.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
        <div className="grid mb-24 flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className=" volkhov mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Travel Insurance
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Unexpected events can disrupt even the best-planned trips, which
              is why our travel insurance services are designed to protect you
              against unforeseen circumstances. We offer a range of coverage
              options, including medical emergencies, trip cancellations, lost
              luggage, and more, tailored to your specific travel needs. With
              our insurance plans, you can travel with confidence, knowing that
              you are protected against potential risks. Our team will guide you
              through selecting the right plan and ensure that you have the
              support you need in case of any incidents.
            </p>
            <Link href={"/contact"} className="flex justify-center">
              <MainButton
                text="Contact Us"
                classes="w-[9.25rem] h-[3.25rem] z-[10]"
                isGradient
              />
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              src={"/images/s6.png"}
              alt="category card icon"
              className="h-[400px]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
