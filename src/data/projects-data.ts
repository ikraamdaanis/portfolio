import discourse1 from "assets/images/discourse-1.webp";
import discourse2 from "assets/images/discourse-2.webp";
import todoer1 from "assets/images/todoer-1.webp";
import todoer2 from "assets/images/todoer-2.webp";
import type { ImageMetadata } from "astro";

type Technology = {
  name: string;
  icon?:
    | "nextjs"
    | "react-query"
    | "zustand"
    | "firebase"
    | "react-router"
    | "react"
    | "postgres"
    | "prisma"
    | "bun"
    | "tailwind"
    | "styled-components"
    | "redux"
    | "react-router"
    | "react-query"
    | "zustand"
    | "💅";
  bg?: string;
  text?: string;
  iconColor?: string;
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
      {
        name: "React.js",
        icon: "react",
        bg: "#0d1117",
        text: "#FFFFFF",
        iconColor: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: "nextjs",
        bg: "#000",
        text: "#fff",
        iconColor: "#333"
      },
      {
        name: "Zustand",
        icon: "zustand",
        bg: "#1a1511",
        text: "#FFFFFF",
        iconColor: "#8B7355"
      },
      {
        name: "React Query",
        icon: "react-query",
        bg: "#3f1316",
        text: "#FFFFFF",
        iconColor: "#FF4154"
      }
    ],
    list2: [
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        bg: "#0b1e26",
        text: "#FFFFFF",
        iconColor: "#06B6D4"
      },
      {
        name: "PostgresSQL",
        icon: "postgres",
        bg: "#0d1426",
        text: "#FFFFFF",
        iconColor: "#4169E1"
      },
      {
        name: "Prisma",
        icon: "prisma",
        bg: "#0d1117",
        text: "#FFFFFF",
        iconColor: "#FFFFFF"
      },
      {
        name: "Bun",
        icon: "bun",
        bg: "#2e2a24",
        text: "#FFFFFF",
        iconColor: "#FBF0DF"
      }
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
      {
        name: "React.js",
        icon: "react",
        bg: "#0d1117",
        text: "#FFFFFF",
        iconColor: "#61DAFB"
      },
      {
        name: "Redux",
        icon: "redux",
        bg: "#1a0e26",
        text: "#FFFFFF",
        iconColor: "#764ABC"
      },
      {
        name: "Firebase",
        icon: "firebase",
        bg: "#350c02",
        text: "#FFFFFF",
        iconColor: "#FFCA28"
      }
    ],
    list2: [
      {
        name: "React Router",
        icon: "react-router",
        bg: "#260d0f",
        text: "#FFFFFF",
        iconColor: "#CA4245"
      },
      {
        name: "Styled Components",
        icon: "💅",
        bg: "#291520",
        text: "#FFFFFF",
        iconColor: "#DB7093"
      }
    ],
    repo: "https://github.com/ikraamdaanis/todoer",
    website: "https://todoer-app.netlify.app/",
    image1: todoer1,
    image2: todoer2
  }
];
