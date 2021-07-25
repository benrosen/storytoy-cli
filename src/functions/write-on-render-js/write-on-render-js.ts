import { promises as fileSystem } from "fs";

export const writeOnRenderJs = (directory: string) => {
  return fileSystem.mkdir(directory).then(() => {
    fileSystem.writeFile(
      `${directory}/on-render.js`,
      `export const onRender = (context) => {
  return \`Hello \${context?.player?.name ?? "World"}\`;
};
`
    );
  });
};
