<script>
  import { base } from "$app/paths";
  import HorizontalBounds from "./horizontal-bounds.svelte";
  import VerticalBounds from "./vertical-bounds.svelte";

  const outline = `${base}/assets/lines.png`;

  export let aspectRatio = "1 / 1";
  export let columnGap = "24px";
  export let fontFamily = "var(--font-sans)";
  export let image = `${base}/assets/image.png`;
  export let padding = "24px";
  export let rowGap = "12px";
  export let height = "auto";
  export let width = "auto";
  /** @type {("padding" | "gaps")[]} */
  export let showHighlights = [];

  let columnNumber = columnGap.replace(/[\d]/g, "");
  let rowNumber = rowGap.replace(/[\d]/g, "");

  $: {
    columnNumber = columnGap.replace(/[\D]/g, "");
    rowNumber = rowGap.replace(/[\D]/g, "");
  }
</script>

<div
  class="card-wrapper"
  style:font-family={fontFamily}
  style:padding
  style:inline-size={width}
  style:block-size={height}
  style:background-image={showHighlights.includes("padding")
    ? `url(${outline})`
    : "none"}>
  {#if showHighlights.includes("padding")}
    <div class="padding padding-top" style:height={padding}>
      <span>{padding}</span>
    </div>

    <div class="padding padding-left" style:height={padding} style:width={padding}>
      <span>{padding}</span>
    </div>

    <div class="padding padding-right" style:height={padding} style:width={padding}>
      <span>{padding}</span>
    </div>

    <div class="padding padding-bottom" style:height={padding}>
      <span>{padding}</span>
    </div>
  {/if}

  <div class="card" style:column-gap={columnGap} style:row-gap={rowGap}>
    <img
      style:aspect-ratio={aspectRatio}
      src={image}
      alt="Placeholder for an example card." />

    <h2>Book Summary</h2>

    <div class="content">
      {#if columnNumber !== "0" && showHighlights.includes("gaps")}
        <div class="column-gap" style:width={columnGap}>
          <HorizontalBounds size={columnGap} />
        </div>
      {/if}

      {#if rowNumber !== "0" && showHighlights.includes("gaps")}
        <div class="row-gap" style:height={rowGap}>
          <VerticalBounds size={rowGap} />
        </div>
      {/if}

      <p>
        In the spring he sailed for Athens, and arrived at the island of Ios, now Ino,
        where he fell extremely ill, and died.
      </p>
    </div>
  </div>
</div>

<style>
  .card-wrapper {
    background-color: white;
    background-size: 500px auto;
    border-radius: 1rem;
    container-type: inline-size;
    position: relative;
    max-inline-size: 100%;
  }

  .card {
    background-color: white;
    display: grid;
    overflow: hidden;
    text-align: center;
    block-size: 100%;
    inline-size: 100%;
  }

  .card img {
    border-radius: 0.5rem;
    margin: 0 auto;
    max-inline-size: 10rem;
    inline-size: 100%;
  }

  .card h2 {
    display: flex;
    align-items: flex-end;
    font-size: var(--font-size-lg);
    font-weight: 600;
    justify-content: center;
    line-height: 1;
  }

  .card .content {
    position: relative;
  }

  .card p {
    font-size: var(--font-size-sm);
    line-height: 145%;
  }

  @container (min-inline-size: 20rem) {
    .card {
      grid-template-columns: 7.5rem 1fr;
      grid-template-rows: auto auto;
      text-align: left;
    }

    .card img {
      grid-row: 1 / -1;
      max-inline-size: 100%;
    }

    .card h2 {
      grid-row: 1;
      grid-column: 2;
      justify-content: flex-start;
    }

    .card .content {
      grid-column: 2;
      grid-row: 2;
    }
  }

  /* highlights */
  .padding {
    align-items: center;
    display: flex;
    position: absolute;
  }

  .padding span {
    align-items: center;
    background-color: white;
    color: var(--color-green-400);
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    height: 100%;
    padding: 0 0.5rem;
  }

  .padding-top {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .padding-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .padding-left {
    left: 0;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
  }

  .padding-left span {
    transform: rotate(-90deg);
  }

  .padding-right {
    justify-content: center;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .padding-right span {
    transform: rotate(90deg);
  }

  .column-gap {
    right: 100%;
    top: 0;
    position: absolute;
  }

  .row-gap {
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
</style>
