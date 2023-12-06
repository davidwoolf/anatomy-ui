<script lang="ts">
  import "../../app.css";
</script>

<slot />

<footer />

<style lang="postcss">
  :global(body) {
    -webkit-font-smoothing: antialiased;
    @apply text-gray-800;
  }
</style>
