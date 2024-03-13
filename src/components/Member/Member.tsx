import * as React from "react";
import Typography from "../Typography";

export interface MemberProps {
  variant?: "primary" | "secondary";
  memberName: string;
  location: string;
  imgPath: string;
}

const Member: React.FC<MemberProps> = ({ memberName, location, imgPath }) => {
  return (
    <div className=" w-[270px] h-[400px] flex flex-col justify-center items-center rounded-lg p-9 border-2 border-textColor shadow-[0px_4px_0px_0px_#050505] bg-white">
      <div className=" w-[200px] h-[200px] rounded-[50%] overflow-hidden mb-8">
        <img
          src={imgPath}
          alt="member image"
          className="w-full h-full object-cover bg-red-300"
        />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <Typography as="h6" variant="h6" className="mb-1">
          {memberName}
        </Typography>
        <Typography variant="pM" className="">
          {location}
        </Typography>
      </div>
    </div>
  );
};

export default Member;
