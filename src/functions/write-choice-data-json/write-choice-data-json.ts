import { promises as fileSystem } from "fs";

export const writeChoiceDataJson = (directory: string, id: string) => {
  return fileSystem.mkdir(directory).then(() => {
    fileSystem.writeFile(
      `${directory}/choice-data.json`,
      `{
"axes": [],
"id": "${id}",
"results": []
}
`
    );
  });
};
