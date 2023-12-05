<script>
  import { base } from "$app/paths";
  import Card from "@components/playground/card.svelte";
  import { onMount } from "svelte";

  let src = "";
  let enabledAspectRatio = true;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("enabledAspectRatio") === "true") {
      enabledAspectRatio = true;
    } else {
      enabledAspectRatio = false;
    }

    setTimeout(() => {
      src = `${base}/layout/layout-shift/image.jpeg`;
    }, 500);
  });
</script>

<div class="container">
  <Card maxWidth="24rem">
    <img
      {src}
      alt="A cresting wave"
      style:aspect-ratio={enabledAspectRatio ? "16 / 9" : "revert"} />

    <h2>Layout shift in action</h2>
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
