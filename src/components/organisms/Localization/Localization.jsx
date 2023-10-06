import React from "react";
import { Wrapper, MapInfo, WebMap, MapDot } from "./Localization.styles";
import SectionTitle from "@components/atoms/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/atoms/SectionSubtitle/SectionSubtitle";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Localization = () => {
  return (
    <Wrapper>
      <SectionTitle>Location</SectionTitle>
      <SectionSubtitle>Welcome</SectionSubtitle>
      <MapInfo>
        <MapDot icon={faLocationDot} />
        123 Elm Street, Jersey City, NJ 07302
      </MapInfo>
      <WebMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.3767265098933!2d-74.16188486787149!3d40.72721123906937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2539bb0d2f6f7%3A0x3f0be6c9802963e1!2sElm%20St%2C%20Newark%2C%20NJ%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1696538344192!5m2!1spl!2spl"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></WebMap>
    </Wrapper>
  );
};

export default Localization;
