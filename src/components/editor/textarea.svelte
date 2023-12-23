<script>
  /** @type {string} */
  export let value;
</script>

<textarea
  style:height="{value.split("\n").length * 20.5}px"
  on:input={(e) => {
    // @ts-expect-error
    // handleInput(e.target.value, item.selector, value.property);
  }}>{value}</textarea>

<style>
  textarea {
    appearance: none;
    border-block-end: 1px solid var(--color-gray-300);
    border-radius: 0;
    font-size: inherit;
    line-height: 145%;
    outline: none;
    resize: none;
    text-decoration-color: var(--color-gray-300);
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 75ms ease;
    white-space: nowrap;
    inline-size: max-content;
  }

  textarea:hover,
  textarea:focus-visible {
    color: var(--color-purple-400);
  }
</style>
