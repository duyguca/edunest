import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Typography from "../Typography";

const badgeVariants = cva(
  "px-3 py-1 border-2 border-textColor rounded-[44px] uppercase w-max",
  {
    variants: {
      variant: {
        pink: "bg-pink-light ",
        purple: "bg-purple-light",
        yellow: "bg-badgeYellow ",
        red: "bg-red-light",
        gray: "bg-gray-700 text-white",
      },
    },
  }
);

interface BadgeProps {
  variant?: "pink" | "purple" | "yellow" | "red" | "gray";
  label?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, label, className }) => {
  return (
    <Typography
      as="span"
      variant="labelXS"
      className={cn(badgeVariants({ variant }), className)}
    >
      {label}
    </Typography>
  );
};
export default Badge;
