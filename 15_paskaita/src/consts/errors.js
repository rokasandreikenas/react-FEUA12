export const errorMessages = {
  requiredField: "Būtina užpildyti lauką",
  positive: "Skaičius turi būti teigiamas",
  integer: "Skaičius turi būti be kablelių",
  email: "Blogas emailas",
  passwordMatch: "Slaptažodis turi sutapti",
  length: (param) =>
    `Turi pridėti ne mažiau nei ${param.length} ${
      param.length === 1 ? "elementą" : "elementus"
    }`,
  min: (param) => `Turi būti ne mažiau nei ${param.min} simboliai`,
};
