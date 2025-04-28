import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
