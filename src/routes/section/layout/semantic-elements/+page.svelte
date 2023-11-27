<script lang="ts">
  import { writable } from "svelte/store";

  import HTMLCode from "@components/html-code.svelte";
  import ProTip from "@components/pro-tip.svelte";
  import SectionHead from "@components/section-head.svelte";
  import Tag from "./tag.svelte";
  import Block from "./block.svelte";

  const activeTag = writable("body");
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

<div class="grid gap-12 mt-12 grid-cols-[max-content_1fr] items-center">
  <div class="-ml-3.5">
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

  {#if $activeTag === "body"}
    <Block tag="body">
      <p>
        All <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content"
          target="_blank">flow content</a> can be added to the body element which can only
        be declared once in an HTML file. Flow content includes presentational elements and
        things like scripts.
      </p>
    </Block>
  {/if}
  {#if $activeTag === "header"}
    <Block tag="header">
      <p>
        The <HTMLCode>header</HTMLCode> element can be used both globally and within sections.
        When used outside of other sectioning elements, it acts as the landmark role. This
        means a top-level header element used between pages and including site information
        and links is different from a header element used inside of an element like
        <HTMLCode>article</HTMLCode>.
      </p>

      <ul class="text-xs underline">
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header#usage_notes"
            >MDN — Header element</a>
        </li>

        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role"
            >MDN – ARIA Banner role</a>
        </li>
      </ul>
    </Block>
  {/if}
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
