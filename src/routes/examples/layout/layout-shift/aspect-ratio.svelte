<script>
  import { base } from "$app/paths";
  import Card from "@components/playground/card.svelte";
  import { onMount } from "svelte";

  let src = "";
  export let enabled = true;

  onMount(() => {
    setTimeout(() => {
      src = `${base}/layout/layout-shift/image.jpeg`;
    }, 500);
  });
</script>

<div class="container">
  <Card maxWidth="24rem">
    <img {src} alt="A cresting wave" style:aspect-ratio={enabled ? "16 / 9" : "revert"} />

    <p>
      Toggle the aspect ratio setting and see how it affects layout shift when an image is
      loaded.
    </p>
  </Card>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  img {
    background-color: #eee;
    max-block-size: 171px;
    width: 100%;
  }
</style>
