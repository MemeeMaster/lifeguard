import React from "react";
import {
  Wrapper,
  ContactBlock,
  InfoContent,
  WhiteIcon,
} from "./Contact.styles";
import SectionTitle from "@components/atoms/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/atoms/SectionSubtitle/SectionSubtitle";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionSubtitle>Contact us</SectionSubtitle>
      <ContactBlock>
        <WhiteIcon icon={faPhone} />
        <InfoContent>(44) 777-12-34</InfoContent>
      </ContactBlock>
      <ContactBlock>
        <WhiteIcon icon={faAt} />
        <InfoContent>life@guard.com</InfoContent>
      </ContactBlock>
    </Wrapper>
  );
};

export default Contact;
