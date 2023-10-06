import React, { useEffect } from "react";
import WelcomePage from "@components/organisms/WelcomePage/WelcomePage";
import OpeningHours from "@components/molecules/OpeningHours/OpeningHours";
import UpperWaves from "@components/atoms/UpperWaves/UpperWaves";
import Contact from "@components/organisms/Contact/Contact";
import BottomWaves from "@components/atoms/BottomWaves/BottomWaves";
import Localization from "@components/organisms/Localization/Localization";

const Main = () => {
  useEffect(() => {
    document.title = "Main page | LifeGuard";
  }, []);

  return (
    <>
      <WelcomePage />
      <OpeningHours />
      <UpperWaves />
      <Contact />
      <BottomWaves />
      <Localization />
    </>
  );
};

export default Main;
