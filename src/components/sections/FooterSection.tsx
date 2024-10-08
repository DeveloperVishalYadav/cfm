import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <section className="px-4">
      <div className="flex flex-col   justify-between gap-4 ">
        <div>
          <p>
            <img
              src="/images/logo.png"
              alt="footer logo"
              className="w-[70px] h-[60px]"
            />
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-2 flex-grow justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <p className="text-lightGray text-[1.125rem] font-[500]">
                  About Us
                </p>
              </Link>
              {/* <p className="text-lightGray text-[1.125rem] font-[500]">
                Careers
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Mobile
              </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/contact">
                <p className="text-lightGray text-[1.125rem] font-[500]">
                  Contact Us
                </p>
              </Link>
              {/* <p className="text-lightGray text-[1.125rem] font-[500]">Press</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Affilates
              </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">More</p>
            <div className="flex flex-col gap-2">
              {" "}
              <Link href="/services">
                <p className="text-lightGray text-[1.125rem] font-[500]">
                  Services
                </p>
              </Link>
              {/* <p className="text-lightGray text-[1.125rem] font-[500]">
                Airline
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Low fare tips
              </p> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">Info</p>

            <p className="text-lightGray">
              <span className="font-semibold"> Office :</span> No 326, Othman
              Bldg opposit Khalid Mosque Fridge Al Murar Deira Dubai.
              <br />
              <span className="font-semibold"> Phone Number :</span> +971
              542549658
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* <div className="flex gap-4 items-center">
            <img src="/images/facebook-icon.png" alt="social icon" />
            <img src="/images/instagram-icon.png" alt="social icon" />
            <img src="/images/x-icon.png" alt="social icon" />
          </div> */}
          {/* <p className="text-lightGray font-[500] text-[1.25rem]">
            Discover our app
          </p> */}
          {/* <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    src="/images/google-play-icon.png"
                    alt="google play icon"
                  />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    get it on
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Google play
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[14rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img src="/images/app-icon.png" alt="google play icon" />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    Available on the
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Apple store
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
      <p className="my-[2rem] text-lightGray text-[0.875rem] font-[600] flex justify-center">
        All rights reserved@Choudhary Facilities Management Service.
      </p>
    </section>
  );
}

export default FooterSection;
