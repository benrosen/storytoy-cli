import { Story, tell } from "storytoy";

import loadStory from "../load-story";
import promptForPoint from "../prompt-for-point";

/**
 * Read the Choice with the given id.
 *
 * @param {string} id The id of the Choice to read.
 * @returns {Promise<void>} An empty promise.
 */
export const readChoice = (id: string) => {
  return loadStory()
    .then(async (story: Story) => {
      const transcript = await tell(
        story,
        promptForPoint,
        { player: { name: "Ben" } },
        id
      );
      console.log("Transcript:", transcript);
    })
    .catch((error) => {
      throw new Error(`Unable to read choice; ${error}`);
    });
};
