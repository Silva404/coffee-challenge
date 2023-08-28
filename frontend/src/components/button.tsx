import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "px-8 py-3 w-full lg:w-fit inline-flex text-white items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-90 transition",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        ghost: "border border-primary hover:bg-white/10 hover:text-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, className }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
