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
        tag: "label",
        nodes: {
          1: {
            tag: "span",
            nodes: {
              1: {
                text: "First name:",
              },
            },
          },
          2: {
            tag: "input",
          },
        },
      },
    }
  );

  const values = derived([code], function ([code]) {
    return [getNode("1.nodes.1.nodes.1.text", code, "First name")];
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <label>
        <span>{$values[0]}</span>
        <input type="text" placeholder="John Doe..." />
      </label>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={$code} on:update={({ detail }) => code.set(detail.text)} />
  </svelte:fragment>
</Example>

<style>
  span {
    display: block;
    font-size: var(--font-size-sm);
  }

  input {
    border: 1px solid var(--color-gray-300);
    border-radius: 0.25rem;
    font-size: var(--font-size-sm);
    padding: 0 0.5rem;
  }
</style>
