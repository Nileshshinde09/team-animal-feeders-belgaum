"use client";
import React from "react";
import { Globe } from "./components";

const Page = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 justify-start items-center">
        <Globe className="-mt-[2rem]" />
      </div>
      <div className="w-1/2 justify-end">

      </div>
    </div>
  );
};

export default Page;
