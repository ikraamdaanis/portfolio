import { Title } from "components/Title";

/** Section where I talk about my story. */
export const About2 = () => {
  const paragraphStyles =
    "mb-12 font-medium leading-tight text-textWhite text-lg sm:text-2xl md:text-3xl";

  return (
    <section
      id="about"
      className="container relative mx-auto mb-32 max-w-[420px] px-4 max-sm:mb-0 sm:max-w-screen-md"
    >
      <Title title="About Me" />
      <article className="prose prose-invert max-w-none">
        <div className="space-y-16 max-sm:space-y-8">
          <div>
            <h2 className="sr-only">My Background</h2>
            <p className={paragraphStyles}>
              I'm a Software Engineer from London, UK. I'm currently working as
              developer for a small startup. Coding is my passion, and I
              absolutely love what I do. Every day, I get to tackle new
              challenges and create impactful products that make a difference.
              It's been an incredible journey so far and I'm excited to see
              where my career takes me.
            </p>
          </div>
          <div>
            <h2 className="sr-only">Technical Experience</h2>
            <p className={paragraphStyles}>
              After a few years in the industry, I've built several full-stack
              applications used by hundreds of thousands of customers. I enjoy
              building web apps that are impactful and valuable to our
              customers. These days I focus a lot on writing clean code that's
              easy to maintain and making sure everything performs well.
            </p>
          </div>
          <div>
            <h2 className="sr-only">Work Approach</h2>
            <p className={paragraphStyles}>
              I love working with other developers and sharing what I know. The
              tech world keeps changing and that's what makes it exciting -
              there's always something new to learn and better ways to solve
              problems. When I build something, I make sure it's done right,
              with perfection.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
