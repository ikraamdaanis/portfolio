import { ImageViewer } from "@/components/image-viewer";
import type { Project } from "@/features/work/projects";

export function ProjectItem({
  project: {
    title,
    description1,
    description2,
    list1,
    list2,
    repo,
    website,
    image1
  }
}: {
  project: Project;
}) {
  return (
    <article>
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="relative mt-2 mb-4 aspect-[16/10] overflow-hidden rounded-[2px]">
        <div className="absolute h-full w-full animate-pulse bg-neutral-200" />
        <ImageViewer src={image1} alt={`${title} screenshot 1`} />
      </div>
      <p className="text-text-size mb-3">{description1}</p>
      <p className="text-text-size mb-3">{description2}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {[...list1, ...list2].map(tech => (
          <span
            key={tech.name}
            className="flex items-center gap-1.5 rounded-md bg-neutral-100 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {tech.icon && (
              <span className="flex items-center justify-center">
                {tech.icon}
              </span>
            )}
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href={repo}
          rel="noreferrer"
          target="_blank"
          className="text-neutral-700 underline hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
        >
          GitHub
        </a>
        {website && (
          <a
            href={website}
            rel="noreferrer"
            target="_blank"
            className="text-neutral-700 underline hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
