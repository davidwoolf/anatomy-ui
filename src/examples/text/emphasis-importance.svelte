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
        tag: "p",
        nodes: {
          1: {
            tag: "strong",
            nodes: {
              1: {
                text: "Warning!",
              },
            },
          },
          2: {
            text: "This action will delete all of your content.",
          },
        },
      },
    }
  );

  const values = derived([code], function ([code]) {
    return [
      getNode("1.nodes.1.nodes.1.text", code, "Warning!"),
      getNode("1.nodes.2.text", code, "This action will delete all of your content."),
    ];
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <p>
        <strong>{$values[0]}</strong>
        {$values[1]}
      </p>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={$code} on:update={({ detail }) => code.set(detail.text)} />
  </svelte:fragment>
</Example>
