<script>
  export let border = "none";
  export let minWidth = "none";
  export let maxWidth = "32rem";
  export let minHeight = "0";
  export let opacity = 1;
  export let margin = "0";
  export let padding = "40px";
  export let position = "static";
  export let top = "initial";
  export let right = "initial";
  export let bottom = "initial";
  export let left = "initial";
</script>

<div
  class="playground--card"
  style:min-block-size={minHeight}
  style:max-inline-size={maxWidth}
  style:min-inline-size={minWidth}
  style:border
  style:opacity
  style:margin
  style:padding
  style:position
  style:top
  style:right
  style:bottom
  style:left>
  <slot />
</div>

<style>
  .playground--card {
    background-color: var(--color-gray-800);
    border-radius: 0.5rem;
    color: white;
    overflow: scroll;
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
    color: white;
    font-size: var(--font-size-sm);
    line-height: 145%;
    margin: 0.25rem 0 0;
  }
</style>
