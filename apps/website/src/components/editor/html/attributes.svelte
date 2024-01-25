<script>
  import Text from "@components/editor/text.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /** @type {Record<string, string | boolean>} */
  export let attributes;

  /** @type {string} */
  export let closingTag;
</script>

<div class="attributes">
  {#each Object.entries(attributes) as [key, attribute], index (index)}
    <div class="attribute">
      &nbsp;
      <span>{key}</span>
      <span class="keyword">{"="}</span>
      "<Text
        value={attribute}
        on:update={({ detail }) => {
          dispatch("update", {
            text: {
              [key]: detail.text,
            },
          });
        }} />"

      {#if index === Object.entries(attributes).length - 1}
        <div class="selector">
          <span class="keyword">{closingTag}</span>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .attributes {
    min-width: max-content;
  }

  .attribute {
    display: flex;
  }

  span {
    color: var(--color-green-400);
  }

  .keyword {
    color: color-mix(in srgb, var(--color-gray-800), white 60%);
  }
</style>
