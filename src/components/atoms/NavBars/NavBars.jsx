import React, { useContext } from "react";
import { Wrapper, Bar } from "./NavBars.styles";
import { OpenNav } from "@providers/OpenNavContext";

const NavBars = ({ scroll, darkNav }) => {
  const { handleOpen, handleKeyDown } = useContext(OpenNav);

  return (
    <Wrapper
      scroll={scroll}
      darkNav={darkNav}
      onClick={handleOpen}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <Bar aria-label='Open menu' scroll={scroll} darkNav={darkNav} />
    </Wrapper>
  );
};

export default NavBars;
