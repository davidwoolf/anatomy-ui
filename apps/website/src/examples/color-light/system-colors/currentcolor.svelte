<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "p",
      value: [
        {
          property: "border",
          value: "2px solid",
          type: "static",
        },
        {
          property: "border-color",
          value: "currentcolor",
          type: "text",
        },
        {
          property: "color",
          value: "red",
          type: "select",
          options: ["red", "#00AA00", "blue", "rgb(0 0 255 / .5)"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <p
      style:border={code[0].value[0].value}
      style:border-color={code[0].value[1].value}
      style:color={code[0].value[2].value}>
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
    font-size: var(--font-size-sm);
    padding: 1rem;
  }
</style>
