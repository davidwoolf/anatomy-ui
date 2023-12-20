<script>
  /** @type {string | undefined} */
  export let columnBefore = undefined;
  /** @type {string | undefined} */
  export let rowBefore = undefined;
  /** @type {string | undefined} */
  export let columnAfter = undefined;
  /** @type {string | undefined} */
  export let rowAfter = undefined;
</script>

<div class="item">
  <slot />

  {#if columnBefore}
    <span class="track-before">
      {columnBefore}
    </span>
  {/if}

  {#if rowBefore}
    <span class="track-before">
      {rowBefore}
    </span>
  {/if}

  {#if columnAfter}
    <span class="column-after">
      {columnAfter}
    </span>
  {/if}

  {#if rowAfter}
    <span class="row-after">
      {rowAfter}
    </span>
  {/if}
</div>

<style>
  .item {
    border-inline-end: 1px solid var(--color-purple-400);
    border-block-end: 1px solid var(--color-purple-400);
    background-color: var(--color-gray-100);
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-xxs);
    height: 100%;
    position: relative;
    padding: 0.5rem;
  }

  .item span {
    align-items: center;
    background-color: white;
    border: 1px solid var(--color-purple-400);
    border-radius: 100%;
    block-size: 1.5rem;
    display: flex;

    inline-size: 1.5rem;
    justify-content: center;
    position: absolute;
  }

  .track-before {
    inset-block-start: -0.75rem;
    inset-inline-start: -0.75rem;
  }

  .track-before {
    inset-block-start: -0.75rem;
    inset-inline-start: -0.75rem;
  }

  .column-after {
    inset-block-start: -0.75rem;
    inset-inline-end: -0.75rem;
  }

  .row-after {
    inset-block-end: -0.75rem;
    inset-inline-start: -0.75rem;
  }
</style>
