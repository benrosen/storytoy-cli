import { promises as fileSystem } from "fs";

export const writePackageJson = (directory: string, id: string) => {
  return fileSystem.writeFile(
    `${directory}/package.json`,
    `{
  "name": "${id}",
  "version": "0.1.0"
}
`
  );
};
