import React from "react";

const ProjectCard = ({ image, title, description, stack, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-8 flex items-center gap-8 max-w-3xl text-white font-primary mt-6 group hover:bg-[#1E1E23] transition rounded-3xl cursor-pointer">
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <img
            src={image}
            alt="project icon"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold transition group-hover:text-yellow-400">
            {title}
          </h2>
          <p className="mt-2 mb-4 text-zinc-300">{description}</p>
          <div className="text-zinc-400">🛠️ - {stack}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
