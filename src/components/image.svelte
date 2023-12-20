<script>
  import { base } from "$app/paths";

  /** @type {string} */
  export let ratio = "auto";
  export let useOriginalDimensions = false;
  export let height = "auto";
  export let width = "auto";
  export let minHeight = "none";
  export let maxHeight = "none";
  export let minWidth = "none";
  export let maxWidth = "none";
  export let src = `${base}/assets/image.png`;

  let combinedRatio = "auto";

  $: {
    if (useOriginalDimensions) {
      combinedRatio = `${ratio} auto`;
    } else {
      combinedRatio = ratio;
    }
  }
</script>

<img
  {src}
  alt="Placeholder for examples"
  style:aspect-ratio={combinedRatio}
  style:min-width={minWidth}
  style:max-width={maxWidth}
  style:min-height={minHeight}
  style:max-height={maxHeight}
  style:width
  style:height />

<style>
  img {
    background-color: #eee;
    border-radius: 0.5rem;
    display: block;
    object-fit: cover;
  }
</style>
