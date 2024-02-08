import * as React from "react";
import Typography from "../Typography";
import Button from "../Button";
import Badge from "../Badge/Badge";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const priceVariants = cva("", {
  variants: {
    variant: {
      primary: "text-textColor",
      secondary: "text-red-base",
    },
  },
});

export interface CardProps {
  variant?: "primary" | "secondary";
  title: string;
  desc: string;
  imgPath: string;
  price: string;
}

const Card: React.FC<CardProps> = ({
  title,
  desc,
  imgPath,
  price,
  variant = "primary",
}) => {
  return (
    <div className=" w-[375px] h-[485px] flex flex-col justify-center items-center rounded-lg border-2 border-textColor shadow-[0px_4px_0px_0px_#050505]">
      <div className=" w-[370px] h-[220px] bg-red-300 overflow-hidden">
        <img
          src={imgPath}
          alt="Card image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-start items-start p-8 ">
        <Badge variant="yellow" label="Digital Marketing" />
        <Typography as="h6" variant="h6" className="py-3">
          {title}
        </Typography>
        <Typography variant="pM" className="">
          {desc}
        </Typography>
        <div className="w-full flex justify-between items-end">
          <Button label="Learn More" className="mt-6" />
          <Typography
            as="span"
            variant="labelL"
            className={cn(priceVariants({ variant }))}
          >
            {price}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
