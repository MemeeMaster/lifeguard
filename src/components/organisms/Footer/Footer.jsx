import React, { useState, useEffect } from "react";
import {
  Wrapper,
  UpperSection,
  BottomSection,
  NameBlock,
  NavBlock,
  BlockHeader,
  ContactContent,
} from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <Wrapper>
      <UpperSection>
        <NameBlock>
          <h3>LifeGuard</h3>
          <p>Medical care you can rely on.</p>
        </NameBlock>
        <NavBlock>
          <Link to="/">main page</Link>
          <Link to="/services">services</Link>
          <Link to="/team">team</Link>
        </NavBlock>
        <div>
          <BlockHeader>call us</BlockHeader>
          <ContactContent>(44) 777-12-34</ContactContent>
          <BlockHeader>send us an email</BlockHeader>
          <ContactContent>life@guard.com</ContactContent>
        </div>
      </UpperSection>
      <BottomSection>
        <p>&copy; {year} | LifeGuard</p>
      </BottomSection>
    </Wrapper>
  );
};

export default Footer;
