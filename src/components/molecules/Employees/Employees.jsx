import React, { useState } from "react";
import Employee from "@components/atoms/Employee/Employee";
import { Wrapper, Button, Title, EmployeeWrapper } from "./Employees.styles";
import { specialists, nurses, pcp } from "./EmployeesData";

const Employees = () => {
  const [employees, setEmployees] = useState(specialists);

  return (
    <Wrapper id="team">
      <Title>{employees.title}</Title>
      <EmployeeWrapper>
        {employees.profiles.map((profile) => (
          <Employee
            photo={profile.photo}
            name={profile.name}
            role={profile.role}
            key={profile.name}
          />
        ))}
      </EmployeeWrapper>
      <div>
        <Button onClick={() => setEmployees(specialists)}>
        Specialist doctors
        </Button>
        <Button onClick={() => setEmployees(nurses)}>Nurses</Button>
        <Button onClick={() => setEmployees(pcp)}>PCPs</Button>
      </div>
    </Wrapper>
  );
};

export default Employees;
