import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define typography variants using class-variance-authority(cva)
const typographyVariants = cva(["text-gray-dark"], {
  variants: {
    variant: {
      h1: ["text-7xl", "font-medium", "tracking-[-3%]"],
      h2: ["text-6xl", "font-medium", "tracking-[-2%]"],
      h3: ["text-5xl", "font-medium", "tracking-[-2%]"],
      h4: ["text-4xl", "font-medium", "leading-none", "tracking-[-2%]"],
      h5: ["text-3xl", "font-medium", "leading-tight", "tracking-[-1%]"],
      h6: ["text-2xl", "font-medium", "leading-tight", "tracking-[-1%]"],
      pXL: ["text-xl", "font-normal", "leading-relaxed"],
      pL: ["text-lg", "font-normal", "leading-relaxed"],
      pM: ["text-base", "font-light", "leading-normal"],
      pS: ["text-sm", "font-normal", "leading-relaxed"],
      labelXL: [
        "text-xl",
        "font-medium",
        "leading-relaxed",
        "tracking-[-1.5%]",
      ],
      labelL: [
        "text-lg",
        "font-semibold",
        "leading-relaxed",
        "tracking-[-1.5%]",
      ],
      label: ["text-base", "font-medium", "leading-normal", "tracking-[-1.1%]"],
      labelS: ["text-sm", "font-medium", "leading-relaxed", "tracking-[-0.6%]"],
      labelXS: [
        "text-xs",
        "font-semibold",
        "leading-relaxed",
        "tracking-[-0.6%]",
      ],
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

// Define the prop types for the Typography component
export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType<{
    className?: string;
  }>;
  children: React.ReactNode;
  className?: string;
}

// Define the Typography component as a functional component
const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  as,
  ...rest
}) => {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
