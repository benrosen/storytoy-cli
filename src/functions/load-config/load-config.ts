import { IConfig } from "storytoy";
import { extname as getExtensionName } from "path";
import { isFile } from "path-type";
import { readJsonFile } from "../read-json-file/read-json-file";

/**
 * Load configuration data from the config file.
 *
 * @param {string} configFilePath The path to the config file.
 */
export const loadConfig = async (configFilePath?: string): Promise<IConfig> => {
  try {
    const expectedConfigFilePath = `${process.cwd()}/${
      configFilePath ?? "storytoy.json"
    }`;
    if (getExtensionName(expectedConfigFilePath) !== ".json") {
      throw new Error(
        `${expectedConfigFilePath} must use the ".json" file extension.`
      );
    }
    if (!(await isFile(expectedConfigFilePath))) {
      throw new Error(`${expectedConfigFilePath} is not a file.`);
    }
    return readJsonFile<IConfig>(expectedConfigFilePath);
  } catch (error) {
    throw new Error(`Unable to load config; ${error}`);
  }
};
