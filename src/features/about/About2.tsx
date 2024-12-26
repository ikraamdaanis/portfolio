import { Sophos } from "components/icons/Sophos";
import { TypeScript } from "components/icons/TypeScript";
import { Pill } from "components/Pill";
import { Title } from "components/Title";

/** Section where I talk about my story. */
export const About2 = () => {
  return (
    <div
      id="about"
      className="relative mx-auto mb-32 flex max-w-screen-lg flex-col justify-center max-sm:mb-0"
    >
      <Title title="About Me" />
      <div className="flex flex-col items-center justify-center">
        <div className="mb-16 text-[clamp(1.8rem,calc(20px+100*(40vw-100px)/1600),2rem)] font-medium leading-[1.2] text-white max-sm:mb-8 max-sm:text-[4.8vw]">
          <article>
            <h1 className="mb-8 text-balance text-2xl font-medium sm:text-3xl">
              I'm Ikraam - a{" "}
              <span className="text-brand-400">software engineer</span>
            </h1>
            <h3 className="font-semibold uppercase tracking-widest text-brand-400">
              About Me
            </h3>
            <p className="">
              I'm a Software Engineer from London, UK. I'm currently working as
              a{" "}
              <Pill className="inline-flex items-center gap-1">
                <TypeScript className="size-6" />
                TypeScript
              </Pill>{" "}
              dev for{" "}
              <Pill className="inline-flex items-center gap-1">
                <Sophos className="text-[#005bc8]" />
                Sophos
              </Pill>
              . Coding is my passion, and I absolutely love what I do. Every
              day, I get to tackle new challenges and create impactful products
              that make a difference. It's been an incredible journey so far and
              I'm excited to see where my career takes me.
            </p>
          </article>
        </div>
        <p className="mb-16 text-[clamp(1.8rem,calc(20px+100*(40vw-100px)/1600),2rem)] font-medium leading-[1.2] text-white max-sm:mb-8 max-sm:text-[4.8vw]">
          Through YouTube, Udemy, Scrimba, and other resources, I have learnt
          several technologies. HTML, CSS, SCSS, Styled Components, JavaScript,
          ES6+, React, Redux, NodeJs, Express and MongoDB, just to name a few.
        </p>
        <p className="mb-16 text-[clamp(1.8rem,calc(20px+100*(40vw-100px)/1600),2rem)] font-medium leading-[1.2] text-white max-sm:mb-8 max-sm:text-[4.8vw]">
          I&#39;m a quick learner and eager to find out new things. I&#39;m
          never satisfied with mediocre. If I do something, I do it with
          perfection. Look below.
        </p>
      </div>
    </div>
  );
};
