export const parentScreen = (groups) => {
  for (const group of groups) {
    if (group.siglagrupo === "resp") {
      console.log("renderizar tela do resp!");
      return true;
    }
  }
  console.log("tela do aluno mermo");
  return false;
};
