<script>
  import Card from "@components/playground/card.svelte";
  import { onMount } from "svelte";
  const stylesheet = () => import("./pacifico/style.css");
  let enabled = true;

  onMount(() => {
    setTimeout(() => {
      stylesheet();
    }, 1000);

    const params = new URLSearchParams(window.location.search);

    if (params.get("enabled") === "true") {
      enabled = true;
    } else {
      enabled = false;
    }
  });
</script>

<div class="container">
  <Card maxWidth="24rem">
    <div
      class="text"
      style:--family={enabled ? '"Pacifico", cursive' : '"Pacifico", sans-serif'}>
      <h2>Font fallbacks in action</h2>

      <span>
        Toggle the font fallback setting and see how it affects layout shift once fonts
        are loaded.
      </span>

      <span>The result here can seem small, but is compounded with lots of text.</span>

      <span>Fonts are loaded 1 second after the preview.</span>
    </div>
  </Card>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .text {
    font-family: var(--family, "Pacifico", cursive);
  }

  h2,
  span {
    display: block;
    font-family: inherit;
  }

  span {
    margin-block-start: 0.5rem;
  }
</style>
