import Link from "next/link";
import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  imageUrl: string;
  title: string;
  amount: string;
  duration: string;
  duration2: string;
  highlighted: boolean;
}

function DestinationCard({
  imageUrl,
  title,
  amount,
  duration,
  duration2,
  highlighted,
}: IProps) {
  return (
    <div className="flex relative flex-col justify-between pb-[2.63rem] group">
      <div className="object-fill ">
        <img
          src={imageUrl}
          alt="destination image"
          className="w-[314px] h-[20.43rem]  object-cover rounded-t-[1.5rem]"
        />
      </div>
      <div className="bg-white w-full mt-[1.69rem] px-[8px] group-hover:shadow-md  group-hover:rounded-[1.5rem]">
        <div className="flex justify-between text-black text-[1.125rem] font-bold">
          <p>{title}</p>
          <p className="text-primary text-[14px]">{amount}</p>
        </div>
        <div className="flex gap-4 items-center pt-3">
          <div>
            <img src="/images/send-icon.png" alt="send icon" />
          </div>
          <p className="text-lightGray font-medium ">{duration}</p>
        </div>
        <div className="flex gap-4 items-center pt-2">
          <div>
            <img src="/images/send-icon.png" alt="send icon" />
          </div>
          <p className="text-lightGray font-medium">{duration2}</p>
        </div>
        <Link
          href={"/contact"}
          className="flex items-center justify-center py-4"
        >
          <MainButton
            text="Contact Us"
            classes="bg-transparent text-navText font-[600] shadow-none rounded-normal border border-navText hover:border-none hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;
