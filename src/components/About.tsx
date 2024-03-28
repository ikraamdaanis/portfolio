import type { ReactNode } from "react";

/** Section where I talk about my story. */
export const About = () => {
  return (
    <section className="relative mx-auto mb-[8rem] mt-40 flex w-full max-w-screen-md flex-col justify-center px-4">
      <article>
        <h1 className="mb-8 text-balance text-2xl font-medium sm:text-3xl">
          I'm Ikraam - a{" "}
          <span className="text-brand-400">software engineer</span>
        </h1>
        <h3 className="text-brand-400 font-semibold uppercase tracking-widest">
          About Me
        </h3>
        <p className="text-balance leading-6 text-textWhite">
          I'm a Software Engineer from London, UK. I'm currently a working at a
          Security company as a TypeScript developer. I've been enjoyed my
          career so far and am looking forward to building impactful products
          for many years to come.
        </p>
      </article>
      <article className="my-8 flex flex-col gap-2">
        <h3 className="text-brand-400 font-semibold uppercase tracking-widest">
          Some side projects over the years
        </h3>
        <div className="columns-1 gap-4 sm:columns-1">
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
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
              src="/images/discourse-1.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
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
              src="/images/ultrastore-1.webp"
              alt="work"
              className="animate-moveRight rounded-sm object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
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
              src="/images/form-builder.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
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
              src="/images/todoer-1.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
        </div>
      </article>
      {/* <Content>
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
      </Content> */}
    </section>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mb-[4rem] text-[clamp(1.8rem,calc(20px+100*(40vw-100px)/1600),2.5rem)] font-medium text-textWhite">
      {children}
    </p>
  );
};
