import deleteOldFolder from "./rmdir.js";
import { existsSync } from "fs";

const verifyExistFolder = (folder) => {
  if (existsSync(folder)) {
    deleteOldFolder(folder);
  }
};

export default verifyExistFolder;
