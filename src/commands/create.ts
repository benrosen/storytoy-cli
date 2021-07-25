import { Command, flags } from "@oclif/command";

import createChoice from "../functions/create-choice";

/**
 * An oclif command to create boilerplate for a new storytoy Choice. For more information on oclif commands, see https://oclif.io/docs/commands
 *
 * @todo {MUST} test
 */
export default class Create extends Command {
  static description = "create a new choice";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "id" }];

  async run() {
    const { args } = this.parse(Create);
    return createChoice(args.id);
  }
}
