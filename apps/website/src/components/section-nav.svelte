<script>
  import {
    AccordionRoot,
    AccordionTrigger,
    AccordionItem,
    AccordionContent,
  } from "@anatomykit/svelte";

  import Collapsible from "@components/collapsible/collapsible.svelte";
  import CollapsibleContent from "@components/collapsible/content.svelte";
  import { onMount } from "svelte";

  /**
   * @typedef Page
   * @property {string} slug
   * @property {string} title
   * @property {boolean} [hidden]
   */

  /**
   * @typedef Data
   * @property {string} id
   * @property {string} name
   * @property {Page[]} [pages]
   */

  /** @type {Record<string, Data>} */
  export let data;
  /** @type {string} */
  export let currentPage;
  /** @type {string} */
  export let open;

  /** @type {string} */
  export let name;

  let navVisible = false;

  function onResize() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      navVisible = true;
    }
  }

  onMount(() => {
    window.addEventListener("resize", onResize);

    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<Collapsible
  open={navVisible}
  onChange={(value) => {
    navVisible = value;
  }}>
  <span class="title">
    <button
      on:click={() => {
        if (!window.matchMedia("(min-width: 1024px)").matches) {
          navVisible = !navVisible;
        }
      }}>
      {name}

      <svg
        style:transform={navVisible ? "rotate(-90deg)" : "rotate(90deg)"}
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L6 5.5L1 10.5" stroke="currentColor" />
      </svg>
    </button>
  </span>

  <CollapsibleContent>
    <nav>
      <AccordionRoot value={open}>
        {#each Object.entries(data).filter(([_, value]) => "pages" in value) as [_, value]}
          <AccordionItem class="item" value={value.id}>
            <AccordionTrigger class="trigger">
              {value.name.replaceAll("-", " ")}

              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5L6 5.5L1 10.5" stroke="currentColor" />
              </svg>
            </AccordionTrigger>

            <AccordionContent class="content">
              <ul>
                {#if value.pages}
                  {#each value.pages as page}
                    <li>
                      <a
                        on:click={() => {
                          if (!window.matchMedia("(min-width: 768px)").matches) {
                            navVisible = false;
                          }
                        }}
                        style:--text-decoration={currentPage ===
                        `/foundations/${value.id}/${page.slug}`
                          ? "underline"
                          : "inherit"}
                        aria-current={currentPage ===
                        `/foundations/${value.id}/${page.slug}`
                          ? "page"
                          : false}
                        href="/foundations/{value.id}/{page.slug}">
                        {page.title}
                      </a>
                    </li>
                  {/each}
                {/if}
              </ul>
            </AccordionContent>
          </AccordionItem>
        {/each}
      </AccordionRoot>
    </nav>
  </CollapsibleContent>
</Collapsible>

<style>
  .title {
    color: var(--color-accent);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    line-height: 1;
  }

  .title :global(button) {
    align-items: center;
    display: flex;
    letter-spacing: -0.025em;
    gap: 0.5rem;
  }

  nav :global(.item) {
    border-block-end: 1px solid var(--color-gray-200);
  }

  nav :global(.item:last-of-type) {
    border-block-end: none;
  }

  nav :global(.item[data-state="open"]) {
    padding-bottom: 0.5rem;
  }

  nav :global(.trigger) {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: var(--font-size-base);
    font-weight: 600;
    justify-content: space-between;
    line-height: 1;
    outline: none;
    padding-block: 1rem;
    position: relative;
    text-align: left;
    width: 100%;
  }

  nav :global(.trigger svg) {
    opacity: 0.5;
  }

  nav :global(.item[data-state="open"] .trigger) {
    border-block-end: 1px solid var(--color-gray-200);
    margin-block-end: 0.5rem;
  }

  nav :global(.trigger:focus-within) {
    text-decoration: underline;
  }

  nav :global(.item[data-state="open"] .trigger svg) {
    transform: rotate(90deg);
  }

  nav :global(.content a) {
    color: color-mix(in srgb, var(--color-gray-800), transparent 20%);
    display: block;
    font-weight: 400;
    line-height: 145%;
    padding-block: 0.375rem;
    text-decoration: var(--text-decoration, none);
  }

  nav :global(.content a:hover) {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    .title {
      font-size: var(--font-size-4xl);
      line-height: 1.75;
    }

    .title :global(svg) {
      display: none;
    }

    nav {
      margin-block-start: 1.5rem;
    }
  }
</style>
