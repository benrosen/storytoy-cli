import { Config } from "../../types/config";
const Enquirer = require("enquirer");

/**
 * Prompt the user for configuration values.
 *
 * @returns {Promise<Config>} The config values supplied by the user.
 *
 * @todo document errors
 * @todo test
 * @todo support initial values as optional inputs
 * @todo suppport default values
 * @todo differentiate between required and unrequired fields
 * @todo extrapolate fields and template from Config type
 */
export const promptForConfigValues = (): Promise<Config> => {
  return new (Enquirer as any).Snippet({
    fields: [
      { name: "author", message: "Author name" },
      { name: "choices", message: "Choices glob" },
      { name: "description", message: "Story description" },
      { name: "title", message: "Story title" },
    ],
    message: "Fill out the fields in storytoy.config",
    name: "config",
    required: true,
    template: `{
      "author": "\${author}",
      "title": "\${title}",
      "description":"\${description}",
      "choices": "\${choices}",
    }
    `,
  })
    .run()
    .then((response: { values: Config }) => {
      return response.values;
    })
    .catch((error: Error) => {
      throw new Error(`Unable to return config values; ${error.message}`);
    });
};
