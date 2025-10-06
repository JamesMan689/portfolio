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
            href="https://docs.google.com/document/d/1kBby6_kwcbNP07H9tqkUZ9gF6t5w9yY64oTPvH9SZ5Y/edit?usp=sharing"
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
