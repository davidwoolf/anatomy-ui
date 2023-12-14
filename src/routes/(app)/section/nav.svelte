<script>
  import { createDropdownMenu } from "@melt-ui/svelte";

  /** @type {import("./$types").LayoutData} */
  export let data;

  const {
    elements: { trigger, menu, item, separator, arrow },
    states: { open },
  } = createDropdownMenu({
    forceVisible: true,
    loop: true,
  });
</script>

<button
  type="button"
  class="trigger"
  {...$trigger}
  use:trigger
  aria-label="Open navigation">
  <svg
    width="26"
    height="19"
    viewBox="0 0 26 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1.5H25M25 9.5H6.6M25 17.5H1"
      stroke="#0F172A"
      stroke-width="1.5"
      stroke-linecap="round" />
  </svg>
</button>

{#if $open}
  <nav class="menu" {...$menu} use:menu>
    <ul>
      <li>
        <a href="/section/layout" class="item" {...$item} use:item>Layout</a>

        <div class="separator" {...$separator} use:separator />

        <ul class="sub-menu">
          {#each data.sections as section, index (section.slug)}
            <li>
              <a href="/section/layout/{section.slug}" class="item" {...$item} use:item
                >{section.title}</a>

              {#if index !== data.sections.length - 1}
                <div class="separator" {...$separator} use:separator />
              {/if}
            </li>
          {/each}
        </ul>
      </li>

      <div {...$arrow} use:arrow />
    </ul>
  </nav>
{/if}

<style>
  nav {
    background-color: white;
    border: 2px solid var(--color-gray-300);
    max-block-size: 80vh;
    overflow: scroll;
    width: 16rem;
  }

  .separator {
    border-block-end: 2px solid var(--color-gray-300);
  }

  a {
    display: block;
    font-size: var(--font-size-base);
    font-weight: 500;
    padding: 0.5rem 1rem;
  }

  .sub-menu a {
    padding-inline-start: 2rem;
  }
</style>
