import fs from "fs";
import { reporter } from "vfile-reporter";
import remarkCitations from "./index.js";
import { remark } from "remark";

const buffer = fs.readFileSync("example.md");

remark()
  .use(remarkCitations)
  .process(buffer)
  .then((file) => {
    console.error(reporter(file));
  });
