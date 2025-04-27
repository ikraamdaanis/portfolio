import type { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export const Pill = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn(
        props.className,
        "bg-background-dark2 relative rounded-md border border-zinc-700 px-1 text-white"
      )}
    >
      {props.children}
    </span>
  );
};
