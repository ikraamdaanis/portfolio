import type { ComponentProps } from "react";
import { cn } from "utils/cn";

export function Label({
  className,
  children,
  ...props
}: ComponentProps<"label">) {
  return (
    <label {...props} className={cn("block text-sm font-medium", className)}>
      {children}
    </label>
  );
}
