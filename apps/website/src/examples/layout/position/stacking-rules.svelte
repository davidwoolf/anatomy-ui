<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Image from "@components/image.svelte";
  import { base } from "$app/paths";

  let code = [
    {
      selector: ".item",
      value: [
        {
          property: "position",
          value: "relative",
          type: "select",
          options: ["relative", "static"],
        },
        {
          property: "z-index",
          value: "1",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <div class="stack-1">
        <Image width="8rem" />
      </div>

      <div
        class="stack-2"
        style:position={code[0].value[0].value}
        style:z-index={code[0].value[1].value}>
        <Image src="{base}/assets/image2.png" width="8rem" />
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    block-size: 12rem;
    inline-size: 12rem;
    position: relative;
  }

  .stack-1 {
    border: 2px solid white;
    border-radius: 0.5rem;
    position: absolute;
    z-index: 1;
  }

  .stack-2 {
    border: 2px solid white;
    border-radius: 0.5rem;
    margin: 4rem 0 0 4rem;
  }
</style>
