<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--offset-x",
          value: "0px",
          type: "text",
        },
        {
          property: "--offset-y",
          value: "0px",
          type: "text",
        },
        {
          property: "--intensity",
          value: "2px",
          type: "text",
        },
        {
          property: "--color",
          value: "black",
          type: "text",
        },
        {
          property: "text-shadow",
          value: "var(--offset-x) var(--offset-y) var(--intensity) var(--color)",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <p
      style:--offset-x={code[0].value[0].value}
      style:--offset-y={code[0].value[1].value}
      style:--intensity={code[0].value[2].value}
      style:--color={code[0].value[3].value}>
      Dorothy leaned her chin upon her hand and gazed thoughtfully at the Scarecrow. Its
      head was a small sack stuffed with straw, with eyes, nose, and mouth painted on it
      to represent a face.
    </p>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  p {
    text-shadow: var(--offset-x) var(--offset-y) var(--intensity) var(--color);
  }
</style>
