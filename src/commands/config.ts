import { Command, flags } from "@oclif/command";

import { configureDirectory } from "../functions/configure-directory";

export default class Config extends Command {
  static description = "configure a directory for storytoy";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Config);
    return configureDirectory(args.directory);
  }
}
