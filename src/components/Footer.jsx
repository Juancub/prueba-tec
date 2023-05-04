import React from "react";
import facebook from "../assets/social/facebook-white.svg";
import instagram from "../assets/social/instagram-white.svg";
import twitter from "../assets/social/twitter-white.svg";
import storeApple from "../assets/store/app-store.svg";
import storeAndroid from "../assets/store/play-store.svg";
import storeWindows from "../assets/store/windows-store.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="flex flex-row max-md:flex-row justify-between">
        <div className="flex flex-row gap-5 pl-20 text-left p-2 items-center max-md:flex max-md:flex-col max-md:pl-20">
          <p>Home</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Help</p>
        </div>
        <div className="w-70 pl-10 py-1 flex flex-row  pr-10 max-sm:flex max-sm:flex-col max-md:pl-0 self-center">
          <img className="max-sm:h-8 max-md:py-1 h-10 px-3" src={facebook} alt="facebook" />
          <img className="max-sm:h-8 max-md:py-1 h-10 px-3" src={instagram} alt="instagram" />
          <img className="max-sm:h-8 max-md:py-1 h-10 px-3" src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="flex flex-row place-content-around pt-6">
        <div className="w-70 pl-10 py-1 flex flex-row items-center text-center max-md:flex max-md:flex-col max-md:pl-0">
          <img className="h-10 max-md:py-1 px-3" src={storeAndroid} alt="storeAndroid" />
          <img className="h-10 max-md:py-1 px-3" src={storeApple} alt="storeApple" />
          <img className="h-10 max-md:py-1 px-3" src={storeWindows} alt="storeWindows" />
        </div>
      </div>

      <div className="text-xs pl-20 py-1 max-md:pl-0 max-md:text-center">
        Copyright 2023 DEMO Streaming, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
