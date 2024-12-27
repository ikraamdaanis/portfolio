import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

/**
 * Titles for the different sections of the website.
 */
export const Title = ({ title }: { title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowSize();

  const [titleScope, animateTitle] = useAnimate();
  const [lineScope, animateLine] = useAnimate();

  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  useEffect(() => {
    if (!isInView) return;

    async function titleAnimation() {
      await animateTitle(
        titleScope.current,
        { y: 0 },
        { duration: 1, ease: "easeOut" }
      );
    }

    async function lineAnimation() {
      await animateLine(
        lineScope.current,
        { width: "100%" },
        { duration: 1.5, ease: "easeOut", delay: 0.2 }
      );
    }

    titleAnimation();
    lineAnimation();
  }, [width, title, animateTitle, animateLine, isInView]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto my-20 w-fit overflow-hidden max-sm:my-16"
    >
      <motion.h2
        ref={titleScope}
        className={`title translate-y-full pb-4 text-center text-[clamp(2rem,calc(40px+100*(100vw-220px)/1600),5.5rem)] font-semibold uppercase leading-none text-brand-400 max-xl:pb-2 max-xl:text-left max-sm:w-fit max-sm:text-[10vw] title-${title.replace(" ", "")}`}
        initial={{ y: "100%" }}
      >
        {title}
      </motion.h2>
      <motion.div
        ref={lineScope}
        className={`title-line absolute bottom-0 right-0 h-0.5 w-0 bg-brand-400 title-line-${title.replace(" ", "")}`}
        initial={{ width: 0 }}
      />
    </div>
  );
};
