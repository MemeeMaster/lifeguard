import React from "react";
import { Wrapper, Image, Name, Role } from "./Employee.styles";

const Employee = ({ photo, name, role }) => {
  return (
    <Wrapper>
      <Image
        src={photo}
        loading="lazy"
        alt={`Photo showing ${name} - ${role}`}
      />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrapper>
  );
};

export default Employee;
