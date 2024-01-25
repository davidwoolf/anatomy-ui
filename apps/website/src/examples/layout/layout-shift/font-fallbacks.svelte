<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "font-family",
          value: "cursive",
          type: "select",
          options: ["cursive", "sans-serif"],
        },
      ],
    },
  ];
</script>

<Example>
  <div slot="preview">
    <iframe
      loading="lazy"
      width="500px"
      style:aspect-ratio="1 / 1"
      src="/examples/layout/layout-shift/font-fallbacks?enabled={code[0].value[0]
        .value === 'cursive'
        ? true
        : false}"
      title="Card showing layout shift" />

    <CSSEditor
      allowCopying={false}
      value={code}
      on:update={({ detail }) => (code = detail.text)} />
  </div>
</Example>
