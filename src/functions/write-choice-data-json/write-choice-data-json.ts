import { promises as fileSystem } from "fs";

/**
 * Write boilerplate for choice-data.json to the given directory.
 *
 * @param {string} directory The parent directory for the new file.
 * @param {string} id The id of the new Choice.
 * @returns {Promise<void>} An empty promise.
 *
 * @todo {MUST} test
 */
export const writeChoiceDataJson = (directory: string, id: string) => {
  return fileSystem.mkdir(directory).then(() => {
    return fileSystem.writeFile(
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
