import { SimpleIcon } from "components/icons/simple-icon";
import { Zustand } from "components/icons/zustand";
import { ProjectItem } from "features/work/ProjectItem";
import type { ReactNode } from "react";
import {
  siBun,
  siFirebase,
  siNextdotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siReactrouter,
  siRedux,
  siStyledcomponents,
  siTailwindcss
} from "simple-icons";

export function Projects() {
  return (
    <section className="mx-auto max-w-2xl px-4 pb-24">
      <h2 className="mb-8 text-2xl font-medium text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map(project => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export interface Technology {
  name: string;
  icon?: ReactNode;
}

export interface Project {
  title: string;
  description1: string;
  description2: string;
  list1: Technology[];
  list2: Technology[];
  repo: string;
  website: string;
  image1: string;
  image2: string;
}

export const projects: Project[] = [
  {
    title: "Discourse",
    description1:
      "Discourse is instant-messaging web-application. It aims to replicate some of the core features and functionality of the popular chat platform, Discord. It's a full-stack application with a Next.js frontend and a Bun backend to handle web-sockets.",
    description2:
      "It has several features such as real-time chat, voice and video calls, and the ability to create and join servers. Servers can have multiple channels and users can send messages in real-time. Admins can set up roles and permissions for users.",
    list1: [
      { name: "React.js", icon: <SimpleIcon icon={siReact} /> },
      { name: "Next.js", icon: <SimpleIcon icon={siNextdotjs} /> },
      { name: "Zustand", icon: <Zustand className="size-[15px] grayscale" /> },
      { name: "React Query", icon: <SimpleIcon icon={siReactquery} /> }
    ],
    list2: [
      { name: "Tailwind CSS", icon: <SimpleIcon icon={siTailwindcss} /> },
      { name: "PostgresSQL", icon: <SimpleIcon icon={siPostgresql} /> },
      { name: "Prisma", icon: <SimpleIcon icon={siPrisma} /> },
      { name: "Bun", icon: <SimpleIcon icon={siBun} /> }
    ],
    repo: "https://github.com/ikraamdaanis/discourse",
    website: "https://discourseapp.vercel.app/",
    image1: "/portfolio/images/discourse-1.webp",
    image2: "/portfolio/images/discourse-2.webp"
  },
  {
    title: "Todoer",
    description1:
      "Todoer is a clone of the task managing app Todoist. It's used to create projects to organize your daily tasks. You can create an account using your email and password or Google Sign In. I've used Firebase Firestore for the backend which stores user information and data.",
    description2:
      "I have implemented create, read, update and delete features for the tasks. They can be sorted by the due date and alphabetically. All tasks can be updated and completed and entire projects can be deleted. I also cloned the Todoist home screen for the landing page.",
    list1: [
      { name: "React.js", icon: <SimpleIcon icon={siReact} /> },
      { name: "Redux", icon: <SimpleIcon icon={siRedux} /> },
      { name: "Firebase", icon: <SimpleIcon icon={siFirebase} /> }
    ],
    list2: [
      { name: "React Router", icon: <SimpleIcon icon={siReactrouter} /> },
      {
        name: "Styled Components",
        icon: <SimpleIcon icon={siStyledcomponents} />
      }
    ],
    repo: "https://github.com/ikraamdaanis/todoer",
    website: "https://todoer-app.netlify.app/",
    image1: "/portfolio/images/todoer-1.webp",
    image2: "/portfolio/images/todoer-2.webp"
  }
];
