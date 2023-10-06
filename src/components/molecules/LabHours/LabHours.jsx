import React from "react";
import { BlockContent } from "../HoursBlock/HoursBlock.styles";
import { Wrapper } from "./LabHours.styles";

const LabHours = ({ day, fromHour, toHour }) => {
  return (
    <Wrapper>
      <BlockContent>
        {day}
      </BlockContent>
      <BlockContent>
        {fromHour} - {toHour}
      </BlockContent>
    </Wrapper>
  );
};

export default LabHours;
