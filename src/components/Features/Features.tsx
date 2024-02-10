import * as React from "react";
import Typography from "../Typography";
import Feature, { FeatureProps } from "../Feature/Feature";

export interface FeaturesProps {
  title: string;
  desc: string;
  icon: string;
  features?: FeatureProps[];
}

const Features: React.FC<FeaturesProps> = ({ title, desc, icon, features }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center py-16 gap-[64px] text-center ">
      <Typography as="h4" variant="h4" className="w-[30%] ">
        {title}
      </Typography>
      <div className="grid grid-cols-3 grid-rows-2 gap-10">
        {features?.map((feature) => (
          <Feature {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
