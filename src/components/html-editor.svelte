<script>
  import { createEventDispatcher } from "svelte";
  import EditorItem from "./editor-item.svelte";
  import HTMLElement from "./html-element.svelte";

  /**
   * @typedef Node
   * @property {string} [tag]
   * @property {string} [text]
   * @property {Record<string | number, Node>} [nodes]
   * */

  const dispatch = createEventDispatcher();

  export let allowCopying = true;

  /** @type {Record<string | number, Node>} */
  export let value;
  let copied = false;
  let entries = Object.entries(value);

  async function generateCode() {
    // const text = value
    //   .map(
    //     (selector) =>
    //       `${selector.selector} {\n\t${selector.value
    //         .map((item) => `${item.property}: ${item.value};`)
    //         .join("\n\t")}\n}`
    //   )
    //   .join("\n\n");
    // try {
    //   await navigator.clipboard.writeText(text);
    //   copied = true;
    // } catch (err) {}
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
      tag={node.tag}
      value={node.nodes} />
  {/each}

  {#if allowCopying}
    <button type="button" class="copy-code" on:click={generateCode}>
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
