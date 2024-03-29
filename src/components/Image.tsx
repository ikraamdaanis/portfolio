import type { ImgHTMLAttributes } from "react";

/** Reusable Image component. */
export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        color: "transparent"
      }}
      {...props}
    />
  );
};
