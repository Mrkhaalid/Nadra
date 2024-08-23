"use client";
import React, { useState } from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:my-0 md:pb-40 py-16 lg:px-24 md:px-20 sm:px-10 px-5 h-[80vh] lg:pt-36">
        <div className="lg:w-[50%]">
          <LeftHome
            showMoreInfo={showMoreInfo}
            setShowMoreInfo={setShowMoreInfo}
          />
        </div>
        <div className="lg:w-[50%] lg:pl-10">
          <RightHome />
        </div>
      </div>
      <div className="pt-20">{showMoreInfo && <WhatWeDo />}</div>
    </>
  );
};

export default Home;
