<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Grid from "./components/grid.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".grid-container",
      value: [
        {
          property: "grid-template-columns",
          value: "8rem 8rem",
          type: "text",
        },
        {
          property: "grid-template-rows",
          value: "6rem 6rem",
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
    /* handle repeat function */
    // const repeats = value.findAll(/repeat\(\d,\s*\S*\)/g);
    // const normalizedValue = value.split(/^[repeat\(\d,\s*\S*\)]/g).map((value) => {
    //   console.log({ value });
    // });

    return value.split(" ");
    // .map(item => {
    //   if(item.includes(''))
    // });
  }

  let rows = getTracks(code[0].value[1].value);
  let columns = getTracks(code[0].value[0].value);

  $: {
    rows = getTracks(code[0].value[1].value);
    columns = getTracks(code[0].value[0].value);
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    <Grid columns={code[0].value[0].value} rows={code[0].value[1].value}>
      {#each rows as _row, rowIndex}
        {#each columns as _column, columnIndex}
          <Item
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
            })()} />
        {/each}
      {/each}
    </Grid>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
