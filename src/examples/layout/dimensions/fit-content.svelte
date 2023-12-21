<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: ".card",
      value: [
        {
          property: "width",
          value: "12rem",
          type: "select",
          options: ["12rem", "fit-content"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard width={code[0].value[0].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
