import React, { useRef, useEffect } from "react";
import { Wrapper, Header, Text } from "./WelcomePage.styles";
import gsapFadeIn from "@utils/gsapFadeIn";

const WelcomePage = ({ title, content, content2, button }) => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const secondParagraphRef = useRef(null);
  const animationArray = [titleRef, paragraphRef, secondParagraphRef];

  useEffect(() => {
    animationArray.map((el) => gsapFadeIn(el));
  }, []);

  return (
    <Wrapper>
      <Header ref={titleRef}>{title}</Header>
      <Text ref={paragraphRef}>{content}</Text>
      {content2 ? <Text ref={secondParagraphRef}>{content2}</Text> : null}
      {button}
    </Wrapper>
  );
};

export default WelcomePage;
