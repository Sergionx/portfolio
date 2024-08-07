import { experiences } from "../../data/experiences";

interface Experience {
  title: string;
  company: string;
  time: string;
  description: string;
}

export default function Experience() {
  const experiencesList = experiences.map((experience, index) => (
    <li className="ml-4" key={index}>
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {experience.time}
      </time>

      <h3 className="text-lg font-semibold  mb-2">{experience.title}</h3>

      <p className="mb-4 last:mb-0 text-gray-800 dark:text-gray-400 max-w-prose [text-wrap:balance]">
        {experience.description}
      </p>
      {/* TODO - Considerar poner boton de la empresa */}

      {/* <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Learn more{" "}
        <svg
          className="w-3 h-3 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a> */}
    </li>
  ));

  return (
    <>
      <h2>Experience</h2>

      <ol
        className="relative border-l border-gray-400 dark:border-gray-700
          flex flex-col gap-10"
      >
        {experiencesList}
      </ol>
    </>
  );
}
