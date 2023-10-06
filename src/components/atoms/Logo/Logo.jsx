import React from "react";
import { Content } from "./Logo.styles";
import { useNavigate } from "react-router-dom";

const Logo = ({ scroll, darkNav }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    e.key === "Enter" ? navigate("/") : null;
  };

  return (
    <Content
      tabIndex={0}
      scroll={scroll}
      darkNav={darkNav}
      onClick={() => navigate("/")}
      onKeyDown={handleKeyDown}
    >
      LifeGuard
    </Content>
  );
};

export default Logo;
