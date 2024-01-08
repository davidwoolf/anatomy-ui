<script lang="ts">
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    button: {
      tag: "button",
      attributes: {
        "aria-expanded": "false",
        "aria-haspopup": "dialog",
        "aria-controls": "dialog-element",
      },
      text: "Open dialog",
    },
    dialog: {
      tag: "dialog",
      attributes: {
        id: "dialog-element",
      },
      p: {
        tag: "p",
        text: "Popup contents",
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <button
        aria-expanded={code.button.attributes["aria-expanded"]}
        aria-haspopup={code.button.attributes["aria-haspopup"]}
        aria-controls={code.button.attributes["aria-controls"]}>
        {code.button.text}
      </button>
    </SimpleCard>
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
