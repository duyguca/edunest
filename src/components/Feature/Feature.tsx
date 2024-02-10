import * as React from "react";
import Typography from "../Typography";

export interface FeatureProps {
  title: string;
  desc: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, desc, icon }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center rounded-lg border-2 border-textColor shadow-[0px_4px_0px_0px_#050505] py-10 px-8">
      <div className=" w-16 h-16 rounded-full  overflow-hidden mb-6 bg-purple-dark" />

      <div className=" flex flex-col p-8 text-center ">
        <Typography as="h6" variant="h6" className="mb-2">
          {title}
        </Typography>
        <Typography variant="pM" className="">
          {desc}
        </Typography>
      </div>
    </div>
  );
};

export default Feature;
