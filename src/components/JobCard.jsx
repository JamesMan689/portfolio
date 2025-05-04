import React from "react";

const JobCard = ({ company, title, logo, stack }) => {
  return (
    <div className="p-8 flex items-center text-white font-primary">
      <div className="w-[150px] h-[150px]">
        <img
          src={logo}
          alt="company logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-14">
        <h2 className="text-2xl font-bold">{company}</h2>
        <p className="mt-2 mb-4 text-zinc-300">{title}</p>
        <div className="text-zinc-400">🛠️ - {stack}</div>
      </div>
    </div>
  );
};

export default JobCard;
