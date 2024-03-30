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
        "bg-backgroundDark2 relative top-[2px] h-[26px] rounded-md border border-zinc-700 px-1 text-white"
      )}
    >
      {props.children}
    </span>
  );
};
