import React from "react";

const Navbar = () => {
  return (
    <div className="font-primary text-xl">
      <ul className="text-zinc-400 flex gap-10 justify-end mt-30">
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
            href="/"
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
