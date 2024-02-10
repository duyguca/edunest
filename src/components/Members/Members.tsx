import * as React from "react";
import Typography from "../Typography";
import Button from "../Button/Button";
import Member from "../Member/Member";
import Badge from "../Badge/Badge";
import { MemberProps } from "../Member/Member";

export interface MembersProps {
  title: string;
  desc: string;
  imgPath: string;
  members?: MemberProps[];
}

const Members: React.FC<MembersProps> = ({ title, members }) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center py-16 gap-[64px] ">
      <div className="absolute -z-10 w-[1000px] h-[870px]  bg-gradient-to-b from-[#FBF9FD] via-[#FBF0F8] to-[rgba(255, 255, 255, 0)] bg-opacity-28 rounded-lg border-2 border-textColor shadow-[0px_4px_0px_0px_#050505] "></div>
      <Badge
        variant="purple"
        label="New Members Section"
        className="uppercase mb-3"
      />
      <Typography as="h4" variant="h4" className="w-[45%] text-center">
        {title}
      </Typography>
      <div className="flex justify-between items-center gap-10">
        {members?.map((member, index) => (
          <Member key={member.memberName} {...member} />
        ))}
      </div>
      <Button label="See All" />
    </div>
  );
};

export default Members;
