import React, { useEffect, useRef } from "react";
import james from "../assets/james.png";
import VanillaTilt from "vanilla-tilt";

const AboutMe = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.1,
        perspective: 1000,
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center mt-8 md:mt-20 md:mb-30 font-primary">
      <div
        ref={tiltRef}
        className="md:bg-[#242424] rounded-2xl p-5 md:p-20 flex flex-row items-center shadow-lg max-w-3xl w-full"
      >
        <div className="flex-1 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
            JAMES XU <span className="text-3xl">👋</span>
          </h1>
          <h2 className=" text-white mt-2 md:mt-5">
            Computer Science Student at Rutgers University
          </h2>
          <p className="text-zinc-300 mt-5">
            Hi, I'm James, a Computer Science student at Rutgers University,
            graduating in May 2026. I love front-end software engineering and
            enjoy creating clean, user-friendly web experiences. Check out my
            projects below!
          </p>
        </div>
        <div className="mt-8 ml-10 flex-shrink-0 hidden md:block">
          <img
            src={james}
            alt="James Xu"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
