<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  /** @type {string} */
  export let value;

  let size = value.length >= 3 ? value.length : 3;
  $: size = value.length >= 3 ? value.length : 3;
</script>

<input
  type="text"
  {size}
  bind:value
  on:input={(e) => {
    dispatch("update", {
      // @ts-expect-error
      text: e.target.value,
    });
  }} />

<style>
  input {
    appearance: none;
    border-radius: 0;
    color: var(--color-gray-800);
    font-size: inherit;
    line-height: 145%;
    outline: none;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: var(--color-gray-300);
    transition: color 75ms ease;
    width: auto;
  }

  input:hover,
  input:focus-visible {
    color: var(--color-purple-400);
  }
</style>
