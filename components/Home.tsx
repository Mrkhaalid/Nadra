import React from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

const Home = () => {
  return (
    <div className="flex gap-5 px-32 h-[80svh] lg:pt-36">
      <div className="w-[50%]">
        <LeftHome />
      </div>
      <div className="w-[50%] pl-10">
        <RightHome />
      </div>
    </div>
  );
};

export default Home;
