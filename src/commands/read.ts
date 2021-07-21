import { Command, flags } from "@oclif/command";

import readChoice from "../functions/read-choice";

export default class Read extends Command {
  static description = "jump into a story";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Read);
    return readChoice(args.directory);
  }
}
