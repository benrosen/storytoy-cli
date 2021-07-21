import { Command, flags } from "@oclif/command";

import createChoice from "../functions/create-choice";

export default class Create extends Command {
  static description = "create a new choice";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Create);
    return createChoice(args.directory);
  }
}
