<script>
  export let border = "none";
  export let minWidth = "none";
  export let maxWidth = "32rem";
  export let minHeight = "0";
  export let opacity = 1;
</script>

<div
  class="playground--card"
  style:min-block-size={minHeight}
  style:max-inline-size={maxWidth}
  style:min-inline-size={minWidth}
  style:border
  style:opacity>
  <slot />
</div>

<style>
  .playground--card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
    overflow: hidden;
    padding: 2.5rem;
    position: relative;
    width: 100%;
  }

  :global(.playground--card img) {
    border-radius: 0.25rem;
  }

  :global(.playground--card img + h2) {
    margin: 1rem 0 0;
  }

  :global(.playground--card h2) {
    font-size: 1.125rem;
    font-weight: bold;
  }

  :global(.playground--card p) {
    color: color-mix(in srgb, rgb(31, 41, 55), white 20%);
    font-size: 1rem;
    line-height: 145%;
    margin: 0.25rem 0 0;
  }
</style>
