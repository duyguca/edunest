import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const avatarVariants = cva(
  "flex justify-center items-center rounded-full overflow-hidden border-white",
  {
    variants: {
      size: {
        default: "w-12 h-12 border-4",
        sm: "w-9 h-9 border-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type AvatarProps = {
  size?: "default" | "sm";
  src?: string;
  alt?: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  size = "default",
  alt,
  src,
  className,
}) => {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {src && <img src={src} alt={alt ?? "avatar"} />}
    </div>
  );
};

export default Avatar;
