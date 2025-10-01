import React from "react";
import Video from "../Components/Home/Video";
import HomeHeroText from "../Components/Home/HomeHeroText";
import HomeBottom from "../Components/Home/HomeBottom";

const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
       <HomeHeroText />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
