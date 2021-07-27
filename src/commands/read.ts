import { Command, flags } from "@oclif/command";

import readChoice from "../functions/read-choice";

/**
 * An oclif command to read a Story starting with a given Choice. For more information on oclif commands, see https://oclif.io/docs/commands
 *
 * @todo {MUST} test
 */
export default class Read extends Command {
  static description = "jump into a story";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "id" }];

  async run() {
    const { args } = this.parse(Read);
    return readChoice(args.id);
  }
}
