<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".header",
      value: [
        {
          property: "--blur",
          value: "5px",
          type: "text",
        },
        {
          property: "-webkit-backdrop-filter",
          value: "blur(var(--blur))",
          type: "static",
        },
        {
          property: "backdrop-filter",
          value: "blur(var(--blur))",
          type: "static",
        },
        {
          property: "position",
          value: "sticky",
          type: "static",
        },
        {
          property: "top",
          value: "0",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <div class="header" style:--filter={code[0].value[0].value}>header</div>
      <p>
        Dorothy leaned her chin upon her hand and gazed thoughtfully at the Scarecrow. Its
        head was a small sack stuffed with straw, with eyes, nose, and mouth painted on it
        to represent a face.
      </p>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    background-color: white;
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    font-size: var(--font-size-sm);
    padding: 1.5rem;
    max-inline-size: 16rem;
    max-block-size: 10rem;
    overflow: scroll;
  }

  .header {
    -webkit-backdrop-filter: blur(var(--filter));
    backdrop-filter: blur(var(--filter));
    border-block-end: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    font-weight: 600;
    margin: -1.5rem -1.5rem 1rem;
    padding: 0.5rem 1.5rem 0.5rem;
    position: sticky;
    inset-block-start: -1.5rem;
  }

  p {
    line-height: 145%;
  }
</style>
