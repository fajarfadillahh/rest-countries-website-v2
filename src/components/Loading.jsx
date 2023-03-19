import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-4 bg-gray-800/80">
      <BeatLoader color="#ffffff" size="1.3rem" />
      <h3 className="text-[20px] font-semibold text-white">Loading data...</h3>
    </div>
  );
};

export default Loading;
