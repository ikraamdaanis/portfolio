import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const headingY = useTransform(scrollY, [0, 500], [0, -50]);
  const subHeadingY = useTransform(scrollY, [0, 500], [0, -40]);

  const lineVariants = {
    hidden: { y: 0 },
    visible: {
      y: "100%",
      transition: { duration: 0.8, ease: [0.6, 0, 0.1, 1] }
    }
  };

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.4 } },
    visible: { transition: { staggerChildren: 0.4 } }
  };

  return (
    <section className="relative mx-auto flex min-h-screen w-[1240px] max-w-[95%] flex-col items-center justify-center max-sm:mt-20 max-sm:min-h-[60vh]">
      <motion.div
        className="flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="relative w-full overflow-hidden pb-2 text-5xl font-semibold text-white sm:text-7xl md:text-8xl"
          style={{ y: headingY }}
        >
          <span className="relative inline-block bg-gradient-to-b from-brand-400 to-brand-600 bg-clip-text text-transparent">
            I&#39;m Ikraam.
            <motion.div
              className="absolute inset-0 h-full w-full bg-backgroundDark"
              variants={lineVariants}
            />
          </span>
        </motion.h1>
        <motion.h2
          className="relative flex flex-col gap-2 text-4xl font-medium leading-[1.2] text-white sm:text-6xl md:text-7xl"
          style={{ y: subHeadingY }}
        >
          <span className="relative block overflow-hidden">
            Software Developer.
            <motion.div
              className="absolute inset-0 h-full w-full bg-backgroundDark"
              variants={lineVariants}
            />
          </span>
          <span className="relative block overflow-hidden">
            From London.
            <motion.div
              className="absolute inset-0 h-full w-full bg-backgroundDark"
              variants={lineVariants}
            />
          </span>
        </motion.h2>
      </motion.div>
    </section>
  );
};
