import type { ReactNode } from "react";

/** Section where I talk about my story. */
export const About = () => {
  return (
    <section className="relative mx-auto mb-[8rem] mt-0 flex w-[1280px] max-w-[85%] flex-col justify-center">
      <Content>
        Learning to code has been a tough journey. With the help of{" "}
        <a
          href="https://www.youtube.com/channel/UCSKr_gILoWAETdYpAoCxB0w/channels?view=56&shelf_id=0"
          target="blank"
          rel="noreferrer"
          className="hover:text-textWhite text-lightPink rounded-lg font-medium leading-[1.2] transition-all hover:bg-[#ff0000] hover:px-2 hover:py-[2px]"
        >
          developers on YouTube,
        </a>{" "}
        I have learnt web development from scratch. I remember once being
        overwhelmed by HTML and SCSS, now I&#39;m creating this website in React
        and TypeScript.
      </Content>
      <Content>
        Through YouTube, Udemy, Scrimba, and other resources, I have learnt
        several technologies. HTML, CSS, SCSS, Styled Components, JavaScript,
        ES6+, React, Redux, NodeJs, Express and MongoDB, just to name a few.
      </Content>
      <Content>
        I&#39;m a quick learner and eager to find out new things. I&#39;m never
        satisfied with mediocre. If I do something, I do it with perfection.
        Look below.
      </Content>
    </section>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-textWhite mb-[4rem] text-[clamp(1.8rem,calc(20px+100*(40vw-100px)/1600),2.5rem)] font-medium">
      {children}
    </p>
  );
};
