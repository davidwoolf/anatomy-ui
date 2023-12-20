<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "header",
      value: [
        {
          property: "position",
          value: "sticky",
          type: "select",
          options: ["sticky", "fixed"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="sticky-fixed">
      <iframe
        loading="lazy"
        src="/examples/layout/position/sticky-fixed?type={code[0].value[0].value}"
        title="Card showing sticky and fixed positions" />
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .sticky-fixed {
    aspect-ratio: 4 / 3;
    inline-size: 100%;
    position: relative;
  }

  @media (min-width: 1024px) {
    .sticky-fixed {
      block-size: 100%;
      inline-size: 100%;
    }
  }

  .sticky-fixed iframe {
    background-color: white;
    block-size: calc(100% - 4px);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
    inline-size: 100%;
    inset: 0 0 4px 0;
    overflow: scroll;
    position: absolute;
  }
</style>
