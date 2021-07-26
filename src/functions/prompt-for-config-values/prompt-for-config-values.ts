import { IConfig } from "storytoy";
const Enquirer = require("enquirer");

/**
 * Prompt the user for configuration values.
 *
 * @returns {Promise<IConfig>} The config values supplied by the user.
 *
 * @todo {SHOULD} suppport default values
 * @todo {SHOULD} differentiate between required and unrequired fields
 * @todo {COULD} support initial values as optional inputs
 * @todo {COULD} extrapolate fields and template from IConfig type
 */
export const promptForConfigValues = (): Promise<IConfig> => {
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
    .then((response: { values: IConfig }) => {
      return response.values;
    })
    .catch((error: Error) => {
      throw new Error(`Unable to return config values; ${error.message}`);
    });
};
