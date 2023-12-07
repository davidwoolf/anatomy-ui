<script>
  import LightBulb from "./icons/light-bulb.svelte";
</script>

<div class="pro-tip">
  <LightBulb />

  <slot />
</div>

<style>
  .pro-tip {
    align-items: center;
    color: #047857;
    display: flex;
    gap: 0.75rem;
  }

  :global(.pro-tip > p) {
    color: inherit;
    font-size: 1rem;
    font-weight: 500;
  }
</style>
