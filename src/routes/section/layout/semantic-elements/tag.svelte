<script lang="ts">
  import { derived, type Writable } from "svelte/store";

  export let active: Writable<string>;
  export let name: string;

  const classes = derived(active, ($active) => {
    if ($active === name) {
      return "hover:bg-purple-400/10 p-1 rounded-md transition-all bg-purple-400/10";
    } else {
      return "hover:bg-purple-400/10 p-1 rounded-md transition-all";
    }
  });
</script>

<button
  type="button"
  class={$classes}
  on:click={() => {
    active.set(name);
  }}>
  &lt;{name}&gt;
</button>
