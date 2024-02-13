import * as React from "react";
import Typography from "../Typography";

import Badge from "../Badge/Badge";

import AvatarGroups from "../Avatar/AvatarGroups";
import Avatar from "../Avatar/Avatar";
import FooterNav from "../FooterNav/FooterNav";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const items = [
    { label: "COURSES", link: "/courses" },
    { label: "SCHEDULE", link: "/schedule" },
    { label: "TUTORS", link: "/tutors" },
    { label: "CONTACT", link: "/contact" },
  ];
  const title = "Product";
  return (
    <div className="flex flex-col pt-[56px] px-[112px]">
      <div className="flex justify-between items-center gap-20 border-b border-gray-light">
        <div>
          <Badge label="members" variant="gray" />
          <Typography variant="pM" className="mt-6">
            A learning platform powered by Courselia
          </Typography>
          <Typography className="text-purple-dark mb-[50px]" variant="labelL">
            hi@flowbase.co
          </Typography>
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
        <div className="flex gap-10">
          <FooterNav items={items} title={title} />
          <FooterNav items={items} title={title} />
          <FooterNav items={items} title={title} />
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <Typography variant="pM" className="mt-6">
          &#169; Made by Courselia Template & powered by Flowbase
        </Typography>
        <div className="flex gap-[10px]">
          <div className="w-10 h-10 rounded-full bg-purple-dark" />
          <div className="w-10 h-10 rounded-full bg-yellow-dark" />
          <div className="w-10 h-10 rounded-full bg-teal-dark" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
