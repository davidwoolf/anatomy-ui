<script>
  /** @type {{label: string; link?: string}[]} */
  export let items;
</script>

<ul class="container">
  {#each items as item, index}
    {#if index !== 0}
      <li class="divider" aria-hidden>/</li>
    {/if}

    <li class={index === items.length - 1 ? "current" : ""}>
      {#if item.link}
        <a href={item.link}>{item.label}</a>
      {:else}
        <span>{item.label}</span>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .container {
    display: flex;
    font-size: 0.875rem;
    gap: 0.5rem;
    overflow: hidden;
  }

  .container li {
    opacity: 0.6;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .container .divider {
    opacity: 0.3;
  }

  .container .current {
    flex: 0 1 auto;
    opacity: 1;
    text-transform: revert;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
