import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="file:border-0 file:bg-white/20 file:text-sm file:text-gray-secondary file:rounded file:focus:ring-2 file:focus:ring-offset-gray-secondary file:font-medium flex h-10 w-full rounded-lg border border-gray-secondary bg-transparent px-3 py-2 text-sm ring-offset-gray-secondary text-gray-secondary placeholder:text-gray-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
