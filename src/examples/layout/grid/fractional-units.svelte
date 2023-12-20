<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import GridSandbox from "@components/grid-sandbox.svelte";
  import GridItem from "@components/grid-sandbox-item.svelte";

  let code = [
    {
      selector: ".grid-container",
      value: [
        {
          property: "grid-auto-rows",
          value: "4rem",
          type: "static",
        },
        {
          property: "grid-template-columns",
          value: "1fr 1fr",
          type: "select",
          options: ["1fr 1fr", "2rem 1fr", "5fr 1fr"],
        },
        {
          property: "gap",
          value: "0px",
          type: "text",
        },
        {
          property: "width",
          value: "8rem",
          type: "text",
        },
      ],
    },
  ];

  /**
   *
   * @param {string} value
   */
  function getTracks(value) {
    return value.split(" ");
  }

  let rows = ["", "", ""];
  let columns = getTracks(code[0].value[1].value);

  $: {
    columns = getTracks(code[0].value[1].value);
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:width={code[0].value[3].value}>
      <GridSandbox
        implicitRowSize={code[0].value[0].value}
        columns={code[0].value[1].value}
        gap={code[0].value[2].value}>
        {#each rows as _row, rowIndex}
          {#each columns as _column, columnIndex}
            <GridItem
              columnBefore={(() => {
                if (rowIndex === 0) {
                  return `${columnIndex + 1}`;
                }
              })()}
              rowBefore={(function () {
                if (columnIndex === 0 && rowIndex !== 0) {
                  return `${rowIndex + 1}`;
                }
              })()}
              columnAfter={(function () {
                if (rowIndex === 0) {
                  if (columnIndex === columns.length - 1) {
                    return `${columnIndex + 2}`;
                  }
                }
              })()}
              rowAfter={(function () {
                if (columnIndex === 0) {
                  if (rowIndex === rows.length - 1) {
                    return `${rowIndex + 2}`;
                  }
                }
              })()}
              hideRightBorder={code[0].value[2].value.replace(/\D/g, "") !== "0" ||
                columnIndex === columns.length - 1}
              hideBottomBorder={code[0].value[2].value.replace(/\D/g, "") !== "0" ||
                rowIndex === rows.length - 1} />
          {/each}
        {/each}
      </GridSandbox>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
