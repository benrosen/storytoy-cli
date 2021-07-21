import { Command, flags } from "@oclif/command";

export default class Read extends Command {
  static description = "jump into a story";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Read);

    const name = flags.name ?? "world";
    this.log(
      `hello ${name} from /home/benjaminprosen/storytoy-cli/src/commands/read.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
