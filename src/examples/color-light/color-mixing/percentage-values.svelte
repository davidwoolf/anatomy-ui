<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".mixed-color",
      value: [
        {
          property: "--percentage-1",
          value: "50%",
          type: "text",
        },
        {
          property: "--percentage-2",
          value: "50%",
          type: "text",
        },
        {
          property: "background-color",
          value:
            "color-mix(in srgb, purple var(--percentage-1), yellow var(--percentage-2))",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="linear-gradient"
      style:--percentage-1={code[0].value[0].value}
      style:--percentage-2={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: color-mix(
      in srgb,
      purple var(--percentage-1),
      yellow var(--percentage-2)
    );
    border-radius: 0.5rem;
    height: 8rem;
    width: 8rem;
  }
</style>
