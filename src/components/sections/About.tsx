import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("about.title")}</h2>

      <p className="text-lg font-medium max-w-prose ">
        <Trans i18nKey="about.p1">
          Since 2020 I began my journey as a software engineer, in the present I
          am a
          <span className="font-bold text-gradient-color">
            fullstack developer
          </span>{" "}
          at the last year of my career (Systems Engineering).
        </Trans>
      </p>

      <p className="text-lg font-medium  max-w-prose  mt-4 ">
        <Trans i18nKey="about.p2">
          The past year I delivered at my past company web applications using
          React and Angular, and backend services using Firebase.
          <span className="font-bold text-gradient-color">
            {" "}
            Improving the workflow and the delivery time
          </span>{" "}
          of my team.
        </Trans>
      </p>

      <p className="text-lg font-medium  max-w-prose  mt-4 ">
        <Trans i18nKey="about.p3">
          As a programmer, the 2 words that best defines me are
          <span className="font-bold text-gradient-color">adaptation</span>
          <span className="font-bold text-gradient-color"> curiosity</span>. My
          goal is to learn something new every day, and I am always looking for
          new challenges to improve my skills.
        </Trans>
      </p>
    </>
  );
}
