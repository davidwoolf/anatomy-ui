<script lang="ts">
  import { derived, writable } from "svelte/store";
  import type { PageData } from "./$types";
  export let data: PageData;

  import ProTip from "@components/pro-tip.svelte";
  import SectionHead from "@components/section-head.svelte";
  import Tag from "./tag.svelte";
  import Block from "./block.svelte";
  import { onMount } from "svelte";

  const activeTag = writable("");

  onMount(() => {
    activeTag.set(window.location.hash.replace("#", ""));

    history.replaceState = function () {
      activeTag.set(window.location.hash.replace("#", ""));
    };
  });
</script>

<SectionHead>
  <h1>Semantic elements</h1>
  <p>
    Layout helps define the hierarchy and flow of content in interfaces. While styling
    does this visually, section level elements including divs, headers, and footers help
    semantically describe your interface.
  </p>
</SectionHead>

<div class="mt-8">
  <ProTip>
    <p>click the tags in the interactive DOM tree to learn more</p>
  </ProTip>
</div>

<div class=" gap-12 mt-12 grid-cols-[max-content_1fr] items-center sm:grid">
  <div class="hidden -ml-3.5 sm:block">
    <ul class="tag-tree font-mono text-purple-400 text-lg font-medium">
      <li>
        <Tag active={activeTag} name="body" />

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
    {#each data.items as item (item.name)}
      <Block tag={item.name} active={$activeTag === item.name}>
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
