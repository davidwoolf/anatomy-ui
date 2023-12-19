<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";
  import { base } from "$app/paths";

  let reload = false;

  let code = [
    {
      selector: "img",
      value: [
        {
          property: "aspect-ratio",
          value: "1 / 1",
          type: "select",
          options: ["1 / 1", "auto"],
        },
      ],
    },
  ];

  let src = `${base}/assets/image.png`;

  // hacky way to remount components
  $: {
    if (code) {
      src = "";
      reload = true;

      setTimeout(() => {
        reload = false;
      });
      setTimeout(() => {
        src = `${base}/assets/image.png`;
      }, 500);
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    {#if !reload}
      <Card
        padding="3rem"
        width="20rem"
        image={src}
        aspectRatio={code[0].value[0].value} />
    {/if}

    <CSSEditor
      allowCopying={false}
      value={code}
      on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
