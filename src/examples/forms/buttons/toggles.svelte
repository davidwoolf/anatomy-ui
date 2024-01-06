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
    all: revert;
  }
</style>
