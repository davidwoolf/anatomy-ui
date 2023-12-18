<script>
  import { base } from "$app/paths";
  import Card from "@components/playground/card.svelte";
  import { onMount } from "svelte";

  /** @type {string} */
  export let ratio;
  export let useOriginalDimensions = false;
  export let height = "auto";
  export let width = "auto";
  export let minHeight = "none";
  export let maxHeight = "none";
  export let minWidth = "none";
  export let maxWidth = "none";

  const src = `${base}/assets/image.png`;
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
  alt="A cresting wave"
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
