import { promises as fileSystem } from "fs";

/**
 * Write boilerplate for README.md to the given directory.
 *
 * @param {string} directory The parent directory for the new file.
 * @param {string} id The id of the new Choice.
 * @returns {Promise<void>} An empty promise.
 */
export const writeReadmeMd = (directory: string, id: string) => {
  return fileSystem.writeFile(
    `${directory}/README.md`,
    `# ${id}

This [Choice directory](#the-choice-directory) was generated for [storytoy](https://github.com/benrosen/storytoy) using [the storytoy-cli](https://github.com/benrosen/storytoy-cli).

\`\`\`shell
npx storytoy-cli create ${id}
\`\`\`

## The Choice Directory

A choice directory is a folder containing four files that represent a storytoy [Choice]() object.

\`\`\` shell
${id}/
    - choice-data.json
    - index.js
    - on-render.js
    - README.md       <--- YOU ARE HERE
\`\`\`

### \`choice-data.json\`

\`choice-data.json\` contains the static \`Choice\` data.

#### Definition

\`\`\`typescript
{
  axes: string[],
  id: string,
  results: Result[]
}
\`\`\`

#### Example

\`\`\`json
{
  "axes": ["disgust", "lust", "trust"],
  "id": "link-with-odo",
  "results": [
    {
      "point": [
        { "axis": "disgust", "value": 0 },
        { "axis": "lust", "value": 1 },
        { "axis": "trust", "value": 1 },
      ],
      "id": "link-with-odo-passionately",
    },
    {
      "point": [
        { "axis": "disgust", "value": 1 },
        { "axis": "lust", "value": 0 },
        { "axis": "trust", "value": 1 },
      ],
      "id": "link-with-odo-dutifully",
    },
    {
      "point": [
        { "axis": "disgust", "value": 1 },
        { "axis": "lust", "value": 1 },
        { "axis": "trust", "value": 0 },
      ],
      "id": "link-with-odo-inquisitively",
    },
    {
      point: [
        { "axis": "disgust", "value": 1 },
        { "axis": "lust", "value": 0 },
        { "axis": "trust", "value": 0 },
      ],
      "id": "offend-odo",
    },
  ],
},
\`\`\`

### \`on-render.js\`

\`on-render.js\` tells \`storytoy\` what text to show on the screen. \`on-render.js\` is just a normal [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) file, so you can customize its behavior as much (or as little) as you like.

You can use [context](#) within \`on-render.js\` to return different text depending on the state of the story.

#### Example

\`\`\`javascript
export const onRender = (context) => {
  return \`"\${context?.player?.name ?? "Ensign"}", says Odo in a gravelly voice. "Let me link with you."\`;
}
\`\`\`

### \`README.md\`

\`README.md\` provides helpful information about the other files in the directory. You're looking at \`README.md\` right now. You should feel free to update or delete this file to suit the needs of your \`Choice\`. 

### \`index.js\`

This file is auto-generated, and you probably won't ever need or want to mess with it. That said, \`index.js\` exports data from \`choices-data.json\` and \`on-render.js\` in the form of a \`Choice\` object.
`
  );
};
