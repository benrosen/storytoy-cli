import { Config } from "../../types/config";
import { isDirectory } from "path-type";
import promptForConfigValues from "../prompt-for-config-values";
import writeJsonFile from "../write-json-file";

/**
 * Configure a directory for storytoy.
 *
 * @param {string} directory The directory to configure for storytoy.
 *
 * @todo {MUST} test
 * @todo {MUST} create a "choices" directory using config.choices path
 * @todo {SHOULD} include stack trace in thrown errors
 * @todo {COULD} support flag that enables user to accept all default values and skip prompt
 * @todo {COULD} support variable number of indentation spaces for config file
 */
export const configureDirectory = async (directory = ".") => {
  try {
    if (!(await isDirectory(directory))) {
      throw new Error(`${directory} is not a directory.`);
    }
    promptForConfigValues().then((config: Config) => {
      writeJsonFile(config, `${directory}/storytoy.json`);
    });
  } catch (error) {
    throw new Error(
      `Unable to configure ${directory} for storytoy; ${error.message}`
    );
  }
};
