import { IConfig } from "storytoy";
import { ensureDir } from "fs-extra";
import { isDirectory } from "path-type";
import promptForConfigValues from "../prompt-for-config-values";
import writeJsonFile from "../write-json-file";
const path = require("path");

/**
 * Configure a directory for storytoy.
 *
 * @param {string} directory The directory to configure for storytoy.
 *
 * @todo {SHOULD} include stack trace in thrown errors
 * @todo {COULD} support flag that enables user to accept all default values and skip prompt
 * @todo {COULD} support variable number of indentation spaces for config file
 */
export const configureDirectory = async (directory = ".") => {
  try {
    if (!(await isDirectory(directory))) {
      throw new Error(`${directory} is not a directory.`);
    }
    promptForConfigValues().then((config: IConfig) => {
      ensureDir(path.join(directory, config.choices));
      writeJsonFile(config, `${directory}/storytoy.json`);
    });
  } catch (error) {
    throw new Error(`Unable to configure ${directory} for storytoy; ${error}`);
  }
};
