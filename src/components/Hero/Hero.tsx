import * as React from "react";
// import Typography from "@/components/Typography";
// import Button from "@/components/Button";
import Typography from "../Typography";

import AvatarGroups from "../Avatar/AvatarGroups";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

export interface HeroProps {
  subtitle: string;
  title: string;
  desc: string;
  imgPath: string;
}

const Hero: React.FC<HeroProps> = ({ subtitle, title, desc, imgPath }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[45%] flex flex-col justify-start items-start gap-4">
        <Typography as="span" variant="labelL" className="text-left uppercase">
          {subtitle}
        </Typography>
        <Typography as="h2" variant="h2" className="">
          {title}
        </Typography>
        <Typography variant="pL" className="text-left w-[80%]">
          {desc}
        </Typography>
        <Button label="Register an Account" className="mt-8 mb-20" />
        <AvatarGroups>
          <Avatar
            src="https://randomuser.me/api/portraits/men/66.jpg"
            alt="Avatar"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/66.jpg"
            alt="Avatar"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/66.jpg"
            alt="Avatar"
          />
        </AvatarGroups>
      </div>
      <div className="w-[55%]">
        <img src={imgPath} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
