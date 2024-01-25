<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  /** @type {string} */
  export let value;
</script>

<textarea
  style:height="{value.split("\n").length * 20.5}px"
  bind:value
  on:input={(e) => {
    dispatch("update", {
      // @ts-expect-error
      text: e.target.value,
    });
  }} />

<style>
  textarea {
    appearance: none;
    border-block-end: 1px solid var(--color-gray-300);
    border-radius: 0;
    font-size: inherit;
    line-height: 145%;
    outline: none;
    resize: none;
    transition: color 75ms ease;
    white-space: nowrap;
    inline-size: max-content;
  }

  textarea:hover,
  textarea:focus-visible {
    color: var(--color-purple-400);
  }
</style>
