<script>
  /** @type {string} */
  export let value;
</script>

<div>
  <select bind:value>
    <slot />
  </select>

  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M1.08691 0.5L6.08691 5.5L11.0869 0.5" stroke="black" />
  </svg>
</div>

<style>
  div {
    all: unset;
    outline: revert;
    border: 1px solid #0f172a;
    border-radius: 0.25rem;
    position: relative;
  }
  select {
    all: unset;
    box-sizing: border-box;
    outline: revert;
    font-size: 0.875rem;
    padding: 0.5rem 1.75rem 0.5rem 0.75rem;
    line-height: 1;
    width: 100%;
  }

  svg {
    position: absolute;
    inset-inline-end: 0.75rem;
    inset-block-start: 50%;
    block-size: 6px;
    inline-size: 11px;
    transform: translateY(-50%);
    z-index: -1;
  }
</style>
