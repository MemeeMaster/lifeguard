import Doctor1 from "@assets/images/pexels-anna-shvets-4225880.jpg";
import Doctor2 from "@assets/images/pexels-antoni-shkraba-5215024.jpg";
import Doctor3 from "@assets/images/doctor-2337835_1280.jpg";

import Nurse1 from "@assets/images/nurse-2019420_1280.jpg";
import Nurse2 from "@assets/images/nurse-4962034_1280.jpg";
import Nurse3 from "@assets/images/doctor-2157993_1280.jpg";

class Specialist {
  constructor(photo, name, role) {
    (this.photo = photo), (this.name = name), (this.role = role);
  }
}

class SpecialistList {
  constructor(title, profiles) {
    (this.title = title), (this.profiles = profiles);
  }
}

// repetitive doctors
// first letters stand for initials

const MBdoctor = new Specialist(
  Doctor1,
  "Mary Bear",
  "Internist, Occupational Physician"
);

const CRdoctor = new Specialist(
  Doctor2,
  "Carol Reed",
  "Internist, Neurologist"
);

// employees objects

export const specialists = new SpecialistList("Specialist doctors", [
  MBdoctor,
  CRdoctor,
]);

export const nurses = new SpecialistList("Nurses", [
  new Specialist(Nurse1, "Emily Johnson", "Community nurse"),
  new Specialist(
    Nurse2,
    "Olivia Smith",
    "Immunization nurse, School health nurse"
  ),
  new Specialist(Nurse3, "Sophia Davis", "Community nurse"),
]);

export const pcp = new SpecialistList("PCPs", [
  new Specialist(Doctor3, "Max Johnson", "Internist"),
  MBdoctor,
  CRdoctor,
]);
