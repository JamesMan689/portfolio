import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center mt-20 mb-10">
      <div className="flex-grow border-t border-[#52525B]"></div>
      <span className="mx-6 text-2xl font-bold text-white font-primary">
        {title}
      </span>
      <div className="flex-grow border-t border-[#52525B]"></div>
    </div>
  );
};

export default SectionHeader;
