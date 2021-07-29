import glob = require("glob-promise");

import { Choice, IConfig } from "storytoy";

import { cwd } from "process";
import { join } from "path";
import loadConfig from "../load-config";

/**
 * Load a Story from Choice files.
 *
 * @returns {Promise<Choice[]>} A promised array of Choice objects.
 */
export const loadStory = (): Promise<Choice[]> => {
  return loadConfig()
    .then((config: IConfig) => {
      return glob(join(config.choices, "*"))
        .then((paths) => {
          return Promise.all(
            paths.map(async (path) => {
              try {
                const choiceData = await import(join(cwd(), path));
                return (choiceData as { choice: Choice }).choice;
              } catch (error) {
                throw new Error(`Unable to load Choice from ${path}; ${error}`);
              }
            })
          );
        })
        .catch((error) => {
          throw new Error(`Unable to find choice files; ${error}`);
        });
    })
    .catch((error) => {
      throw new Error(`Unable to load story; ${error}`);
    });
};
