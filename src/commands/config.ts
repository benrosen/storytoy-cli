import { Command, flags } from "@oclif/command";

import configureDirectory from "../functions/configure-directory";

/**
 * An oclif command to configure a directory for storytoy. For more information on oclif commands, see https://oclif.io/docs/commands
 *
 * @todo {MUST} test
 * @todo {SHOULD} group command files into subdirectories
 */
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
