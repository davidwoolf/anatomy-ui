<script lang="ts">
  import "../app.css";
</script>

<div>
  <header class="" />

  <div>
    <slot />
  </div>

  <footer />
</div>

<style lang="postcss">
  :global(body) {
    -webkit-font-smoothing: antialiased;
  }
</style>
