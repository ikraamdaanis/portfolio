import { GithubIcon } from "components/icons/Github";
import { ProjectImage } from "features/work/ProjectImage";
import type { Project } from "features/work/Projects";
import hoverEffect from "hover-effect";
import { motion } from "motion/react";
import { useEffect } from "react";
import { cn } from "utils/cn";
import { defaultTextStyles } from "utils/consts";

export const ProjectItem = ({
  project: {
    title,
    description1,
    description2,
    list1,
    list2,
    repo,
    website,
    image1,
    image2
  }
}: {
  project: Project;
}) => {
  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = () => {};

    new hoverEffect({
      parent: document.querySelector(`.${title}`),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI * Math.floor(Math.random() * 3),
      imagesRatio: 0.625,
      easing: "power3.out",
      speedIn: 0.8,
      speedOut: 0.8,
      image1,
      image2,
      displacementImage: `/portfolio/images/distort-${Math.floor(Math.random() * 2) + 1}.jpg`
    });

    console.log = originalConsoleLog;
  }, [image1, image2, title]);

  const textStyles = cn("mb-8", defaultTextStyles);

  return (
    <article className="border-b-border-dark mt-10 mb-10 flex flex-col border-b pb-10">
      <div className="relative mb-8 flex w-full justify-between">
        <div className="w-full">
          <h3 className="text-brand-400 mb-4 text-3xl font-semibold">
            {title}
          </h3>
          <p className={textStyles}>{description1}</p>
          <p className={textStyles}>{description2}</p>
          <h4 className="text-brand-400 mb-3 text-2xl font-normal">
            Tech Stack and Features:
          </h4>
          <div className="mb-12 flex sm:mb-6 sm:flex-col sm:justify-between">
            <ul className="mr-[4.5rem] sm:mr-5">
              {list1.map(item => (
                <li
                  key={item}
                  className={cn(defaultTextStyles, "text-sm sm:text-xl")}
                >
                  - {item}
                </li>
              ))}
            </ul>
            <ul>
              {list2.map(item => (
                <li
                  key={item}
                  className={cn(defaultTextStyles, "text-sm sm:text-xl")}
                >
                  - {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={repo}
            rel="noreferrer"
            target="_blank"
            className="group fill-brand-400 text-brand-400 hover:fill-text-white hover:text-text-white inline-flex items-center transition-colors"
          >
            <span className="mr-2 text-lg font-normal">Link to Repo:</span>
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.4 }}
              className="scale-110"
            >
              <GithubIcon className="size-4 min-w-4" />
            </motion.div>
          </a>
        </div>
      </div>
      <div className="hidden aspect-[16/10] w-full items-start justify-end overflow-hidden md:flex lg:justify-center xl:order-2">
        <div className="h-full w-full">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="block h-full w-full"
            >
              <div className={`canvas-container h-full w-full ${title}`}></div>
            </a>
          ) : (
            <div className={`canvas-container h-full w-full ${title}`}></div>
          )}
        </div>
      </div>
      <div className="relative md:hidden">
        <div className="relative h-full w-full">
          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              <ProjectImage image1={image1} image2={image2} />
            </a>
          ) : (
            <ProjectImage image1={image1} image2={image2} />
          )}
        </div>
      </div>
    </article>
  );
};
