<script>
  import { createEventDispatcher } from "svelte";
  import HTMLElement from "./html-element.svelte";

  /**
   * @typedef Node
   * @property {string} [tag]
   * @property {string} [text]
   * @property {{ name: string; value: string; type: string}[]} [attributes]
   * @property {Record<string | number, Node>} [nodes]
   * */

  const dispatch = createEventDispatcher();

  export let allowCopying = true;

  /** @type {Record<string | number, Node>} */
  export let value;
  let copied = false;
  let entries = Object.entries(value);

  /**
   *
   * @param {Record<string | number, Node>} value
   */
  function generateCode(value) {
    let text = "";
    const entries = Object.entries(value);

    entries.forEach(([_, node]) => {
      if (node.text) {
        text = text + `${node.text}\n`;
      } else {
        if (node.nodes) {
          text = text + `<${node.tag}>\n`;
          text = text + `${generateCode(node.nodes)}`;
          text = text + `</${node.tag}>\n`;
        } else {
          text = text + `<${node.tag} />\n`;
        }
      }
    });

    return text;
  }

  $: {
    if (copied) {
      setTimeout(() => (copied = false), 1000);
    }
  }
</script>

<div class="container">
  {#each entries as [key, node], index (key)}
    {#if index !== 0}
      <div class="spacer" />
    {/if}

    <HTMLElement
      on:update={({ detail }) => {
        dispatch("update", {
          text: {
            ...value,
            [key]: {
              ...node,
              nodes: {
                ...node.nodes,
                ...detail.text,
              },
            },
          },
        });
      }}
      attributes={node.attributes}
      tag={node.tag}
      value={node.nodes} />
  {/each}

  {#if allowCopying}
    <button
      type="button"
      class="copy-code"
      on:click={async () => {
        const text = generateCode(value);

        try {
          await navigator.clipboard.writeText(text);
          copied = true;
        } catch (err) {}
      }}>
      {copied ? "copied!" : "copy code"}
    </button>
  {/if}
</div>

<style>
  .container {
    font-family: var(--font-mono);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 185%;
  }

  .copy-code {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    opacity: 0.7;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .container {
      font-size: var(--font-size-sm);
    }
  }
</style>
