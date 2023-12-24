<script>
  import { createEventDispatcher } from "svelte";
  import HTMLElement from "./html-element.svelte";
  import Text from "./editor/text.svelte";
  const dispatch = createEventDispatcher();

  /**
   * @typedef Nodes
   * @property {Record<string | number, Nodes> | { text: string }} nodes
   * */

  /** @type {string} */
  export let tag;

  /** @type {Record<string | number, Nodes> | { text: string } | undefined} */
  export let value;

  let entries = typeof value === "object" ? Object.entries(value) : [];
</script>

<div class="element">
  <span class="selector">
    <span class="keyword">{"<"}</span>{tag}<span class="keyword">{">"}</span>
  </span>

  {#each entries as [key, node] (key)}
    {#if node.text}
      <div class="inner-element">
        <Text
          value={node.text}
          on:update={({ detail }) => {
            dispatch("update", {
              text: {
                [key]: {
                  text: detail.text,
                },
              },
            });
          }} />
      </div>
    {:else if node.nodes}
      <div class="inner-element">
        <HTMLElement
          tag={node.tag}
          value={node.nodes}
          on:update={({ detail }) => {
            dispatch("update", {
              text: {
                [key]: {
                  ...node,
                  nodes: {
                    ...node.nodes,
                    ...detail.text,
                  },
                },
              },
            });
          }} />
      </div>
    {:else}
      <div class="inner-element">
        <span class="selector">
          <span class="keyword">{"<"}</span>{node.tag}<span class="keyword">{" />"}</span>
        </span>
      </div>
    {/if}
  {/each}

  <span class="selector">
    <span class="keyword">{"</"}</span>{tag}<span class="keyword">{">"}</span>
  </span>
</div>

<style>
  .inner-element {
    margin-inline-start: 1rem;
  }

  .selector {
    color: var(--color-green-400);
  }

  .keyword {
    color: color-mix(in srgb, var(--color-gray-800), white 60%);
  }
</style>
