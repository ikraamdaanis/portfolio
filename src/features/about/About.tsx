import { Image } from "components/Image";
import { Pill } from "components/Pill";
import { Sophos } from "components/icons/Sophos";
import { TypeScript } from "components/icons/TypeScript";
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
        <p className="text-balance leading-8 text-textWhite">
          I'm a Software Engineer from London, UK. I'm currently working as a{" "}
          <Pill className="inline-flex items-center gap-1">
            <TypeScript className="size-4" />
            TypeScript
          </Pill>{" "}
          dev for{" "}
          <Pill className="inline-flex items-center gap-1">
            <Sophos className="text-[#005bc8]" />
            Sophos
          </Pill>
          . Coding is my passion, and I absolutely love what I do. Every day, I
          get to tackle new challenges and create impactful products that make a
          difference. It's been an incredible journey so far and I'm excited to
          see where my career takes me.
        </p>
      </article>
      <article className="my-8 flex flex-col gap-2">
        <h3 className="text-brand-400 font-semibold uppercase tracking-widest">
          Some side projects over the years
        </h3>
        <div className="columns-1 gap-4 sm:columns-1">
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/discourse-1.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/form-builder.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative mb-4 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/todoer-1.webp"
              alt="work"
              className="rounded-sm object-cover object-top sm:object-center"
            />
          </div>
        </div>
      </article>
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
