<script>
  import { createEventDispatcher } from "svelte";
  import Text from "./editor/text.svelte";
  const dispatch = createEventDispatcher();

  /** @type {{ name: string; value: string; type: string}[]} */
  export let attributes = [];
</script>

{#each attributes as attribute}
  <span>{attribute.name}="</span><Text
    value={attribute.value}
    on:update={({ detail }) => {
      dispatch("update", {
        text: {
          name: attribute.name,
          value: detail.text,
        },
      });
    }} />"
{/each}
