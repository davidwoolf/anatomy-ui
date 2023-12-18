<script>
  export let border = "none";
  export let minWidth = "none";
  export let maxWidth = "32rem";
  export let minHeight = "0";
  export let opacity = 1;
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
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
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
    color: var(--color-gray-300);
    font-family: var(--font-placeholder);
    font-size: 1rem;
    line-height: 145%;
    margin: 0.25rem 0 0;
  }
</style>
