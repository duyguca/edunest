import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "border-2 border-black rounded-md  hover:bg-purple-lighter",
  {
    variants: {
      variant: {
        primary: "bg-purple-light  shadow-[0px_4px_0px_0px_#050505]",
        secondary: "bg-white ",
      },
      size: {
        small: "px-4 py-1 text-sm font-normal",
        default: "px-6 py-3 text-md",
      },
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  label?: string;
  size?: "small" | "default";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  size = "default",
  className,

  ...rest
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {label}
    </button>
  );
};
export default Button;
