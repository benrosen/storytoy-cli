import { promises as fileSystem } from "fs";

export const writeIndexJs = (directory: string) => {
  return fileSystem.mkdir(directory).then(() => {
    fileSystem.writeFile(
      `${directory}/index.js`,
      `import data from "./choice-data.json"
import { onRender } from "./on-render.js"

export default {
...data,
onRender
}
`
    );
  });
};
