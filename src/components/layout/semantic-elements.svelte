<script>
  import { marked } from "marked";
  import { writable } from "svelte/store";
  import ProTip from "@components/pro-tip.svelte";
  import Tag from "@components/tag.svelte";
  import Block from "@components/block.svelte";
  import { onMount } from "svelte";

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

<div>
  <div class="hidden -mt-8 sm:block">
    <ProTip>
      <p>click the tags in the interactive DOM tree to learn more</p>
    </ProTip>
  </div>

  <div class="container">
    <div class="hidden -ml-3.5 sm:block">
      <ul class="tag-tree">
        <li>
          <Tag active={activeTag} name="body" defaultActive={true} />

          <ul>
            <li>
              <Tag active={activeTag} name="header" />
              <ul>
                <li>
                  <Tag active={activeTag} name="nav" />
                </li>
              </ul>
            </li>
            <li>
              <Tag active={activeTag} name="main" />

              <ul>
                <li>
                  <Tag name="section" active={activeTag} />
                </li>
                <li>
                  <Tag name="article" active={activeTag} />
                </li>
                <li>
                  <Tag name="aside" active={activeTag} />
                </li>
                <li>
                  <Tag name="div" active={activeTag} />
                </li>
              </ul>
            </li>
            <li>
              <Tag name="footer" active={activeTag} />
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="block-container">
      {#each $items as item, index (item.name)}
        <Block
          tag={item.name}
          active={$activeTag === item.name || ($activeTag === "" && index === 0)}>
          {@html item.content}
        </Block>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
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
</style>
