import React from "react";
import { Wrapper, UnitsBlock } from "./ServicesBlock.styles";
import ServiceUnit from "@components/atoms/ServiceUnit/ServiceUnit";

const ServicesBlock = () => {
  return (
    <Wrapper id="services">
      <UnitsBlock>
        <ServiceUnit name="Family consultation" />
        <ServiceUnit name="Orthopedic surgery" />
        <ServiceUnit name="Dermatology" />
        <ServiceUnit name="Gynecology" />
        <ServiceUnit name="Cardiology" />
        <ServiceUnit name="Neurology" />
      </UnitsBlock>
    </Wrapper>
  );
};

export default ServicesBlock;
