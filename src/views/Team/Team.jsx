import React, { useEffect } from "react";
import Employees from "@components/molecules/Employees/Employees";
import WelcomePage from "@components/molecules/WelcomePage/WelcomePage";
import { ButtonLink } from "@components/molecules/WelcomePage/WelcomePage.styles";

const pageValues = {
  title: "Our team",
  content:
    "Safety and the highest standard of medical care - introduce the qualified team of LifeGuard clinic!",
  content2:
    "The team working at the LifeGuard clinic is a group of experienced specialists, which includes doctors of various specialties. Contact with our patients is very important to us, so press the button below and get to know our staff!",
  button: <ButtonLink href="#team">Meet us</ButtonLink>,
};

const { title, content, content2, button } = pageValues;

const Team = () => {
  useEffect(() => {
    document.title = "Team | LifeGuard";
  }, []);

  return (
    <>
      <WelcomePage
        title={title}
        content={content}
        content2={content2}
        button={button}
      />
      <Employees />
    </>
  );
};

export default Team;
