import React from "react";
import { Wrapper, SectionWrap } from "./OpeningHours.styles";
import SectionTitle from "@components/atoms/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/atoms/SectionSubtitle/SectionSubtitle";
import HoursBlock from "../HoursBlock/HoursBlock";
import LabHours from "../LabHours/LabHours";

const OpeningHours = () => {
  return (
    <Wrapper id="hours">
      <SectionWrap>
        <SectionTitle>Opening hours</SectionTitle>
        <SectionSubtitle>We are at your full disposal.</SectionSubtitle>
        <HoursBlock
          fromDay="Monday"
          toDay="Friday"
          fromHour="08:00"
          toHour="18:00"
        />
      </SectionWrap>
      <SectionWrap>
        <SectionTitle>Laboratory collection point</SectionTitle>
        <SectionSubtitle>Open during hours:</SectionSubtitle>
        <LabHours day="Monday" fromHour="08:00" toHour="10:00" />
        <LabHours day="Thursday" fromHour="08:00" toHour="10:00" />
        <LabHours day="Friday" fromHour="08:00" toHour="10:00" />
      </SectionWrap>
    </Wrapper>
  );
};

export default OpeningHours;
