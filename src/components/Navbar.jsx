import React from "react";

const Navbar = () => {
  return (
    <div className="font-primary md:text-xl">
      <ul className="text-zinc-400 flex gap-6 md:gap-10 justify-end mt-10 md:mt-30 mr-3 md:mr-0">
        <li>
          <a
            href="https://github.com/JamesMan689"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/james-xu-6383a2241/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1VUgaUqskgNa6HK9Ruu29n0mN87jIofJV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
