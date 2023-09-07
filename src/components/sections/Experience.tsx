import React from "react";

interface Experience {
  title: string;
  company: string;
  time: string;
  description: string;
}

export default function Experience() {
  const experiences = [
    {
      title: "Yummy Codicon",
      company: "Yummy",
      time: "August 2023",
      description: `Selected to compete at a 50 people hackathon to
        deliver a solution to an existent problem in a app. The teams were
        formed by 5 people and we had 24 hours to deliver a solution. Our team
        idea was to improve the user experience of Yummy Rides (a rideshare app)
        by focusing in the inter-urban travels where the prices can go up to 200$.
        We developed a system that allows to book a seat in a bus, plane or a individual 
        car and provide which one is the best economic option 
      `,
    },
    {
      title: "FullStack Developer at Aether Solutions",
      company: "Aether Solutions",
      time: "September 2023",
      description: `My responsabilities were to help any new or ongoing
        project in multiple areas. The work methodology was
        team based and I participated in 3 different groups
        and projects. We used technologies such as Angular,
        Tailwind, or Firebase and tools like Trello and Git
        based repository for organization.`,
    },
    {
      title: "Self-learning",
      company: "",
      time: "September 2022",
      description: `My focus was to learn the bases of web development and
        design. I learned HTML, CSS, JavaScript, React, and
        Tailwind. I also learned how to integrate the frontend
        with the backend using Express and MongoDB.`,
    },
  ];

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
