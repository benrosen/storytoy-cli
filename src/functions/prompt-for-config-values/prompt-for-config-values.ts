import { Config } from "../../types/config";
import { Snippet } from "enquirer";

export const promptForConfigValues = (): Promise<Config> => {
  return new Snippet({
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
      "choices": "\${choices}",
      "description":"\${description}",
      "title": \${title}""
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
