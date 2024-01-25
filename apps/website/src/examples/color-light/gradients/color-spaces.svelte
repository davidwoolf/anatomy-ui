<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--color-space",
          value: "oklab",
          type: "select",
          options: ["oklab", "srgb", "oklch", "xyz"],
        },
        {
          property: "background",
          value: "linear-gradient(to right in var(--color-space), #9747ff, #f59e0b)",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="linear-gradient" style:--color-space={code[0].value[0].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: linear-gradient(to right in var(--color-space), #9747ff, #f59e0b);
    border-radius: 100%;
    height: 8rem;
    width: 12rem;
  }
</style>
