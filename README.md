# storytoy-cli

Read and write interactive stories.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/storytoy-cli.svg)](https://npmjs.org/package/storytoy-cli)
[![Downloads/week](https://img.shields.io/npm/dw/storytoy-cli.svg)](https://npmjs.org/package/storytoy-cli)
[![License](https://img.shields.io/npm/l/storytoy-cli.svg)](https://github.com/benrosen/storytoy-cli/blob/master/package.json)

<!-- toc -->
* [storytoy-cli](#storytoy-cli)
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
storytoy-cli/0.3.0 linux-x64 node-v16.3.0
$ storytoy --help [COMMAND]
USAGE
  $ storytoy COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`storytoy config [DIRECTORY]`](#storytoy-config-directory)
* [`storytoy create [ID]`](#storytoy-create-id)
* [`storytoy delete [DIRECTORY]`](#storytoy-delete-directory)
* [`storytoy help [COMMAND]`](#storytoy-help-command)
* [`storytoy read [DIRECTORY]`](#storytoy-read-directory)
* [`storytoy update [DIRECTORY]`](#storytoy-update-directory)

## `storytoy config [DIRECTORY]`

configure a directory for storytoy

```
USAGE
  $ storytoy config [DIRECTORY]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/config.ts](https://github.com/benrosen/storytoy-cli/blob/v0.3.0/src/commands/config.ts)_

## `storytoy create [ID]`

create a new choice

```
USAGE
  $ storytoy create [ID]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/create.ts](https://github.com/benrosen/storytoy-cli/blob/v0.3.0/src/commands/create.ts)_

## `storytoy delete [DIRECTORY]`

safely delete a choice

```
USAGE
  $ storytoy delete [DIRECTORY]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/delete.ts](https://github.com/benrosen/storytoy-cli/blob/v0.3.0/src/commands/delete.ts)_

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

## `storytoy read [DIRECTORY]`

jump into a story

```
USAGE
  $ storytoy read [DIRECTORY]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/read.ts](https://github.com/benrosen/storytoy-cli/blob/v0.3.0/src/commands/read.ts)_

## `storytoy update [DIRECTORY]`

safely update a choice

```
USAGE
  $ storytoy update [DIRECTORY]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/update.ts](https://github.com/benrosen/storytoy-cli/blob/v0.3.0/src/commands/update.ts)_
<!-- commandsstop -->
