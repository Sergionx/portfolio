import { useMemo } from "react";
import { AiFillLock, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { Modal, cn } from "@heroui/react";
import { ProjectModalContent } from "./Project-Modal";
import { TechnologyList } from "./TechnologyList";

import { useBoolean } from "@/hooks/shadcn.io/use-boolean";

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
  const { t } = useTranslation();
  const numberIcons =
    (Number(!project.githubUrl) || 0) + (Number(project.featured) || 0);

  const motionId = useMemo(() => `project-card-${index}`, [index]);

  const {
    value: isOpen,
    setTrue: openModal,
    setValue: setIsOpen,
  } = useBoolean();

  return (
    <div key={index}>
      <Tooltip
        id={"private" + index}
        place="bottom"
        content={t("projects.tooltips.private")}
        className="z-50"
        clickable={true}
      />

      {project.featured && (
        <Tooltip
          id={"featured" + index}
          place="bottom"
          content={t("projects.tooltips.featured")}
          className="z-50"
          clickable={true}
        />
      )}

      <motion.article
        layoutId={motionId}
        onClick={openModal}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        className={cn(
          `transition-transform duration-300 ease-in-out h-full cursor-pointer
          max-w-md w-full p-4 rounded-md shadow-md relative flex flex-col`,
          isOpen && "z-1",
          project.featured
            ? "border-[5px] border-transparent bg-origin-border bg-clip-padding-border bg-[linear-gradient(to_top_left,hsl(var(--heroui-tertiary-300)),hsl(var(--heroui-tertiary-100))),linear-gradient(to_right,hsl(var(--heroui-secondary-500)),hsl(var(--heroui-primary-600)))] dark:bg-[linear-gradient(to_top_left,hsl(var(--heroui-tertiary-800)),hsl(var(--heroui-tertiary-600))),linear-gradient(to_right,hsl(var(--heroui-secondary-500)),hsl(var(--heroui-primary-600)))]"
            : "bg-linear-to-tl from-tertiary-300 to-tertiary-100 dark:from-tertiary-800 dark:to-tertiary-600"
        )}
        // transition={{ z: 10000, zIndex: 10000 }}
      >
        <CornerIcons project={project} index={index} />

        <TitleLink project={project} numberIcons={numberIcons} />

        <time className="text-foreground/80 mt-2">{t(project.date)}</time>

        <p
          className="font-medium my-4 wrap-break-word line-clamp-3 selection:gradient 
        selection:bg-primary-400 dark:selection:bg-primary-700"
        >
          {t(project.description)}
        </p>

        <TechnologyList technologies={project.technologies} variant="card" />

        <a
          className="cursor-pointer hover:text-primary-400 dark:hover:text-primary-700 shrink-0
            absolute right-2 bottom-2 p-2"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          data-tooltip-id={!project.githubUrl ? "private" + index : ""}
          onClick={(e) => e.stopPropagation()}
        >
          <AiFillLock
            size={32}
            className={cn(
              "active:animate-shake outline-hidden",
              project.githubUrl ? "hidden" : "block"
            )}
            aria-label={t("projects.tooltips.private")}
          />
          <AiFillGithub
            size={32}
            className={project.githubUrl ? "block" : "hidden"}
            aria-label={t("hero.github")}
          />
        </a>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            size="3xl"
            backdrop="blur"
            placement="center"
            classNames={{ wrapper: "max-sm:pr-4" }}
            motionProps={{
              variants: {
                enter: {
                  opacity: 1,
                  scale: 1,
                  y: 0,

                  transition: { duration: 0.25 },
                },
                exit: {
                  opacity: 0,
                  scale: 0.95,
                  y: 8,
                  transition: { duration: 0.2 },
                },
              },
            }}
          >
            <ProjectModalContent
              project={project}
              index={index}
              motionId={motionId}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

function CornerIcons({ project, index }: { project: Project; index: number }) {
  return (
    <div className="absolute top-4 right-4 flex gap-4">
      <BsFillBuildingFill
        size={18}
        data-tooltip-id={"private" + index}
        className={cn(
          "text-foreground/80",
          project.githubUrl ? "hidden" : "block"
        )}
      />
      {project.featured && <StarIcon index={index} />}
    </div>
  );
}

function TitleLink({
  project,
  numberIcons,
}: {
  project: Project;
  numberIcons: number;
}) {
  const { t } = useTranslation();

  return (
    <a
      className={cn(
        "flex items-center gap-4 text-primary-600 dark:text-primary-500 "
      )}
      style={{ paddingRight: `${16 + numberIcons * 24}px` }}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="font-semibold text-balance max-w-52">{t(project.name, { defaultValue: project.name })}</span>{" "}
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
  );
}

// TODO - Add sparkles on hover
export function StarIcon({ index }: { index: number }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        data-tooltip-id={"featured" + index}
        className="fill-[url(#gradient)] dark:fill-[url(#gradient-dark)]  outline-hidden"
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
