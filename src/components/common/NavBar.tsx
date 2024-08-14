"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full sticky top-0 bg-white z-30 md:px-[9rem] shadow-md">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in p-4 ">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href={"/"} className="flex items-center gap-1">
              <img src="/images/logo.png" alt="logo" className="lg:h-[60px]" />
              <span className="volkhov font-[700] text-[2rem] inline-flex text-lightBlue">
                Choudhary Facilities
              </span>
            </Link>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <Link href={"/"}>
              <p
                className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
              >
                Home
              </p>
            </Link>
            <Link href={"/services"}>
              <p
                className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
              >
                Services
              </p>
            </Link>
            <Link href={"/about"}>
              <p
                className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
              >
                About Us
              </p>
            </Link>
            <Link href={"/contact"}>
              <MainButton
                text="Contact Us"
                classes="bg-transparent text-navText font-[600] shadow-none rounded-normal border border-navText hover:border-none hover:text-white"
              />
            </Link>
            {/* <p
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Contact
            </p> */}

            {/* <Link
              href="/auth/login"
              className="hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2 "
            >
              Login
            </Link>

            <MainButton
              text="Sign up"
              classes="bg-transparent text-navText font-[600] shadow-none rounded-normal border border-navText hover:border-none hover:text-white"
            />

            <div className="flex gap-2 items-center cursor-pointer">
              <p className="font-[700]">EN</p>
              <div>
                <img src="/images/chevron-down.png" alt="chevron down" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999]   py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-white py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link href={"/"}>
              <img src="/images/logo.png" alt="logo" className="w-[4rem]" />
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none ">
                <Link href={"/"} onClick={toggleMenu}>
                  <p
                    className={`hover:text-black text-navText font-[600] cursor-pointer flex items-center gap-2`}
                  >
                    Home
                  </p>
                </Link>{" "}
                <Link href={"/services"} onClick={toggleMenu}>
                  <p
                    className={`hover:text-black text-navText font-[600] cursor-pointer flex items-center gap-2`}
                  >
                    Services
                  </p>
                </Link>
                <Link href={"/about"} onClick={toggleMenu}>
                  <p
                    className={`hover:text-black text-navText font-[600] cursor-pointer flex items-center gap-2`}
                  >
                    About Us
                  </p>
                </Link>
                <Link href={"/contact"} onClick={toggleMenu}>
                  <MainButton
                    text="Contact Us"
                    classes="bg-primary hover:bg-primary text-white font-[600] shadow-none rounded-normal border border-none hover:text-white"
                  />
                </Link>
                {/* <div className="flex gap-2 items-center cursor-pointer">
                  <p className="font-[700]">EN</p>
                  <div>
                    <img src="/images/chevron-down.png" alt="chevron down" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
