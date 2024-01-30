<script>
  import Text from "@components/text/text.svelte";

  export let data;
</script>

<article>
  <Text>
    <svelte:component this={data.content} />
  </Text>
</article>

<svelte:head>
  <title>{data.slug} — AnatomyKit</title>
</svelte:head>
