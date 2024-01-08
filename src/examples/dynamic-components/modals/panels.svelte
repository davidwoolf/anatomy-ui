<script>
  import Example from "@components/example.svelte";

  import SimpleCard from "@components/simple-card.svelte";
  import CssEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "dialog",
      value: [
        {
          property: "background-color",
          value: "unset",
          type: "static",
        },
        {
          property: "block-size",
          value: "100vh",
          type: "static",
        },
        {
          property: "inline-size",
          value: "100vw",
          type: "static",
        },
        {
          property: "inset",
          value: "0",
          type: "static",
        },
        {
          property: "margin",
          value: "0",
          type: "static",
        },
      ],
    },
    {
      selector: "dialog .panel",
      value: [
        {
          property: "animation",
          value: "slide .2s ease",
          type: "static",
        },
        {
          property: "background-color",
          value: "black",
          type: "text",
        },
        {
          property: "height",
          value: "100dvh",
          type: "text",
        },
        {
          property: "left",
          value: "0",
          type: "text",
        },
        {
          property: "position",
          value: "fixed",
          type: "text",
        },
        {
          property: "width",
          value: "18rem",
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
      src="/examples/dynamic-components/modals/panels?background={code[1].value[1]
        .value}&height={code[1].value[2].value}&left={code[1].value[3]
        .value}&position={code[1].value[4].value}&width={code[1].value[5].value}"
      title="Modal styled as a panel" />
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
