import type { ComponentProps } from "react";
import type { SimpleIcon } from "simple-icons";

export function SimpleIcon({
  icon,
  className = "size-4",
  ...props
}: ComponentProps<"svg"> & { icon: SimpleIcon }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
