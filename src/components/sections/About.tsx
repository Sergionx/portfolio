import React from "react";

export default function About() {
  return (
    <>
      <h2>About Me</h2>

      <p className="text-lg font-medium max-w-prose ">
        Since 2020 I began my journey as a software engineer, at the present I
        am a{" "}
        <span className="font-bold text-gradient-color">
          fullstack developer
        </span>{" "}
        at the last year of my career (Systems Engineering).
      </p>

      <p className="text-lg font-medium  max-w-prose  mt-4 ">
        The past year I delivery at my past company web applications using
        principally React and Angular, and backend services using Firebase.
        <span className="font-bold text-gradient-color">
          {" "}
          Improving the workflow and the delivery time
        </span>{" "}
        of my team.
      </p>

      <p className="text-lg font-medium  max-w-prose  mt-4 ">
        As a programmer the 2 word that best defines me are{" "}
        <span className="font-bold text-gradient-color">adaptation</span> and
        <span className="font-bold text-gradient-color"> curiosity</span>. My
        goal is to learn something new every day, and I am always looking for
        new challenges to improve my skills.
      </p>
    </>
  );
}
