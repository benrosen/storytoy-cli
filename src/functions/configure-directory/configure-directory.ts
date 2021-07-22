import { Config } from "../../types/config";
import { promises as fileSystem } from "fs";
import { isDirectory } from "path-type";
import promptForConfigValues from "../prompt-for-config-values";

/**
 * Configure a directory for storytoy.
 *
 * @param {string} directory The directory to configure for storytoy.
 */
export const configureDirectory = async (directory = ".") => {
  try {
    if (!(await isDirectory(directory))) {
      throw new Error(`${directory} is not a directory.`);
    }
    promptForConfigValues().then((config: Config) => {
      fileSystem.appendFile(
        `${directory}/storytoy.json`,
        JSON.stringify(config, null, 2)
      );
    });
  } catch (error) {
    throw new Error(
      `Unable to configure ${directory} for storytoy; ${error.message}`
    );
  }
};
