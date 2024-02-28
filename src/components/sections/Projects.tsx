import useProjects from "../../hooks/useProjects";
import { ProjectCard } from "../Project-Card/Project-Card";

export default function Projects() {
  // TODO PRIORIDAD - Filtros de proyectos
  // TODO PRIORIDAD - Pagination de proyectos

  const { projects } = useProjects();

  // TODO - Manejar diferentes tamaños
  const projectsCard = projects.map((project, index) => (
    <ProjectCard project={project} index={index} key={index} />
  ));

  return (
    <>
      <h2>Projects</h2>

      <p className="text-lg max-w-prose text mt-2">
        Here are some of the projects I've worked on recently. Keep In mind that
        some projects are not public for compoany security reasons. I'm always
        working on something new, so check back soon for updates!
      </p>

      <div className="flex flex-wrap gap-6 justify-center mt-6 max-w-[140rem]">
        {projectsCard}
      </div>
    </>
  );
}
