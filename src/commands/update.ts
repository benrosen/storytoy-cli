import { Command, flags } from "@oclif/command";

import updateChoice from "../functions/update-choice";

export default class Update extends Command {
  static description = "safely update a choice";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Update);
    return updateChoice(args.directory);
  }
}
