import { promises as fileSystem } from "fs";

export const writeReadmeMd = (directory: string, id: string) => {
  fileSystem.writeFile(`${directory}/README.md`, `# ${id}`);
};
