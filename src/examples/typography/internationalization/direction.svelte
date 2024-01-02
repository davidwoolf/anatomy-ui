<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = [
    {
      selector: "p",
      value: [
        {
          property: "text-orientation",
          value: "mixed",
          type: "select",
          options: ["mixed", "upright"],
        },
        {
          property: "writing-mode",
          value: "horizontal-tb",
          type: "select",
          options: ["horizontal-tb", "vertical-lr", "vertical-rl"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <p
      style:text-orientation={code[0].value[0].value}
      style:writing-mode={code[0].value[1].value}>
      Dorothy leaned her chin upon her hand
    </p>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  p {
    background-color: white;
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    font-size: var(--font-size-sm);
    padding: 1.5rem;
  }
</style>
