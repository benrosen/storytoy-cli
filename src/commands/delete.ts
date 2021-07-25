import { Command, flags } from "@oclif/command";

import deleteChoice from "../functions/delete-choice";

/**
 * An oclif command to delete an existing Choice directory. For more information on oclif commands, see https://oclif.io/docs/commands
 *
 * @todo {MUST} test
 */
export default class Delete extends Command {
  static description = "safely delete a choice";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Delete);
    return deleteChoice(args.directory);
  }
}
