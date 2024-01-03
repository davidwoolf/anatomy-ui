<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "color-scheme",
          value: "light",
          type: "select",
          options: ["light", "only light", "dark", "only dark"],
        },
        {
          property: "background-color",
          value: "Canvas",
          type: "select",
          options: ["Canvas", "CanvasText"],
        },
        {
          property: "color",
          value: "CanvasText",
          type: "select",
          options: ["Canvas", "CanvasText"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:color-scheme={code[0].value[0].value}>
      <SimpleCard
        backgroundColor={code[0].value[1].value}
        color={code[0].value[2].value} />
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
