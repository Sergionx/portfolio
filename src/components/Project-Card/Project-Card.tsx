import { AiFillLock, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillBuildingFill, BsStar } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { cn } from "../../utils/classnames";
import "./Project-Card.css";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  date: string;
  featured?: boolean;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div key={index}>
      <Tooltip
        id={"private" + index}
        place="bottom"
        content="This is a private repository"
        className="z-50"
        clickable={true}
      />

      {project.featured && (
        <Tooltip
          id={"featured" + index}
          place="bottom"
          content="This is one of my best projects!"
          className="z-50"
          clickable={true}
        />
      )}

      <article
        className={cn(
          `transition-transform duration-300 ease-in-out h-full
      hover:bg-blue-100 dark:hover:bg-blue-900/90 hover:scale-105 group
        max-w-md w-full p-4 rounded-md shadow-md relative flex flex-col`,
          project.featured
            ? "card-featured"
            : ` bg-gradient-to-tl from-tertiary-300 to-tertiary-100 
        dark:from-tertiary-800 dark:to-tertiary-600 `
        )}
      >
        <div className="absolute top-4 right-4">
          {/* <BsFillBuildingFill
            size={18}
            data-tooltip-id={"private" + index}
            className={cn(
              "absolute top-4 right-4 text-normal-black/80 dark:text-normal-white/70",
              project.githubUrl ? "hidden" : "block"
            )}
          /> */}
          {project.featured && <StarIcon index={index} />}
        </div>

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
              project.url ? "hidden" : "block"
            )}
          />
          <BiLinkExternal
            size={18}
            className={cn("shrink-0", project.url ? "block" : "hidden")}
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
  // TODO - Add ellipsis when the list is too long
  return (
    <ul
      className="flex flex-wrap items-center gap-2 font-bold text-sm mt-auto pr-8
      "
      // overflow-hidden max-h-16 
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

// TODO - Add sparkles on hover
function StarIcon({ index }: { index: number }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        data-tooltip-id={"featured" + index}
        className="fill-[url(#gradient)] dark:fill-[url(#gradient-dark)]  outline-none"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" x2="50%" y1="10%" y2="100%">
            {/* fee389 */}
            <stop offset="0%" stopColor="#d82a2a" />
            <stop offset="100%" stopColor="#db6f04" />
          </linearGradient>

          <linearGradient
            id="gradient-dark"
            x1="50%"
            x2="50%"
            y1="10%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#faa7a7" />
            <stop offset="100%" stopColor="#f79609" />
          </linearGradient>
        </defs>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    </>
  );
}
