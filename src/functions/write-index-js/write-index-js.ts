import { promises as fileSystem } from "fs";

/**
 * Write boilerplate for index.js to the given directory.
 *
 * @param {string} directory The parent directory for the new file.
 * @returns {Promise<void>} An empty promise.
 */
export const writeIndexJs = (directory: string) => {
  return fileSystem.writeFile(
    `${directory}/index.js`,
    `import data from "./choice-data.json"
import { onRender } from "./on-render.js"

export default {
  ...data,
  onRender
}
`
  );
};
