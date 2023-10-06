import React, { useEffect } from "react";
import WelcomePage from "@components/molecules/WelcomePage/WelcomePage";
import { ButtonLink } from "@components/molecules/WelcomePage/WelcomePage.styles";
import UpperWaves from "@components/atoms/UpperWaves/UpperWaves";
import ServicesBlock from "@components/molecules/ServicesBlock/ServicesBlock";

const pageValues = {
  title: "Our services",
  content:
    "All services at LifeGuard clinic are provided by experienced staff. We guarantee professional medical care, worthy of recommendation.",
  content2: "Check out the list of services provided below!",
  button: <ButtonLink href="#services">explore services</ButtonLink>,
};

const { title, content, content2, button } = pageValues;

const Services = () => {
  useEffect(() => {
    document.title = "Services | Evista";
  }, []);
  return (
    <>
      <WelcomePage
        title={title}
        content={content}
        content2={content2}
        button={button}
      />
      <UpperWaves />
      <ServicesBlock />
    </>
  );
};

export default Services;
