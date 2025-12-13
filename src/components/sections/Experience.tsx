import { useTranslation } from "react-i18next";

import { experiences } from "@/data/experiences";
import useExpandOverflow from "@/hooks/use-expand-overflow";
import { Button, cn } from "@heroui/react";

interface Experience {
  title: string;
  company: string;
  time: string;
  description: string;
}

export default function Experience() {
  const { t } = useTranslation();

  const { expandedItems, setExpandedItems, overflowingItems, descriptionRefs } =
    useExpandOverflow();

  const experiencesList = experiences.map((experience, index) => (
    <li className="ml-4" key={index}>
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {t(experience.time)}
      </time>

      <h3 className="text-lg font-semibold  mb-2">{t(experience.title)}</h3>

      <ExperienceDescription
        description={t(experience.description)}
        isExpanded={expandedItems[index]}
        isOverflowing={overflowingItems[index]}
        onToggle={() =>
          setExpandedItems((prev) => ({
            ...prev,
            [index]: !expandedItems[index],
          }))
        }
        ref={(el) => {
          descriptionRefs.current[index] = el;
        }}
      />
    </li>
  ));

  return (
    <>
      <h2>{t("experience.title")}</h2>

      <ol
        className="relative border-l border-gray-400 dark:border-gray-700
          flex flex-col gap-10"
      >
        {experiencesList}
      </ol>
    </>
  );
}

interface ExperienceDescriptionProps {
  description: string;
  isExpanded: boolean;
  isOverflowing: boolean;
  onToggle: () => void;
  ref: (el: HTMLParagraphElement | null) => void;
}
function ExperienceDescription({
  description,
  isExpanded,
  isOverflowing,
  onToggle,
  ref,
}: ExperienceDescriptionProps) {
  const { t } = useTranslation();

  return (
    <>
      <p
        ref={ref}
        className={cn(
          "mb-2 text-gray-800 dark:text-gray-400 max-w-prose text-balance whitespace-pre-line",
          !isExpanded && "line-clamp-4"
        )}
      >
        {description}
      </p>
      {isOverflowing && (
        <Button
          type="button"
          variant="light"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          onPress={onToggle}
        >
          {isExpanded ? t("experience.showLess") : t("experience.showMore")}
        </Button>
      )}
    </>
  );
}
