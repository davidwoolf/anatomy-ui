<script>
  import { createSlider } from "@melt-ui/svelte";

  /** @type {import("svelte/store").Writable<number[]>} */
  export let value;

  export let min = 0;
  export let max = 100;
  export let step = 1;

  const {
    elements: { root, range, thumb },
  } = createSlider({
    value,
    min,
    max,
    step,
  });
</script>

<div class="container">
  <span class="bounds">{min}px</span>

  <div {...$root} use:root class="range">
    <div class="track">
      <div {...$range} use:range class="track-fill" />
    </div>

    <div {...$thumb()} use:thumb class="disc" />
  </div>

  <span class="bounds">{max}px</span>
</div>

<style>
  .container {
    align-items: center;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    gap: 1rem;
    width: 10rem;
  }

  .range {
    align-items: center;
    display: flex;
    height: 1.25rem;
    position: relative;
  }

  .track {
    background: var(--color-gray-300);
    border-radius: 4px;
    block-size: 0.125rem;
    position: relative;
    width: 100%;
  }

  .track-fill {
    background-color: var(--color-purple-400);
    height: 100%;
  }

  .disc {
    background: linear-gradient(
        180deg,
        rgba(241, 241, 249, 0) 0%,
        rgba(241, 241, 249, 0.3) 100%
      ),
      #fff;
    border: 2px solid var(--color-purple-400);
    box-shadow: 0px 2px 3px rgba(151, 71, 255, 0.18);
    display: block;
    border-radius: 9999px;
    block-size: 1.25rem;
    inline-size: 1.25rem;
  }

  .bounds {
    color: var(--color-gray-800);
    font-size: 0.625rem;
    font-weight: 400;
    opacity: 0.7;
    text-align: center;
  }
</style>
