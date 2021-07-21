import { Command, flags } from "@oclif/command";

import { deleteChoice } from "../functions/delete-choice";

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
