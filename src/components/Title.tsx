import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Titles for the different sections of the website.
 */
export const Title = ({ title }: { title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
        { y: "-100%" },
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
  }, [title, animateTitle, animateLine, isInView]);

  return (
    <div ref={containerRef} className="relative mb-8 w-fit overflow-hidden">
      <motion.h2
        ref={titleScope}
        className="from-brand-400 to-brand-500 translate-y-full bg-gradient-to-b bg-clip-text pb-1 text-3xl leading-none font-semibold text-transparent uppercase sm:text-4xl"
        initial={{ y: "100%" }}
      >
        {title}
      </motion.h2>
      <motion.div
        ref={lineScope}
        className="title-line bg-brand-500 absolute right-0 bottom-0 h-0.5 w-0"
        initial={{ width: 0 }}
      />
    </div>
  );
};
