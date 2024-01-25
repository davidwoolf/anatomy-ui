<script>
  export let column = "1";
  export let span = "12";
</script>

<div style:--column-start={column} style:--column-span={span}>
  <slot />
</div>

<style>
  @media (min-width: 1024px) {
    div {
      place-items: end;
      grid-column: var(--column-start) / span var(--column-span);
    }
  }
</style>
