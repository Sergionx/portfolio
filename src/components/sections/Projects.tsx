import { Pagination, Select, SelectItem } from "@heroui/react";
import { ProjectCard } from "../Project-Card/Project-Card";
import { projects } from "../../data/projects";
import usePagination from "../../hooks/usePagination";

const rowsPerPageOptions = [
  { key: 5, label: "5" },
  { key: 10, label: "10" },
  { key: 15, label: "15" },
];

export default function Projects() {
  // TODO PRIORIDAD - Filtros de proyectos

  const { page, pages, setPage, rowsPerPage, setRowsPerPage, items } =
    usePagination({
      data: projects,
      defaultRowsPerPage: 5,
    });
    
  // TODO - Click lo abre con framer motion
  const projectsCard = items.map((project, index) => (
    <ProjectCard project={project} index={index} key={index} />
  ));

  console.log({ rowsPerPage });

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
        className="flex flex-wrap gap-6 justify-center mt-6 max-w-560
        px-1 xl:px-8"
      >
        {projectsCard}
      </div>

      <footer className="mt-4 flex flex-row flex-wrap w-full justify-around gap-4">
        <Select
          labelPlacement="outside-left"
          label="Rows per page"
          classNames={{
            label: "w-32",
            trigger: "w-20",
          }}
          className="w-fit"
          selectedKeys={[rowsPerPage.toString()]}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          {rowsPerPageOptions.map((rows) => (
            <SelectItem key={rows.key}>{rows.label}</SelectItem>
          ))}
        </Select>

        <Pagination
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </footer>
    </>
  );
}
