<script>
  import Column from "./column.svelte";
</script>

<Column column="1" span="12">
  <div role="none" inert />
</Column>

<style>
  div {
    block-size: 1.5rem;
  }

  @media (min-width: 768px) {
    div {
      block-size: 3rem;
    }
  }
</style>
