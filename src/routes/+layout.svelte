<script lang="ts">
  import "../app.css";
</script>

<div>
  <header class="" />

  <slot />

  <footer />
</div>

<style lang="postcss">
  :global(body) {
    -webkit-font-smoothing: antialiased;
    @apply text-gray-800;
  }
</style>
