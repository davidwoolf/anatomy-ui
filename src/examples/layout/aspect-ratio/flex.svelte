<script>
  import Example from "@components/example.svelte";
  import Image from "./image.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "align-items",
          value: "stretch",
          type: "select",
          options: ["stretch", "flex-start", "flex-end", "center"],
        },
        {
          property: "display",
          value: "flex",
          type: "static",
        },
      ],
    },
    {
      selector: "img",
      value: [
        {
          property: "aspect-ratio",
          value: "1 / 1",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container" style:align-items={code[0].value[0].value}>
      <Image height="auto" width="8rem" ratio={code[1].value[0].value} />

      <div />
    </div>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    display: flex;
    gap: 0.75rem;
  }

  .container div {
    background-color: var(--color-gray-800);
    border-radius: 0.5rem;
    height: 12rem;
    width: 8rem;
  }
</style>
