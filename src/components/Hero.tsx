import { motion, useScroll, useTransform } from "motion/react";

export const Hero = () => {
  const { scrollY } = useScroll();

  const headingY = useTransform(scrollY, [0, -500], [0, -50]);
  const subHeadingY = useTransform(scrollY, [0, -500], [0, -40]);

  const lineVariants = {
    hidden: { y: 0 },
    visible: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.6, 0, 0.1, 1] }
    }
  };

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.4 } },
    visible: { transition: { staggerChildren: 0.4 } }
  };

  return (
    <section className="relative mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center px-4 text-center lg:text-left">
      <motion.div
        className="mb-40 flex w-full flex-col sm:mb-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="relative w-full overflow-hidden pb-2 text-[clamp(2.8rem,calc(40px+120*(100vw-420px)/1600),8rem)] font-semibold text-white"
          style={{ y: headingY }}
        >
          <span className="from-brand-400 to-brand-600 relative inline-block bg-gradient-to-b bg-clip-text text-transparent">
            I&#39;m Ikraam
            <motion.div
              className="bg-background-dark absolute inset-0 h-full w-full"
              variants={lineVariants}
            />
          </span>
        </motion.h1>
        <motion.h2
          className="relative flex flex-col gap-2 text-[clamp(1.8rem,calc(20px+106*(100vw-420px)/1600),4.5rem)] leading-none font-medium text-white"
          style={{ y: subHeadingY }}
        >
          <span className="relative block overflow-hidden">
            Software Developer
            <motion.div
              className="bg-background-dark absolute inset-0 h-full w-full"
              variants={lineVariants}
            />
          </span>
          <span className="relative block overflow-hidden">
            From London
            <motion.div
              className="bg-background-dark absolute inset-0 h-full w-full"
              variants={lineVariants}
            />
          </span>
        </motion.h2>
      </motion.div>
    </section>
  );
};
