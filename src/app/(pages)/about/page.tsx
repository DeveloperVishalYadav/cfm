import React from "react";

const page = () => {
  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-6 md:px-24">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="volkhov mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our leadership Team
          </h2>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pb-36">
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="images/team.png"
              alt="team"
              loading="lazy"
              width="640"
              height="805"
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Javed Akhtar Choudhary
                </h4>
                <span className="block text-sm text-gray-500 pb-8">CEO</span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Phone : +971 543360118
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="images/team.png"
              alt="team"
              loading="lazy"
              width="640"
              height="805"
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Zulfiqar Hussain Kazmi
                </h4>
                <span className="block text-sm text-gray-500 pb-8">
                  Marketing Executive{" "}
                </span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Phone : +971 552888967
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="images/team.png"
              alt="team"
              loading="lazy"
              width="640"
              height="805"
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Salamuddin Ansari
                </h4>
                <span className="block text-sm text-gray-500 pb-8">
                  Office Manager
                </span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Phone : +971 547524685
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
