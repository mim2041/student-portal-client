import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen ">
        <div className="loader-container  logo-container ">
          <img src="/JU_logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
