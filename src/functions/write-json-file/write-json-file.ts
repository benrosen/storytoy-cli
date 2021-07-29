import { promises as fileSystem } from "fs";

/**
 * Write data to a JSON file.
 *
 * @param {*} content The content to write.
 * @param {string} path The path for the new JSON file.
 * @param {number} spaces The number of spaces per indentation.
 *
 * @returns {void}
 *
 * @todo {SHOULD} document generic content type
 */
export const writeJsonFile = <T>(content: T, path: string, spaces = 2) => {
  try {
    return fileSystem.writeFile(path, JSON.stringify(content, null, spaces));
  } catch (error) {
    throw new Error(`Unable to write JSON file; ${error}`);
  }
};
