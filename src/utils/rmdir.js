import { rmdir, rmdirSync } from "fs";

const deleteOldFolder = (folder) => {
  rmdirSync(folder, { recursive: true });
  console.log(`${folder} antiga deletada!`);
};

export default deleteOldFolder;
