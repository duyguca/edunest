import * as React from "react";
import Typography from "../Typography";
import Badge from "../Badge/Badge";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const FiftyFiftyVariants = cva("w-full flex  justify-between items-center", {
  variants: {
    variant: {
      primary: "flex-row",
      secondary: "flex-row-reverse ",
    },
  },
});

export interface FiftyFiftyProps {
  title: string;
  desc: string;
  imgPath: string;
  variant: "primary" | "secondary";
}

const FiftyFifty: React.FC<FiftyFiftyProps> = ({
  title,
  desc,
  imgPath,
  variant,
}) => {
  return (
    <div className={cn(FiftyFiftyVariants({ variant }))}>
      <div className="w-[50%] flex flex-col justify-start items-start gap-4  px-4">
        <Badge variant="purple" label="Join FiftyFifty Section" />
        <Typography as="h3" variant="h3" className="">
          {title}
        </Typography>
        <Typography variant="pL" className="">
          {desc}
        </Typography>
      </div>
      <div className="w-[50%] overflow-hidden px-4">
        <img
          src={imgPath}
          alt="FiftyFifty image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FiftyFifty;
