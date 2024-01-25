<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Image from "@components/image.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--invert",
          value: "100%",
          type: "text",
        },
        {
          property: "filter",
          value: "invert(var(--invert))",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:--filter={code[0].value[0].value}>
      <Image width="100%" />
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  div {
    filter: invert(var(--filter));
    inline-size: 8rem;
  }
</style>
