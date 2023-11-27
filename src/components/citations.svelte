<script lang="ts">
  interface Citation {
    link: string;
    label: string;
  }

  export let data: Citation[] = [];
</script>

<div>
  <h3 class="text-xs font-medium text-gray-800/60">Additional resources</h3>

  <div class="text-xs mt-1">
    {#each data as item, index (item.link)}
      <a class="underline hover:no-underline" href={item.link} target="_blank"
        >{item.label}</a
      >{index < data.length - 1 ? ", " : ""}
    {/each}
  </div>
</div>
