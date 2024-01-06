<script lang="ts">
  import { base } from "$app/paths";
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    button: {
      tag: "button",
      attributes: {
        "aria-label": "Duplicate",
      },
      img: {
        tag: "img",
        attributes: {
          src: "path/to/icon",
        },
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <button aria-label={code.button.attributes["aria-label"]}>
      <img src="{base}/assets/icon.svg" />
    </button>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  button {
    align-items: center;
    background-color: var(--color-gray-800);
    border-radius: 100%;
    display: flex;
    height: 3rem;
    justify-content: center;
    width: 3rem;
  }

  button img {
    display: block;
  }
</style>
