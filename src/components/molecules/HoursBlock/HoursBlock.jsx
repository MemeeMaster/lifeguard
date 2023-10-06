import React from "react";
import { Wrapper, BlockContent } from "./HoursBlock.styles";

const HoursBlock = ({ fromDay, toDay, fromHour, toHour }) => {
  return (
    <Wrapper>
      <BlockContent>
        {fromDay} - {toDay}
      </BlockContent>
      <BlockContent>
        {fromHour} - {toHour}
      </BlockContent>
    </Wrapper>
  );
};

export default HoursBlock;
