<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import SimpleCard from "@components/simple-card.svelte";
  import { afterUpdate } from "svelte";

  /**
   * @type {HTMLParagraphElement}
   */
  let text;
  let computedValue = "16px";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "font-size",
          value: "16px",
          type: "text",
        },
      ],
    },
    {
      selector: "p",
      value: [
        {
          property: "font-size",
          value: "max(16px, 1rem)",
          type: "text",
        },
      ],
    },
  ];

  /**
   *
   * @param {HTMLParagraphElement} text
   
   */
  function updateComputedStyle(text) {
    if (!text) {
      return;
    }

    const styles = getComputedStyle(text);

    computedValue = styles.fontSize;
  }

  afterUpdate(() => {
    updateComputedStyle(text);
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <div style:font-size={code[0].value[0].value}>
        <p style:font-size={code[1].value[0].value} bind:this={text}>
          Dorothy leaned her chin upon her hand and gazed thoughtfully at the Scarecrow.

          <br />
          <br />

          <strong>Returned font size: {computedValue}</strong>
        </p>
      </div>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
