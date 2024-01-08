<script>
  import Example from "@components/example.svelte";

  import SimpleCard from "@components/simple-card.svelte";
  import CssEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "dialog::backdrop",
      value: [
        {
          property: "background-color",
          value: "rgb(0 0 0 / .5)",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <iframe
      loading="lazy"
      src="/examples/dynamic-components/dialogs/backdrop?background={code[0].value[0]
        .value}"
      title="Dialog with a styled backdrop" />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CssEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  iframe {
    position: absolute;
    inset: 0;
    block-size: 100%;
    inline-size: 100%;
  }
</style>
