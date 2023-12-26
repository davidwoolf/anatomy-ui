<script>
  export let width = "auto";
</script>

<div class="simple-card">
  <slot>
    <h2 style:width>Book Summary</h2>

    <p style:width>
      In the spring he sailed for Athens, and arrived at the island of Ios, now Ino, where
      he fell extremely ill, and died.
    </p>
  </slot>
</div>

<style>
  .simple-card {
    background-color: white;
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    padding: 1.5rem;
    text-align: left;
  }

  :global(.simple-card h2) {
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 1;
  }

  :global(.simple-card p, .simple-card li) {
    font-size: var(--font-size-sm);
    line-height: 145%;
  }

  :global(.simple-card ul) {
    list-style: disc;
    list-style-position: inside;
  }

  :global(.simple-card h2 + p) {
    margin: 0.75rem 0 0;
  }
</style>
