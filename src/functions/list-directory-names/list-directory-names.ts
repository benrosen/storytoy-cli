import { Dirent, promises as fileSystem } from "fs";

/**
 * List the names of the directories in the given directory.
 *
 * @param {string} path The parent directory of the directories to list.
 * @returns {Promise<string[]>} The names of the directories.
 */
export const listDirectoryNames = async (path: string): Promise<string[]> => {
  try {
    try {
      await fileSystem.access(path);
    } catch (error) {
      if (error?.code === "ENOENT") {
        return fileSystem.mkdir(path).then(() => {
          return [];
        });
      }
    }
    return fileSystem
      .readdir(path, { withFileTypes: true })
      .then((dirents: Dirent[]) => {
        return dirents
          .filter((dirent) => {
            return dirent.isDirectory();
          })
          .map((dirent) => {
            return dirent.name;
          });
      });
  } catch (error) {
    throw new Error(`Unable to list directory names; ${error.message}`);
  }
};
