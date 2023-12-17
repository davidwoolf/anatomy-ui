<script>
  import { marked } from "marked";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Grid from "@components/grid/grid.svelte";
  import Separator from "@components/grid/separator.svelte";
  import Column from "@components/grid/column.svelte";
  import Heading from "@components/text/heading.svelte";
  import Text from "@components/text/text.svelte";

  async function getItems() {
    let items = [
      "body",
      "header",
      "nav",
      "main",
      "section",
      "article",
      "aside",
      "div",
      "footer",
    ];

    /** @type Array<{name: string, content: string}> */
    let formatted = [];

    for (const item of items) {
      const res = await fetch(`/layout/semantic-elements/${item}.md`);

      if (res.status !== 200) {
        continue;
      }
      let post = await res.text();

      // grab all of the matching citations
      const references = post.match(/\[citation\]\((\w|:|\/|\.|-|#)*\)/g);

      /** @type Array<string> */
      let links = [];

      if (references) {
        for (let index = 0; index < references.length; index++) {
          const formattedValue = references[index].replace("citation", String(index + 1));

          // grab the link for later
          const link = references[index].match(/(https:\/\/)(\w|:|\/|\.|-|#)*/g);

          if (link) {
            links = links.concat([link[0]]);
          }

          post = post.replace(references[index], `<sup>${formattedValue}</sup>`);
        }
      }

      formatted = formatted.concat([
        {
          name: item,
          content: marked.parse(post, { mangle: false, headerIds: false }),
        },
      ]);
    }

    return formatted;
  }

  const activeTag = writable("");
  const items = writable([{ name: "", content: "" }]);

  onMount(async () => {
    activeTag.set(window.location.hash.replace("#", ""));

    history.replaceState = function () {
      activeTag.set(window.location.hash.replace("#", ""));
    };

    const elements = await getItems();
    items.set(elements);
  });
</script>

<Grid>
  {#each $items as item, index (item.name)}
    {#if index !== 0}
      <Separator />
    {/if}

    <Column column="1" span="3">
      <Heading>{item.name}</Heading>
    </Column>

    <Column column="5" span="9">
      <Text size="large">
        {@html item.content}
      </Text>
    </Column>
  {/each}
</Grid>

<!-- <style lang="postcss">
  .container {
    margin-block-start: 2rem;
  }

  .tag-tree {
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-lg);
    font-weight: 500;
  }
  .tag-tree ul {
    @apply border-l-2 border-gray-200 ml-3.5 pl-2;
  }

  .tag-tree li {
    @apply leading-none relative top-3 pl-4;
  }

  .tag-tree ul li {
    @apply mb-5;
  }

  .tag-tree ul li:first-child {
    @apply mt-0;
  }

  .tag-tree ul li:before {
    content: "";
    @apply absolute
    right-full
    bg-gray-200
    h-0.5
    top-3
    -mr-3
    w-5;
  }

  .block-container {
    display: flex;
    margin-inline: -2rem;
    scroll-padding: 0 1.5rem;
    padding: 0 1.5rem 2rem;
    overflow: scroll;
    scroll-snap-type: x mandatory;
  }

  @media (min-width: 640px) {
    .container {
      align-items: center;
      display: grid;
      gap: 3rem;
      grid-template-columns: max-content 1fr;
    }

    .block-container {
      margin: 0;
      display: grid;
      padding: 0;
    }
  }
</style> -->
