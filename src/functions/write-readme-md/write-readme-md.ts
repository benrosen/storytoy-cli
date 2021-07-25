import { promises as fileSystem } from "fs";

/**
 * Write boilerplate for README.md to the given directory.
 *
 * @param {string} directory The parent directory for the new file.
 * @param {string} id The id of the new Choice.
 * @returns {Promise<void>} An empty promise.
 *
 * @todo {SHOULD} add content
 * @todo {MUST} test
 */
export const writeReadmeMd = (directory: string, id: string) => {
  return fileSystem.writeFile(`${directory}/README.md`, `# ${id}`);
};
