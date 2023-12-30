<script>
  export let level = "2";
</script>

{#if level === "1"}
  <h1 class="component">
    <slot />
  </h1>
{:else}
  <h2 class="component">
    <slot />
  </h2>
{/if}

<style>
  .component {
    font-size: var(--font-size-3xl);
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.01em;
  }

  @media (min-width: 768px) {
    .component {
      font-size: var(--font-size-4xl);
    }
  }
</style>
