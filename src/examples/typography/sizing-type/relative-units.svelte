<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: "p",
      value: [
        {
          property: "font-size",
          value: "1rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <div>
        <p style:font-size={code[0].value[0].value}>
          Dorothy leaned her chin upon her hand and gazed thoughtfully at the Scarecrow.
        </p>
      </div>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
