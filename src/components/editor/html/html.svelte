<script>
  import { createEventDispatcher } from "svelte";
  import Element from "./element.svelte";

  /**
   * @typedef Nodes
   * @property {string} [tag]
   * @property {string} [text]
   * @property {"text" | "textarea"} [editable]
   * @property {{ name: string; value: string; editable: "text"}[]} [attributes]
   * @property {Nodes[]} [nodes]
   * */

  const dispatch = createEventDispatcher();

  /** @type {Nodes[]} */
  export let value;
</script>

<div class="container">
  {#each value as node, index (index)}
    {#if index !== 0}
      <div class="spacer" />
    {/if}

    <Element
      {...node}
      on:update={({ detail }) => {
        dispatch("update", {
          text: value.map((item, subIndex) => {
            if (subIndex !== index) return item;

            return detail.text;
          }),
        });
      }} />
  {/each}
</div>

<style>
  .container {
    font-family: var(--font-mono);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 185%;
  }

  @media (min-width: 768px) {
    .container {
      font-size: var(--font-size-sm);
    }
  }
</style>
