<script>
  import { marked } from "marked";
  import hljs from "highlight.js";
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

      // note: this is the deprecated way of doing this, but is required to work in SvelteKit
      marked.setOptions({
        highlight: function (code, language) {
          const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
          return hljs.highlight(code, { language: validLanguage }).value;
        },
      });

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

<div class="hidden mt-8 sm:block">
  <ProTip>
    <p>click the tags in the interactive DOM tree to learn more</p>
  </ProTip>
</div>

<div class=" gap-12 mt-12 grid-cols-[max-content_1fr] items-center sm:grid">
  <div class="hidden -ml-3.5 sm:block">
    <ul class="tag-tree font-mono text-purple-400 text-lg font-medium">
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

  <div
    class="flex -mx-8 scroll-px-6 px-6 pb-8 overflow-scroll snap-x snap-mandatory sm:grid sm:m-0 sm:p-0">
    {#each $items as item, index (item.name)}
      <Block
        tag={item.name}
        active={$activeTag === item.name || ($activeTag === "" && index === 0)}>
        {@html item.content}
      </Block>
    {/each}
  </div>
</div>

<style lang="postcss">
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
</style>
