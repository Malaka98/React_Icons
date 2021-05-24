import React from "react";
import { IconContext } from "react-icons";

import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BsFillBrightnessHighFill, BsHeartFill } from "react-icons/bs";

export default function App() {
  return (
    <div>
      <IconContext.Provider value={{ size: "12rem", color: "#2E408A" }}> 
      {/*The icon provider can be used to provide the same style throughout the react application */}
        <AiFillApple size="10rem" color="#538CC6" />{" "}
        {/* But you can override the styles and use them when needed */}
        <AiFillAndroid size="10rem" color="#419933" /> {" "} <BsHeartFill color="#B43C96" size="5rem"/><br />
        <br />
        <BsFillBrightnessHighFill />
      </IconContext.Provider>
    </div>
  );
}
