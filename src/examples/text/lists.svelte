<script>
  import { getNode } from "@components/editor/utils";
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/html-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";
  import { derived, writable } from "svelte/store";

  /**
   * @typedef Node
   * @property {string} [tag]
   * @property {string} [text]
   * @property {Record<string | number, Node>} [nodes]
   * */

  const code = writable(
    /** @type {Record<string | number, Node>} */ {
      1: {
        tag: "ul",
        nodes: {
          1: {
            tag: "li",
            nodes: {
              1: {
                text: "Item one",
              },
            },
          },
          2: {
            tag: "li",
            nodes: {
              1: {
                text: "Item two",
              },
            },
          },
          3: {
            tag: "li",
            nodes: {
              1: {
                text: "Item three",
              },
            },
          },
        },
      },
    }
  );

  const values = derived([code], function ([code]) {
    return [
      getNode("1.nodes.1.nodes.1.text", code, "Item one"),
      getNode("1.nodes.2.nodes.1.text", code, "Item two"),
      getNode("1.nodes.3.nodes.1.text", code, "Item three"),
    ];
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <ul>
        <li>{$values[0]}</li>
        <li>{$values[1]}</li>
        <li>{$values[2]}</li>
      </ul>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={$code} on:update={({ detail }) => code.set(detail.text)} />
  </svelte:fragment>
</Example>
