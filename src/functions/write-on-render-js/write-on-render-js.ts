import { promises as fileSystem } from "fs";

/**
 * Write boilerplate for on-render.js to the given directory.
 *
 * @param {string} directory The parent directory for the new file.
 * @returns {Promise<void>} An empty promise.
 */
export const writeOnRenderJs = (directory: string) => {
  return fileSystem.writeFile(
    `${directory}/on-render.js`,
    `exports.onRender = (context) => {
  return \`Hello \${context?.player?.name ?? "World"}\`;
};
`
  );
};
