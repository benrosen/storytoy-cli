import listDirectoryNames from "../list-directory-names";

/**
 * Check if a directory name is unique within the given directory.
 *
 * @param {string} directoryName The name of the directory to check for uniqueness
 * @param {string} parentDirectoryPath The directory in which to search for name conflicts
 * @returns {Promise<boolean>} Is the directory name unique?
 */
export const isUniqueDirectoryName = (
  directoryName: string,
  parentDirectoryPath = "."
): Promise<boolean> => {
  return listDirectoryNames(parentDirectoryPath).then((directoryNames) => {
    return !directoryNames.includes(directoryName);
  });
};
