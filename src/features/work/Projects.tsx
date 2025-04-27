import { Title } from "components/Title";
import { ProjectItem } from "features/work/ProjectItem";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto flex min-h-screen max-w-screen-md flex-col justify-center px-4"
    >
      <Title title="My Projects" />
      {projects.map(project => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </section>
  );
}

export interface Project {
  title: string;
  description1: string;
  description2: string;
  list1: string[];
  list2: string[];
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
    list1: ["React.js", "Next.js", "Zustand", "React Query"],
    list2: ["Tailwind CSS", "PostgresSQL", "Prisma", "Bun"],
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
    list1: ["React.js", "Redux", "Firebase"],
    list2: ["React Router", "Styled Components"],
    repo: "https://github.com/ikraamdaanis/todoer",
    website: "https://todoer-app.netlify.app/",
    image1: "/portfolio/images/todoer-1.webp",
    image2: "/portfolio/images/todoer-2.webp"
  }
];
