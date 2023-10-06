import React, { useEffect } from "react";
import WelcomePage from "@components/molecules/WelcomePage/WelcomePage";
import { BackButton } from "./NotFound.styles";

const pageValues = {
  title: "[404] Page Not Found.",
  content: "Sorry!",
  content2: "This page cannot be found on our server!",
  button: <BackButton to="/">Main page</BackButton>,
};

const { title, content, content2, button } = pageValues;

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found | LifeGuard";
  }, []);

  return (
    <WelcomePage
      title={title}
      content={content}
      content2={content2}
      button={button}
    />
  );
};

export default NotFound;
