import * as LabelPrimitive from "@radix-ui/react-label";
import { ReactNode } from "react";

export function Label({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor: string;
}) {
  return (
    <LabelPrimitive.Root
      htmlFor={htmlFor}
      className="text-gray-secondary text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </LabelPrimitive.Root>
  );
}

Label.displayName = LabelPrimitive.Root.displayName;
