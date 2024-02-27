import { AiFillLock, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { cn } from "../utils/classnames";
import { IconType } from "react-icons";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  date: string;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const linkIcon: IconType = project.githubUrl ? AiFillLock : BiLinkExternal;

  return (
    <div key={index}>
      <Tooltip
        id={"private" + index}
        place="bottom"
        content="This is a private repository"
        className="z-50"
        clickable={true}
      />

      <article
        className="bg-gradient-to-tl  from-tertiary-300 to-tertiary-100 
      dark:from-tertiary-800 dark:to-tertiary-600
      transition-transform duration-300 ease-in-out 
    hover:bg-blue-100 dark:hover:bg-blue-900/90 hover:scale-105 group
      max-w-md w-full p-4 rounded-md shadow-md relative flex flex-col"
      >
        <BsFillBuildingFill
          size={18}
          data-tooltip-id={"private" + index}
          className={cn(
            "absolute top-4 right-4 text-normal-black/80 dark:text-normal-white/70",
            project.githubUrl ? "hidden" : "block"
          )}
        />

        <a
          className="flex items-center gap-4 text-primary-600 dark:text-primary-500 pr-8"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="font-semibold group-hover:font-bold">
            {project.name}
          </h6>{" "}
          
          <AiFillLock
            size={18}
            className={cn(
              "shrink-0 active:animate-shake",
              project.githubUrl ? "hidden" : "block"
            )}
          />
          <BiLinkExternal
            size={18}
            className={cn("shrink-0", project.githubUrl ? "block" : "hidden")}
          />
        </a>

        <time className="text-normal-black/80 dark:text-normal-white/70 mt-2">
          {project.date}
        </time>

        <p
          className="font-medium my-4 break-words line-clamp-3 selection:gradient 
        selection:bg-primary-400 dark:selection:bg-primary-700"
        >
          {project.description}
        </p>

        <TechonologyList technologies={project.technologies} />

        <a
          className="cursor-pointer hover:text-primary-400 dark:hover:text-primary-700 shrink-0
      absolute right-4 bottom-4"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          {/* TODO - Tooltip Private respository */}
          <AiFillLock
            size={32}
            data-tooltip-id={"private" + index}
            className={cn(
              "active:animate-shake outline-none",
              project.githubUrl ? "hidden" : "block"
            )}
          />
          <AiFillGithub
            size={32}
            className={project.githubUrl ? "block" : "hidden"}
          />
        </a>
      </article>
    </div>
  );
}

function TechonologyList({ technologies }: { technologies: string[] }) {
  return (
    <ul
      className="flex flex-wrap items-center gap-2 font-bold text-sm mt-auto pr-5
        overflow-hidden max-h-16 scrollbar-hide"
    >
      {technologies.map((technology, techIndex) => (
        <li
          className="bg-tertiary-300 text-tertiary-800 py-1 px-3 rounded-xl"
          key={techIndex}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
