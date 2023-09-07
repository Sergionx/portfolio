import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillLock } from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  date: string;
}

export default function Projects() {
  // TODO PRIORIDAD - Filtros de proyectos
  // TODO PRIORIDAD - Pagination de proyectos
  // TODO - Add psicovivir
  // TODO - Add Yummy

  const projects: Project[] = [
    {
      name: "ChatGPT implementation",
      description:
        "Integrated ChatGPT API on a web based chat system, using React, Tailwind and Firebase as a backend.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase", "Vite"],
      date: "April 2023 - May 2023",
    },
    {
      name: "Ticket Management System",
      description:
        "Tasked with developing the FAQ module. Managing the creation, editing and overall presentation of articles.",
      technologies: [
        "Angular",
        "TypeScript",
        "SASS",
        "TailwindCSS",
        "Firebase",
        "PrimeNG",
        "RxJS",
      ],
      date: "September 2022 - April 2023",
    },
    {
      name: "ERP System",
      description:
        "Tasked with refactoring several views and maintaining to separate modules within the whole ecosystem.",
      technologies: ["Angular", "TypeScript", "SASS", "Firebase", "RxJS"],
      date: "May 2023 - August 2023",
    },
    {
      name: "Wova",
      description:
        "Designed and developed a landing page for a modern architecture company.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase", "Vite"],
      url: "https://wova-87e6e.web.app/",
      githubUrl: "https://github.com/ValeriaZampetti/wova-studio/tree/main",
      date: "April 2023 - Jul 2023",
    },
  ];

  const projectsCard = projects.map((project, index) => (
    <div key={index}>
      <Tooltip
        id={"private" + index}
        place="bottom"
        content="This is a private repository"
        className="z-50"
        clickable={true}
      />

      <article
        className="bg-gradient-to-tl from-tertiary-300 to-tertiary-100 
        dark:from-tertiary-800 dark:to-tertiary-600
        transition-all duration-300
      hover:bg-blue-100 dark:hover:bg-blue-900/90 hover:scale-105 group
        max-w-md w-full p-4 rounded-md shadow-md relative flex flex-col"
      >
        <BsFillBuildingFill
          size={18}
          data-tooltip-id={"private" + index}
          className={`absolute top-4 right-4 text-normal-black/80 dark:text-normal-white/70
        ${project.githubUrl ? "hidden" : "block"}`}
        />

        <a
          className="flex  items-center gap-4 text-primary-600 dark:text-primary-500 pr-8"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="font-semibold group-hover:font-bold">
            {project.name}
          </h6>{" "}
          <AiFillLock
            size={18}
            className={`shrink-0 ${
              project.githubUrl ? "hidden" : "block"
            } active:animate-shake`}
          />
          <BiLinkExternal
            size={18}
            className={`shrink-0 ${project.githubUrl ? "block" : "hidden"}`}
          />
        </a>

        <time className="text-normal-black/80 dark:text-normal-white/70 mt-2">
          {project.date}
        </time>

        <p className="font-medium mt-4 break-words w-full ">
          {project.description}
        </p>

        <ul className="flex flex-wrap items-center gap-2 font-bold text-sm mt-4 pr-10 ">
          {project.technologies.map((technology, techIndex) => (
            <li
              className="bg-tertiary-300 text-tertiary-800 py-1 px-3 rounded-xl"
              key={techIndex}
            >
              {technology}
            </li>
          ))}
        </ul>

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
            className={`${
              project.githubUrl ? "hidden" : "block"
            } active:animate-shake outline-none`}
          />
          <AiFillGithub
            size={32}
            className={`${project.githubUrl ? "block" : "hidden"}`}
          />
        </a>
      </article>
    </div>
  ));

  return (
    <>
      <h2>Projects</h2>

      <p className="text-lg max-w-prose text mt-2">
        Here are some of the projects I've worked on recently. Keep In mind that
        some projects are not public for compoany security reasons. I'm always
        working on something new, so check back soon for updates!
      </p>

      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {projectsCard}
      </div>
    </>
  );
}
