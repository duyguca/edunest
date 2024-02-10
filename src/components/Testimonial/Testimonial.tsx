import * as React from "react";
import Typography from "../Typography";

export interface TestimonialProps {
  imgPath: string;
  desc: string;
  fullname: string;
  email: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  imgPath,
  desc,
  fullname,
  email,
}) => {
  return (
    <div className="relative bg-white z-30 w-full flex flex-col justify-start items-start rounded-lg border-2 border-textColor shadow-[0px_4px_0px_0px_#050505] text-gray-dark py-8 px-12 overflow-hidden">
      <div className="absolute top-0 right-0">
        <img src="https://duygukoksal.com/EduNest/Pattern.png" alt="pattern" />
      </div>
      <div className="py-2">
        <img
          src={imgPath}
          alt="user photo"
          className="w-20 h-20 rounded-full object-fill bg-purple-light border-2 border-textColor"
        />
      </div>
      <div>
        <Typography variant="pL" className="py-8">
          {desc}
        </Typography>
        <Typography variant="labelL">{fullname}</Typography>
        <Typography variant="pL">{email}</Typography>
      </div>
    </div>
  );
};
export default Testimonial;
