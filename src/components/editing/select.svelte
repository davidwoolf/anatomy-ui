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
    <path
      d="M0.664062 0.5L5.66406 5.5L10.6641 0.5"
      stroke="currentcolor"
      stroke-linecap="round" />
  </svg>
</div>

<style>
  div {
    background: linear-gradient(
        180deg,
        rgba(241, 241, 249, 0) 0%,
        rgba(241, 241, 249, 0.3) 100%
      ),
      #fff;
    box-shadow: 0px 1px 2px 0px rgba(151, 71, 255, 0.11);
    border: 1px solid rgba(42, 0, 97, 0.12);
    border-radius: 0.375rem;
    position: relative;
  }

  select {
    all: unset;
    box-sizing: border-box;
    outline: revert;
    font-size: 0.875rem;
    padding: 0.5rem 1.75rem 0.5rem 0.75rem;
    line-height: 1;
    min-width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  svg {
    block-size: 6px;
    color: var(--color-gray-800);
    inline-size: 11px;
    inset-block-start: 50%;
    inset-inline-end: 0.75rem;
    opacity: 0.6;
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
  }
</style>
