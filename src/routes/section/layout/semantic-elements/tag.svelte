<script lang="ts">
  import { derived, type Writable } from "svelte/store";

  export let active: Writable<string>;
  export let name: string;

  const classes = derived(active, ($active) => {
    if ($active === name) {
      return "hover:bg-purple-400/10 inline-block p-1 rounded-md transition-all bg-purple-400/10";
    } else {
      return "hover:bg-purple-400/10 inline-block p-1 rounded-md transition-all";
    }
  });
</script>

<a class={$classes} href="#{name}">
  &lt;{name}&gt;
</a>
