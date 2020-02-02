import React from "react";
import Image from "../img/cloud01.png";

const Background = () => {
  return (
    <div className="BackgroundWrapper">
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud1"
      />
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud2"
      />
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud3"
      />
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud4"
      />
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud5"
      />
      <img
        src={Image}
        alt="LB Logo"
        className="Background__cloud Background__cloud--cloud6"
      />
      <ul className="Background">
        <li className="Background__image-0">
          <span className="Background_image--span-0"></span>
        </li>
        <li className="Background__image-1">
          <span className="Background_image--span-1"></span>
        </li>
        <li className="Background__image-2">
          <span className="Background_image--span-2"></span>
        </li>
        <li className="Background__image-3">
          <span className="Background_image--span-3"></span>
        </li>
        <li className="Background__image-4">
          <span className="Background_image--span-4"></span>
        </li>
        <li className="Background__image-5">
          <span className="Background_image--span-5"></span>
        </li>
      </ul>
    </div>
  );
};

export default Background;
