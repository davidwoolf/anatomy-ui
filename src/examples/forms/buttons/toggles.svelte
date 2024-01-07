<script lang="ts">
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    button: {
      tag: "button",
      text: "pressed",
      attributes: {
        "aria-pressed": "true",
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <button aria-pressed={code.button.attributes["aria-pressed"]}>
      {code.button.text}
    </button>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  button {
    background-color: white;
    box-shadow: 0 1px 4px rgb(0 0 0 / 0.25);
    border-radius: 0.5rem;
    font-size: var(--font-size-sm);
    padding: 0.25rem 0.5rem;
  }

  button[aria-pressed="true"] {
    box-shadow: 0 1px 4px inset rgb(0 0 0 / 0.25);
  }
</style>
