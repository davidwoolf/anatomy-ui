<script>
  import Text from "@components/editor/text.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /** @type {{ name: string; value: string; editable: "text"}[]} */
  export let attributes = [];
</script>

{#each attributes as attribute, index (index)}
  <span>
    &nbsp;{attribute.name}
    <span class="keyword">{"="}</span>
    "
  </span>
  <Text
    value={attribute.value}
    on:update={({ detail }) => {
      dispatch("update", {
        text: attributes.map((item, itemIndex) => {
          if (itemIndex !== index) return item;

          return {
            ...item,
            value: detail.text,
          };
        }),
      });
    }} />"
{/each}

<style>
  span {
    display: flex;
  }

  .keyword {
    color: color-mix(in srgb, var(--color-gray-800), white 60%);
  }
</style>
