import { GithubIcon } from "components/GitHubIcon";
import { Arrow } from "features/work/Arrow";
import type { Project } from "features/work/Projects";
import { motion } from "framer-motion";
import hoverEffect from "hover-effect";
import { useEffect, useRef } from "react";

interface Props {
  project: Project;
}

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
}: Props) => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(`.${title}`),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      imagesRatio: 0.625,
      easing: "power3.out",
      speedIn: 0.8,
      speedOut: 0.8,
      image1,
      image2,
      displacementImage: `/images/distort-${Math.floor(Math.random() * 2) + 1}.jpg`
    });
  }, [image1, image2, title]);

  const imageCover1 = useRef<HTMLDivElement>(null);
  const imageCover2 = useRef<HTMLDivElement>(null);

  return (
    <article className="mb-8 flex flex-col pb-20 xl:border-b xl:border-[#252525] xl:pb-8">
      <div className="relative mb-8 flex w-full justify-between">
        <div className="w-[70%] md:w-full">
          <h3 className="mb-4 text-[clamp(2rem,calc(40px+100*(80vw-220px)/1600),6rem)] font-semibold text-pink-300">
            {title}
          </h3>
          <p className="mb-8 w-[95%] max-w-[800px] text-[1.6rem] font-light leading-8 sm:text-[1.1rem] sm:leading-normal">
            {description1}
          </p>
          <p className="mb-8 w-[95%] max-w-[800px] text-[1.6rem] font-light leading-8 sm:text-[1.1rem] sm:leading-normal">
            {description2}
          </p>
          <h4 className="mb-3 text-[1.8rem] font-light text-pink-300 sm:text-[1.3rem]">
            Tech Stack and Features:
          </h4>
          <div className="mb-12 flex sm:mb-6 sm:flex-col sm:justify-between">
            <ul className="mr-[4.5rem] sm:mr-5">
              {list1.map(item => (
                <li
                  key={item}
                  className="text-[1.5rem] font-normal text-gray-100 sm:text-[1.1rem]"
                >
                  - {item}
                </li>
              ))}
            </ul>
            <ul>
              {list2.map(item => (
                <li
                  key={item}
                  className="text-[1.5rem] font-normal text-gray-100 sm:text-[1.1rem]"
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
            className="group inline-flex items-center fill-pink-300"
          >
            <span className="duration-400 mr-2 text-[1.8rem] font-light text-pink-300 transition-colors delay-200 group-hover:text-white sm:text-[1.3rem]">
              Link to Repo:
            </span>
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.4 }}
              className="scale-110"
            >
              <GithubIcon />
            </motion.div>
          </a>
        </div>
        <Arrow />
      </div>
      <div className="flex aspect-[16/10] w-full items-start justify-end overflow-hidden sm:hidden lg:justify-center xl:order-2">
        <div className="h-full w-[70%] lg:w-full">
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
      {/* <motion.div
        initial={{ display: "none" }}
        animate={{ display: "block" }}
        className="aspect-[16/10] sm:relative sm:block"
      >
        <div className="h-full w-full">
          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              <ProjectImage
                image1={image1}
                image2={image2}
                imageCover1={imageCover1}
                imageCover2={imageCover2}
              />
            </a>
          ) : (
            <ProjectImage
              image1={image1}
              image2={image2}
              imageCover1={imageCover1}
              imageCover2={imageCover2}
            />
          )}
        </div>
      </motion.div> */}
    </article>
  );
};
