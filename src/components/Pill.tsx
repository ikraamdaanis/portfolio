import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "utils/cn";

type Props = {
  children: ReactNode;
};

export const Pill = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn(
        props.className,
        "relative rounded-md border border-zinc-700 bg-backgroundDark2 px-1 text-white"
      )}
    >
      {props.children}
    </span>
  );
};
