<script>
  import { base } from "$app/paths";
  import Card from "@components/playground/card.svelte";

  let src = `${base}/layout/layout-shift/image.jpeg`;
  export let enabled = true;
</script>

<div
  class="container"
  style:inline-size={enabled ? "100%" : "19.2rem"}
  style:transform={enabled ? "scale(80%)" : "scale(100%)"}
  style:animation-name={enabled ? "transforms" : "composites"}>
  <Card maxWidth="24rem">
    <img {src} alt="A cresting wave" />

    <p>
      Toggle the transform animations setting and see how it affects layout shift when an
      image is loaded.
    </p>
  </Card>
</div>

<style>
  .container {
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    display: flex;
    justify-content: center;
  }

  img {
    aspect-ratio: 16 / 9;
    background-color: #eee;
    max-block-size: 171px;
    width: 100%;
  }
</style>
