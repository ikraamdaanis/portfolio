import type { ComponentProps } from "react";
import { cn } from "utils/cn";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      {...props}
      className={cn(
        "block w-full rounded-md border border-zinc-800 px-4 py-2 shadow-sm focus-visible:border-zinc-700 focus-visible:outline-none sm:text-sm",
        className
      )}
    />
  );
}
