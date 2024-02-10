import * as React from "react";
import Typography from "../Typography";
import Testimonial, { TestimonialProps } from "../Testimonial/Testimonial";
import Badge from "../Badge/Badge";

export interface TestimonialsProps {
  title: string;
  desc: string;
  testimonials?: TestimonialProps[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center  py-16 gap-[64px] ">
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <img
          src="https://duygukoksal.com/EduNest/Elips.png"
          alt=""
          className="object-fit "
        />
      </div>
      <Badge variant="red" label="testimonials section" />
      <Typography as="h4" variant="h4" className="">
        {title}
      </Typography>
      <div className="grid grid-cols-2 gap-10 ">
        {testimonials?.map((testimonial) => (
          <Testimonial {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
