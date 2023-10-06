import React from "react";
import { Shadow, Box } from "./ServiceUnit.styles";

const ServiceUnit = ({name}) => {
  return (
    <Box>
      <p>{name}</p>
      <Shadow />
    </Box>
  );
};

export default ServiceUnit;
