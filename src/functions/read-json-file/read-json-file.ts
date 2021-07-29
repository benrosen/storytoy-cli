import { promises as fileSystem } from "fs";

/**
 * Parse a JSON file into a generically typed object.
 *
 * @param {string} path The path to the JSON file.
 * @returns {any} The object parsed from the JSON file.
 *
 * @todo {SHOULD} use generic return type instead of any
 */
export const readJsonFile = async <T>(path: string): Promise<T> => {
  try {
    return JSON.parse(await fileSystem.readFile(path, "utf8")) as T;
  } catch (error) {
    throw new Error(`Unable to read ${path}; ${error}`);
  }
};
