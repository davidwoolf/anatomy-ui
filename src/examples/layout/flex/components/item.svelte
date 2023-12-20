<script>
  export let basis = "auto";
  export let grow = "0";
  export let shrink = "0";
  export let height = "initial";
  export let marginLeft = "0";
</script>

<div
  class="item"
  style:flex-basis={basis}
  style:flex-grow={grow}
  style:flex-shrink={shrink}
  style:block-size={height}
  style:margin-left={marginLeft}>
  <slot />
</div>

<style>
  .item {
    align-items: center;
    background-color: white;
    border: 1px solid var(--color-purple-400);
    border-radius: 9999px;
    min-block-size: 1.5rem;
    color: var(--color-purple-400);
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--font-size-xxs);
    font-weight: 500;
    justify-content: center;
    min-inline-size: 1.5rem;
    padding: 0 0.5rem;
  }
</style>
