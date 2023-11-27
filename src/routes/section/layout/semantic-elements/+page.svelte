<script lang="ts">
  import { writable } from "svelte/store";
  import type { PageData } from "./$types";
  export let data: PageData;

  import HTMLCode from "@components/html-code.svelte";
  import ProTip from "@components/pro-tip.svelte";
  import SectionHead from "@components/section-head.svelte";
  import Tag from "./tag.svelte";
  import Block from "./block.svelte";
  import Citations from "@components/citations.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import CodeSample from "@components/code-sample.svelte";

  const activeTag = writable("body");

  console.log({ data });
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

  {#each data.items as item (item.name)}
    <Block tag={item.name}>
      {@html item.content}
    </Block>
  {/each}

  {#if $activeTag === "test"}
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

      <div class="mt-4">
        <Citations
          data={[
            {
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header#usage_notes",
              label: "MDN — Header element",
            },
            {
              link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role",
              label: "MDN – ARIA Banner role",
            },
          ]} />
      </div>
    </Block>
  {/if}

  {#if $activeTag === "nav"}
    <Block tag="nav">
      <p>
        For a group of navigation links, use the <HTMLCode>nav</HTMLCode> element. Ensure you
        use this element sparingly for core navigation relevant to a page. Ancillary links
        in elements such as <HTMLCode>footer</HTMLCode> don’t need to be wrapped in a nav element
        unless they include a set of related links for the page.
      </p>

      <p>
        When adding multiple <HTMLCode>nav</HTMLCode> elements to a page, use the
        <AttributeCode>aria-labelledby</AttributeCode>
        attribute, in combination with a text level element and matching <AttributeCode
          >id</AttributeCode> attribute to distinguish between them:
      </p>

      <CodeSample
        language="html"
        value={`
      <header>
	<nav aria-labelledby="site-navigation">
		<h2 id="site-navigation">Site links</h2>
		<!-- links -->
	</nav>
</header>

<article>
	<aside>
		<nav aria-labelledby="resource-navigation">
			<h2 id="resource-navigation">Additional resources</h2>
			<!-- links -->
		</nav>
	</aside>
</article>
      `} />

      <div class="mt-4">
        <Citations
          data={[
            {
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content",
              label: "MDN — Labeling Section Content",
            },
          ]} />
      </div>
    </Block>
  {/if}

  {#if $activeTag === "main"}
    <Block tag="main">
      <p>
        The <HTMLCode>main</HTMLCode> element should wrap the core functionality of a page.
        Similar to the <HTMLCode>body</HTMLCode> element, main has some restrictions on its
        usage. Only one main element should be present and marked as visible. When including
        a “skip to main content” feature for keyboard navigation, it’s recommended to target
        the main element.
      </p>
      <p>
        Avoid including app-level UI such as global headers, navigation, and footers
        inside of the <HTMLCode>main</HTMLCode> element unless they are the primary function
        of the specific page.
      </p>
      <p>
        For older browsers, you can add the <AttributeCode>role="main"</AttributeCode> attribute
        to a
        <HTMLCode>div</HTMLCode> element instead to get similar semantic meaning. However,
        defer to using available elements rather than roles when possible.
      </p>

      <div class="mt-4">
        <Citations
          data={[
            {
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#usage_notes",
              label: "MDN — Main element",
            },
          ]} />
      </div>
    </Block>
  {/if}

  {#if $activeTag === "section"}
    <Block tag="section">
      <p>
        The <HTMLCode>section</HTMLCode> element sits one level above <HTMLCode
          >div</HTMLCode> semantically, but is considered a catch all element when a more descriptive
        element like <HTMLCode>header</HTMLCode>, <HTMLCode>nav</HTMLCode>, or <HTMLCode
          >article</HTMLCode> doesn’t make sense. What differentiates section from div is that
        it semantically describes a standalone area of a document. Because of this, it is highly
        recommended to include a heading level text element within every section. If this feels
        heavy handed, then you most likely want to use a div.
      </p>

      <div class="mt-4">
        <Citations
          data={[
            {
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section",
              label: "MDN — Section element",
            },
          ]} />
      </div>
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
