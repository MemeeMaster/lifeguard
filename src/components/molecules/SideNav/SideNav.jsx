import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Wrapper, NavBody, Shadow } from "./SideNav.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { OpenNav } from "@providers/OpenNavContext";

const SideNav = () => {
  const { open, handleOpen, handleKeyDown } = useContext(OpenNav);

  return createPortal(
    <Wrapper open={open}>
      <Shadow onClick={handleOpen} />
      <NavBody>
        <FontAwesomeIcon
          aria-label="Close menu"
          icon={faXmark}
          onClick={handleOpen}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        />
        <Link to="/" onClick={handleOpen}>
          main page
        </Link>
        <a href="/#contact" onClick={handleOpen}>
          contact
        </a>
        <Link to="/services" onClick={handleOpen}>
          services
        </Link>
        <Link to="/team" onClick={handleOpen}>
          team
        </Link>
      </NavBody>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default SideNav;
