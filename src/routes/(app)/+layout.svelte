<script lang="ts">
  import "../../embed-reset.css";
  import "../../app.css";
</script>

<slot />

<footer />

<style>
  :global(body) {
    -webkit-font-smoothing: antialiased;
    color: var(--color-gray-800);
    font-family: var(--font-sans);
  }
</style>
