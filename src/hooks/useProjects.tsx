import { Project } from "../components/Project-Card/Project-Card";

export default function useProjects() {
  const projects: Project[] = [
    {
      name: "ANDAR Investments",
      description:
        "Developed a landing page for a company that offers investment opportunities in the real estate market.",
      technologies: [
        "Next.js",
        "React",
        "Framer-Motion",
        "TypeScript",
        "TailwindCSS",
        "Firebase",
        "Shadcn",
        "Vite",
      ],
      url: "https://andarinvestments.com/",
      date: "November 2023 - January 2024",
      featured: true,
    },
    {
      name: "Chat Room System",
      description:
        "Leveraged Express and Socket.io to create a real time encrypted chat system using web sockets that can send text and images. The data storage of the rooms is handled by Redis",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Express",
        "Socket.io",
        "Redis",
        "Vite",
      ],
      url: "https://chat-socket-frontend-indol.vercel.app/",
      githubUrl: "https://github.com/Sergionx/Chat-socket",
      date: "September 2023 - October 2023",
    },
    {
      name: "ChatGPT implementation",
      description:
        "Integrated ChatGPT API on a web based chat system, using React, Tailwind and Firebase as a backend.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase", "Vite"],
      date: "April 2023 - May 2023",
    },
    {
      name: "Ticket Management System",
      description:
        "Tasked with developing the FAQ module. Managing the creation, editing and overall presentation of articles.",
      technologies: [
        "Angular",
        "TypeScript",
        "SASS",
        "TailwindCSS",
        "Firebase",
        "PrimeNG",
        "RxJS",
      ],
      date: "September 2022 - April 2023",
    },
    {
      name: "ERP System",
      description:
        "Tasked with refactoring several views and maintaining to separate modules within the whole ecosystem.",
      technologies: ["Angular", "TypeScript", "SASS", "Firebase", "RxJS"],
      date: "May 2023 - August 2023",
    },
    {
      name: "Wova",
      description:
        "Designed and developed a landing page for a modern architecture company.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase", "Vite"],
      url: "https://wova-87e6e.web.app/",
      githubUrl: "https://github.com/ValeriaZampetti/wova-studio/tree/main",
      date: "April 2023 - Jul 2023",
    },
    {
      name: "Psico Vivir",
      description: `Developed alongside a team of 5 people an app for doctors and patients to communicate and schedule appointments. 
        The app handles login, signup, profile management, appointments, filtering and more. It even has a chat system with real time updates!`,
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase", "Vite"],
      url: "https://psico-vivir.web.app/",
      githubUrl: "https://github.com/ValeriaZampetti/Psico-vivir",
      date: "January 2023 - March 2023",
    },
    {
      name: "Yummy Travel",
      description: `
        Developed a MVP in 24 hours for a hackathon. The app is a inter-urban travel planner that allows you to create a trip, add places to visit and share it with your friends.
      `,
      technologies: ["React", "TypeScript", "TailwindCSS", "Flowbite", "Vite"],
      url: "https://yummy-travel.web.app/",
      githubUrl: "https://github.com/Yummy-Travel/Yummy-Travel",
      date: "August  2023 - August  2023",
    },
  ];
  return { projects };
}
