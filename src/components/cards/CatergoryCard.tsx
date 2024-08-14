import React from "react";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
}

function CatergoryCard({ iconUrl, title, description, highlighted }: IProps) {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[2.5rem] ${
        highlighted ? "bg-white  rounded-[2.5rem]" : ""
      }`}
    >
      <div>
        <img src={iconUrl} alt="category card icon" className="h-[180px]" />
      </div>
      <p className="text-subtitle text-[1.2rem] font-[600]">{title}</p>
      <p className="text-lightGray text-center text-[1rem] font-medium">
        {description}
      </p>
    </div>
  );
}

export default CatergoryCard;
