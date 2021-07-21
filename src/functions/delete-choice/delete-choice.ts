/**
 * Safely delete a choice directory.
 *
 * @param {string} directory The choice directory to safely delete.
 */
export const deleteChoice = (directory = ".") => {
  // does directory exist?
  // is directory a choice directory?
  // do any other choices depend on this choice?
  //    yes - want to clean up references to this choice?
  //      yes - clean up all references in other choices
  // delete the choice directory
  console.log(`delete choice directory ${directory}`);
};
