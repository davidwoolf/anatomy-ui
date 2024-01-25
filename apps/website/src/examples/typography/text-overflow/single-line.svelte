<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: "p",
      value: [
        {
          property: "overflow",
          value: "hidden",
          type: "static",
        },
        {
          property: "white-space",
          value: "nowrap",
          type: "static",
        },
        {
          property: "text-overflow",
          value: "ellipsis",
          type: "select",
          options: ["ellipsis", "clip"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <p
        style:width="9rem"
        style:text-overflow={code[0].value[2].value}
        style:white-space={code[0].value[1].value}
        style:overflow={code[0].value[0].value}>
        Dorothy leaned her chin upon her hand and gazed
      </p>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
