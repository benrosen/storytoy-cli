import isUniqueDirectoryName from "../is-unique-directory-name";
import loadConfig from "../load-config";
import { writeChoiceDataJson } from "../write-choice-data-json/write-choice-data-json";
import { writeIndexJs } from "../write-index-js/write-index-js";
import writeOnRenderJs from "../write-on-render-js";
import writeReadmeMd from "../write-readme-md";

/**
 * Create a new choice.
 *
 * @param {string} id The id of the new choice.
 * @returns {void}
 */
export const createChoice = (id: string) => {
  return loadConfig()
    .then(async (config) => {
      const choicesDirectoryPath = config.choices;
      if (!(await isUniqueDirectoryName(id, choicesDirectoryPath))) {
        throw new Error(
          `${choicesDirectoryPath} already contains a directory named ${id}`
        );
      }
      const newChoiceDirectoryPath = `${choicesDirectoryPath}/${id}`;
      writeChoiceDataJson(newChoiceDirectoryPath, id);
      writeIndexJs(newChoiceDirectoryPath);
      writeOnRenderJs(newChoiceDirectoryPath);
      writeReadmeMd(newChoiceDirectoryPath, id);
    })
    .catch((error) => {
      throw new Error(`Unable to create choice; ${error.message}`);
    });
};
