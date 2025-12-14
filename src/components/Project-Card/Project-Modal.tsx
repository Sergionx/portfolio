import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import {
  Link,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  cn,
} from "@heroui/react";
import { useTranslation } from "react-i18next";

import { TechnologyList } from "./TechnologyList";
import { StarIcon } from "./Project-Card";

import type { Project } from "./Project-Card";

interface ProjectModalContentProps {
  project: Project;
  index: number;
  motionId: string;
}

export function ProjectModalContent({
  project,
  index,
  motionId,
}: ProjectModalContentProps) {
  const { t } = useTranslation();

  return (
    <ModalContent
      as={motion.section}
      className={cn(
        project.featured
          ? "border-[5px] border-transparent bg-origin-border bg-clip-padding-border bg-[linear-gradient(to_top_left,hsl(var(--heroui-tertiary-300)),hsl(var(--heroui-tertiary-100))),linear-gradient(to_right,hsl(var(--heroui-secondary-500)),hsl(var(--heroui-primary-600)))] dark:bg-[linear-gradient(to_top_left,hsl(var(--heroui-tertiary-800)),hsl(var(--heroui-tertiary-600))),linear-gradient(to_right,hsl(var(--heroui-secondary-500)),hsl(var(--heroui-primary-600)))]"
          : `bg-linear-to-tl from-tertiary-300 to-tertiary-100 dark:from-tertiary-800 dark:to-tertiary-600`
      )}
      {...{
        layoutId: motionId,
      }}
    >
      <ModalHeader className="flex flex-col gap-2">
        <span className="text-lg font-semibold flex items-center gap-3 text-primary-600 dark:text-primary-500">
          {t(project.name, { defaultValue: project.name })}
          {project.featured && <StarIcon index={index} />}
        </span>
        <span className="text-sm text-foreground/70">{t(project.date)}</span>
      </ModalHeader>
      <ModalBody className="flex flex-col gap-4">
        <p className="text-base leading-relaxed">{t(project.description)}</p>
        <TechnologyList technologies={project.technologies} variant="modal" />
      </ModalBody>
      <ModalFooter className="flex justify-between">
        <div className="flex gap-3">
          <Link
            isExternal
            href={project.url}
            className={cn(
              "text-primary-600 dark:text-primary-500 flex items-center gap-2 font-semibold",
              project.url ? "" : "pointer-events-none opacity-50"
            )}
            onClick={(e) => {
              if (!project.url) e.preventDefault();
            }}
          >
            <BiLinkExternal />
            {t("hero.portfolio", { defaultValue: "Live site" })}
          </Link>
          <Link
            isExternal
            href={project.githubUrl}
            className={cn(
              "text-primary-600 dark:text-primary-500 flex items-center gap-2 font-semibold",
              project.githubUrl ? "" : "pointer-events-none opacity-50"
            )}
            onClick={(e) => {
              if (!project.githubUrl) e.preventDefault();
            }}
          >
            <AiFillGithub />
            {t("hero.github")}
          </Link>
        </div>
      </ModalFooter>
    </ModalContent>
  );
}
