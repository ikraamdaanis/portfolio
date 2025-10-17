import type { ComponentProps } from "react";
import { cn } from "utils/cn";

export function Button({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "from-brand-bottom to-brand-top cursor-pointer rounded-md border border-transparent bg-gradient-to-t px-4 py-2 text-center text-sm leading-none font-medium text-white transition hover:brightness-105 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none active:scale-[99%] disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
