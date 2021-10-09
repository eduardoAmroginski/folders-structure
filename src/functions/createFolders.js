import { mkdir } from "fs";
import verifyExistFolder from "../utils/verifyExistFolder.js";

const makedirectory = (
  root,
  folder = "",
  subfolder = "",
  subsubfolder = ""
) => {
  mkdir(
    `${root}/${folder}/${subfolder}/${subsubfolder}`,
    { recursive: true },
    (err) => {
      if (err) throw err;
      console.log(`Diretório criado com sucesso!`);
    }
  );
};

const createFolders = (structure) => {
  verifyExistFolder("app");

  for (var [key, value] of Object.entries(structure)) {
    makedirectory(key);

    if (Object.keys(value).length > 0) {
      for (var [key2, value2] of Object.entries(value)) {
        makedirectory(key, key2);

        if (Object.keys(value2).length > 0) {
          for (var [key3, value3] of Object.entries(value2)) {
            makedirectory(key, key2, key3);

            if (Object.keys(value3).length > 0) {
              for (var [key4, value4] of Object.entries(value3)) {
                makedirectory(key, key2, key3, key4);
              }
            }
          }
        }
      }
    }
  }
};

export default createFolders;
