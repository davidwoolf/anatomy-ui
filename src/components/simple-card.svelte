<script>
  export let backgroundColor = "white";
  export let color = "var(color-gray-800)";
  export let width = "auto";
</script>

<div class="simple-card" style:background-color={backgroundColor} style:color>
  <slot>
    <h2 style:inline-size={width}>Book excerpt</h2>

    <p style:inline-size={width}>
      Dorothy leaned her chin upon her hand and gazed thoughtfully at the Scarecrow. Its
      head was a small sack stuffed with straw, with eyes, nose, and mouth painted on it
      to represent a face.
    </p>
  </slot>
</div>

<style>
  .simple-card {
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    padding: 1.5rem;
    text-align: initial;
  }

  :global(.simple-card h2) {
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 1;
  }

  :global(.simple-card p, .simple-card li) {
    font-size: var(--font-size-sm);
    /* line-height: 145%; */
  }

  :global(.simple-card ul) {
    list-style: disc;
    list-style-position: inside;
  }

  :global(.simple-card h2 + p) {
    margin: 0.75rem 0 0;
  }
</style>
