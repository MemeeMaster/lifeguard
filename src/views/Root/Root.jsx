import React, { useContext } from "react";
import "../../assets/styles/fonts.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "@assets/styles/globalStyles";
import MobileNav from "@components/molecules/MobileNav/MobileNav";
import DesktopNav from "@components/molecules/DesktopNav/DesktopNav";
import { ThemeProvider } from "styled-components";
import theme from "@assets/styles/theme";
import Footer from "@components/organisms/Footer/Footer";
import SideNav from "@components/molecules/SideNav/SideNav";
import { ScreenSize } from "@providers/ScreenSizeContext";
import Main from "../Main/Main";
import Team from "../Team/Team";
import NotFound from "../NotFound/NotFound";
import Cookies from "@components/atoms/Cookies/Cookies";
import Services from "../Services/Services";

const Root = () => {
  const { screenWidth } = useContext(ScreenSize);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {screenWidth >= 768 ? <DesktopNav /> : <MobileNav />}
      {screenWidth <= 768 ? <SideNav /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Cookies />
      <Footer />
    </ThemeProvider>
  );
};

export default Root;
