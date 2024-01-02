<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "overflow",
          value: "hidden",
          type: "static",
        },
      ],
    },

    {
      selector: "p",
      value: [
        {
          property: "display",
          value: "-webkit-box",
          type: "static",
        },
        {
          property: "-webkit-box-orient",
          value: "vertical",
          type: "static",
        },
        {
          property: "-webkit-line-clamp",
          value: "3",
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
        <p style:width="6rem" style:-webkit-line-clamp={code[1].value[2].value}>
          Dorothy leaned her chin upon her hand and gazed
        </p>
      </div>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  div {
    overflow: hidden;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
