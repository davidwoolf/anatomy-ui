<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  /** @type {HTMLButtonElement} */
  let button;

  let code = [
    {
      selector: "button",
      value: [
        {
          property: "cursor",
          value: "pointer",
          type: "select",
          options: ["pointer", "default"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <button bind:this={button} style:cursor={code[0].value[0].value}>button</button>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  /* necessary as global styling is doing other things to default buttons */
  button {
    all: revert;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
