import React, { useRef, useEffect } from "react";
import { ShadowBox, StyledIcon, Wrapper } from "./WelcomePage.styles";
import BlueSpan from "@components/atoms/BlueSpan/BlueSpan";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsapFadeIn from "@utils/gsapFadeIn";

const WelcomePage = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(headingRef);
    gsapFadeIn(subtitleRef);
  }, []);

  return (
    <Wrapper>
      <ShadowBox>
        <h1 ref={headingRef}>
          <BlueSpan>LifeGuard</BlueSpan> invites you<BlueSpan>!</BlueSpan>
        </h1>
        <p ref={subtitleRef}>Medical care you can rely on.</p>
        <a aria-label="Go to the opening hours section" href="#hours">
          <StyledIcon icon={faCircleChevronDown} />
        </a>
      </ShadowBox>
    </Wrapper>
  );
};

export default WelcomePage;
