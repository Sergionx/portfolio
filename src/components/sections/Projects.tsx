import { Pagination } from "@nextui-org/react";
import { ProjectCard } from "../Project-Card/Project-Card";
import { projects } from "../../data/projects";
import usePagination from "../../hooks/usePagination";

export default function Projects() {
  // TODO PRIORIDAD - Filtros de proyectos
  const { page, pages, setPage, items } = usePagination({
    data: projects,
    defaultRowsPerPage: 5,
  });
  // TODO - Manejar diferentes tamaños
  const projectsCard = items.map((project, index) => (
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

      {/* REVIEW - Considrar refactorizar esto y usar bento */}
      <div
        className="flex flex-wrap gap-6 justify-center mt-6 max-w-[140rem]
        px-1 xl:px-8"
      >
        {projectsCard}
      </div>

      <Pagination
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={setPage}
        className="mt-4"
      />
    </>
  );
}
