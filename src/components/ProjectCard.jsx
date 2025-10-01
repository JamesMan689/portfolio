import React from "react";

const ProjectCard = ({ image, title, description, stack, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-start gap-8 max-w-3xl text-white font-primary mt-6 group hover:bg-[#1E1E23] transition rounded-3xl cursor-pointer">
        <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex items-center justify-center flex-shrink-0">
          <img
            src={image}
            alt="project icon"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <h2 className="mt-[-1em] md:mt-0 text-2xl font-bold transition group-hover:text-yellow-400">
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
