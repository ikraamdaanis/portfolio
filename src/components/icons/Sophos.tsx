import { type SVGProps } from "react";
import { cn } from "utils/cn";

/** Sophos logo in SVG format. */
export function Sophos({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <span className="relative">
      <span className="absolute top-1/2 left-1/2 z-0 size-[10px] -translate-x-1/2 -translate-y-1/2 bg-white" />
      <svg
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className, "relative z-[1]")}
        {...props}
      >
        <path
          d="m15.74 0v9.95c0 1.037-.562 1.992-1.468 2.494l-6.408 3.556-6.397-3.555c-.905-.503-1.467-1.457-1.467-2.493v-9.952zm-4.075 2.428h-5.205c-1.487 0-2.703 1.217-2.703 2.704s1.216 2.704 2.703 2.704h2.889c.512 0 .93.419.93.931s-.418.931-.93.931l-5.206-.02v1.793h5.206c1.487 0 2.704-1.217 2.704-2.704s-1.217-2.704-2.704-2.704h-2.89c-.512 0-.93-.419-.93-.931s.418-.931.93-.931l5.206.02v-1.792z"
          fillRule="evenodd"
          fill="#005bc8"
        ></path>
      </svg>
    </span>
  );
}
