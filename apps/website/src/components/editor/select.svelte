<script>
  /** @type {string} */
  export let value;

  /** @type {string[]} */
  export let options;
</script>

<div class="control" style:width="{value.length * 9 + 16}px">
  <select
    {value}
    on:change={(e) => {
      // @ts-expect-error
      // handleInput(e.target.value, item.selector, value.property);
    }}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.664062 0.5L5.66406 5.5L10.6641 0.5"
      stroke="currentcolor"
      stroke-linecap="round" />
  </svg>
</div>

<style>
  .control {
    background: #fff;
    border-bottom: 1px solid var(--color-gray-300);
    position: relative;
    min-inline-size: 4rem;
  }

  .control select {
    appearance: none;
    box-sizing: border-box;
    font-family: var(--font-mono);
    font-size: inherit;
    inline-size: 100%;
    line-height: 145%;
    overflow: hidden;
    outline: none;
    padding: 0 1rem 0 0;
  }

  .control svg {
    block-size: 6px;
    color: var(--color-gray-800);
    inline-size: 11px;
    inset-block-start: 50%;
    inset-inline-end: 0;
    margin-block-start: 1px;
    opacity: 0.6;
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
  }
</style>
