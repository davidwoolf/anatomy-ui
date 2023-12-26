<script>
  import { getNode } from "@components/editor/utils";
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/html-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";
  import { derived, writable } from "svelte/store";

  /**
   * @typedef Node
   * @property {string} [tag]
   * @property {{ name: string; value: string; type: string}[]} [attributes]
   * @property {string} [text]
   * @property {Record<string | number, Node>} [nodes]
   * */

  const code = writable(
    /** @type {Record<string | number, Node>} */ {
      1: {
        tag: "address",
        nodes: {
          1: {
            text: "123 Beeker Street",
          },
        },
      },
      2: {
        tag: "time",
        nodes: {
          1: {
            text: "Jan 1, 2049 at 00:00",
          },
        },
        attributes: [
          {
            name: "datetime",
            value: "2049-01-01T00:00:00",
            type: "text",
          },
        ],
      },
    }
  );

  const values = derived([code], function ([code]) {
    return [
      getNode("1.nodes.1.text", code, "123 Beeker Street"),
      getNode("2.nodes.1.text", code, "Jan 1, 2049 at 00:00"),
      getNode("2.nodes.1.attributes", code, [
        {
          value: "2049-01-01T00:00:00",
        },
      ]),
    ];
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      Address
      <address>
        {$values[0]}
      </address>

      Time
      <time datetime={$values[2][0].value}>
        {$values[1]}
      </time>
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
