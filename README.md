storytoy-cli
============

Read and write interactive stories.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/storytoy-cli.svg)](https://npmjs.org/package/storytoy-cli)
[![Downloads/week](https://img.shields.io/npm/dw/storytoy-cli.svg)](https://npmjs.org/package/storytoy-cli)
[![License](https://img.shields.io/npm/l/storytoy-cli.svg)](https://github.com/benrosen/storytoy-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g storytoy-cli
$ storytoy COMMAND
running command...
$ storytoy (-v|--version|version)
storytoy-cli/0.1.0 linux-x64 node-v16.3.0
$ storytoy --help [COMMAND]
USAGE
  $ storytoy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`storytoy hello [FILE]`](#storytoy-hello-file)
* [`storytoy help [COMMAND]`](#storytoy-help-command)

## `storytoy hello [FILE]`

describe the command here

```
USAGE
  $ storytoy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ storytoy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/benrosen/storytoy-cli/blob/v0.1.0/src/commands/hello.ts)_

## `storytoy help [COMMAND]`

display help for storytoy

```
USAGE
  $ storytoy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
