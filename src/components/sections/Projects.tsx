import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      name: "Proyecto 1",
      description:
        "My Awesome Project is a web application that allows users to create and share their own custom playlists. With a sleek and intuitive user interface, users can easily search for and add songs to their playlists, reorder their playlists, and share their playlists with others. The application also includes a social feature that allows users to follow other users and discover new playlists. My Awesome Project is built using React, TypeScript, and Firebase, and is designed to be responsive and accessible on all devices. Whether you're a music lover looking to create the perfect playlist, or just looking for some new music to discover, My Awesome Project has you covered!",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Firebase",
        "Vite",
        "Mooook",
      ],
      url: "https://www.google.com",
      githubUrl: "https://www.yahoo.com",
      date: "2021-09-01",
    },
  ];

  const projectsCard = projects.map((project, index) => (
    <article
      className="bg-blue-100 dark:bg-blue-900 transition-all duration-300
      hover:bg-blue-100 dark:hover:bg-blue-900/90 hover:scale-105 group
        max-w-lg w-full p-4 rounded-md shadow-md relative flex flex-col"
      key={index}
    >
      <a
        className="flex items-center gap-4 text-primary-600 dark:text-primary-500"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <h6 className="font-semibold group-hover:font-bold">{project.name}</h6>{" "}
        <BiLinkExternal size={18} className="inline-block" />
      </a>

      <span className="text-normal-black/80 dark:text-normal-white/70 mt-2">
        {project.date}
      </span>

      <p className="font-medium mt-4 max-w-prose break-words w-full">
        {project.description}
      </p>

      <ul className="flex flex-wrap items-center gap-2 font-bold text-sm mt-4 pr-10 ">
        {project.technologies.map((technology) => (
          <li className="bg-tertiary-300 text-tertiary-800 py-1 px-3 rounded-xl">
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
        <AiFillGithub size={32} />
      </a>
    </article>
  ));

  return <div className="flex">{projectsCard}</div>;
}
