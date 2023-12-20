<script>
  import GridItem from "@components/grid-sandbox-item.svelte";

  export let areas = "none";
  export let autoFlow = "row";
  export let columns = "1fr";
  export let gap = "0px";
  export let implicitColumnSize = "auto";
  export let implicitRowSize = "auto";
  export let rows = "1fr";
  /** @type {number | undefined} */
  export let items = undefined;

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

  let rowValues = getTracks(rows);
  let columnValues = getTracks(columns);

  $: {
    rowValues = getTracks(rows);
    columnValues = getTracks(columns);
  }
</script>

<div class="preview">
  <span class="label columns">columns</span>
  <span class="label rows">rows</span>
  <div
    class="container"
    style:grid-template-columns={columns}
    style:grid-template-rows={rows}
    style:grid-auto-rows={implicitRowSize}
    style:grid-auto-columns={implicitColumnSize}
    style:grid-auto-flow={autoFlow}
    style:grid-template-areas={areas}
    style:gap>
    {#if items}
      {#each Array.from(Array(items)) as item, index}
        <GridItem
          hideRightBorder={autoFlow === "row" ||
            index === Array.from(Array(items)).length - 1}
          hideBottomBorder={autoFlow === "column" ||
            index === Array.from(Array(items)).length - 1} />
      {/each}
    {:else}
      {#each rowValues as _row, rowIndex}
        {#each columnValues as _column, columnIndex}
          <GridItem
            hideRightBorder={columnIndex === columnValues.length - 1}
            hideBottomBorder={rowIndex === rowValues.length - 1}
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
                if (columnIndex === columnValues.length - 1) {
                  return `${columnIndex + 2}`;
                }
              }
            })()}
            rowAfter={(function () {
              if (columnIndex === 0) {
                if (rowIndex === rowValues.length - 1) {
                  return `${rowIndex + 2}`;
                }
              }
            })()} />
        {/each}
      {/each}
    {/if}
  </div>
</div>

<style>
  .preview {
    position: relative;
  }

  .container {
    border: 1px solid var(--color-purple-400);
    counter-reset: section;
    display: grid;
    width: 100%;
  }

  .label {
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-xxs);
    font-weight: 500;
    text-align: center;
  }

  .label.columns {
    position: absolute;
    inset-block-end: calc(100% + 1rem);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .label.rows {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(100% + 1rem);
    transform: translateY(-50%) rotate(-90deg);
  }
</style>
