import { Pagination, Select, SelectItem } from "@heroui/react";
import { ProjectCard } from "../Project-Card/Project-Card";
import { projects } from "@/data/projects";
import usePagination from "@/hooks/usePagination";
import { useTranslation } from "react-i18next";

const rowsPerPageOptions = [
  { key: 5, label: "5" },
  { key: 10, label: "10" },
  { key: 15, label: "15" },
];

export default function Projects() {
  const { t } = useTranslation();
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


  return (
    <>
      <h2>{t("projects.title")}</h2>

      <p className="text-lg max-w-prose text mt-2">
        {t("projects.description")}
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
          label={t("projects.rowsPerPage")}
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
