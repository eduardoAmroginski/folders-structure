import createFolders from "./src/functions/createFolders.js";
import { mvc, mvvm, react } from "./src/structure/structures.js";

switch (process.argv[2]) {
  case "mvc":
    console.log("Criando diretório de pastas usando Patterns MVC");
    createFolders(mvc);
    break;
  case "mvvm":
    console.log("Execute instalação");
    createFolders(mvvm);
    break;
  case "react":
    console.log("Execute instalação");
    createFolders(react);
    break;
  default:
    const dados = {
      comando: ["mvc", "mvvm", "react"],
    };
    console.log(`Parâmetro Invalido! \n`);
    console.table(dados);
    break;
}
