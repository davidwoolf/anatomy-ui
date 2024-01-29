import { visit } from "unist-util-visit";

export default function remarkCitations() {
  return (tree) => {
    let index = 0;
    visit(tree, "link", (node) => {
      if (!("children" in node) || node.children[0].value !== "citation") return;

      index++;

      node.children = node.children.map((item) => ({
        ...item,
        value: String(index),
      }));

      /** @TODO wrap in <sup> */
    });
  };
}
