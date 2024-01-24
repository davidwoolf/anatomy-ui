<script>
  import Text from "@components/text/text.svelte";
  export let data;
</script>

<article>
  <Text>
    <h1>Component: {data.slug}</h1>
  </Text>

  <!-- <div /> -->
</article>

<svelte:head>
  <title>{data.slug} — AnatomyKit</title>
</svelte:head>

<style>
  div {
    background-color: blue;
    position: absolute;
    height: 1px;
    left: 0;
    top: 195px;
    width: 100%;
  }
</style>
