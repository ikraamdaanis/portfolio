import discourse1 from "assets/images/discourse-1.webp";
import discourse2 from "assets/images/discourse-2.webp";
import todoer1 from "assets/images/todoer-1.webp";
import todoer2 from "assets/images/todoer-2.webp";
import type { ImageMetadata } from "astro";
import type { SimpleIcon } from "simple-icons";
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

type Technology = {
  name: string;
  icon?: SimpleIcon | "zustand";
};

export type Project = {
  title: string;
  description1: string;
  description2: string;
  list1: Technology[];
  list2: Technology[];
  repo: string;
  website: string;
  image1: ImageMetadata;
  image2: ImageMetadata;
};

export const projects: Project[] = [
  {
    title: "Discourse",
    description1:
      "Discourse is instant-messaging web-application. It aims to replicate some of the core features and functionality of the popular chat platform, Discord. It's a full-stack application with a Next.js frontend and a Bun backend to handle web-sockets.",
    description2:
      "It has several features such as real-time chat, voice and video calls, and the ability to create and join servers. Servers can have multiple channels and users can send messages in real-time. Admins can set up roles and permissions for users.",
    list1: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Zustand", icon: "zustand" },
      { name: "React Query", icon: siReactquery }
    ],
    list2: [
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "PostgresSQL", icon: siPostgresql },
      { name: "Prisma", icon: siPrisma },
      { name: "Bun", icon: siBun }
    ],
    repo: "https://github.com/ikraamdaanis/discourse",
    website: "https://discourseapp.vercel.app/",
    image1: discourse1,
    image2: discourse2
  },
  {
    title: "Todoer",
    description1:
      "Todoer is a clone of the task managing app Todoist. It's used to create projects to organize your daily tasks. You can create an account using your email and password or Google Sign In. I've used Firebase Firestore for the backend which stores user information and data.",
    description2:
      "I have implemented create, read, update and delete features for the tasks. They can be sorted by the due date and alphabetically. All tasks can be updated and completed and entire projects can be deleted. I also cloned the Todoist home screen for the landing page.",
    list1: [
      { name: "React.js", icon: siReact },
      { name: "Redux", icon: siRedux },
      { name: "Firebase", icon: siFirebase }
    ],
    list2: [
      { name: "React Router", icon: siReactrouter },
      { name: "Styled Components", icon: siStyledcomponents }
    ],
    repo: "https://github.com/ikraamdaanis/todoer",
    website: "https://todoer-app.netlify.app/",
    image1: todoer1,
    image2: todoer2
  }
];
