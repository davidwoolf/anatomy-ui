<script>
  export let data;

  // layout
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Text from "@components/text/text.svelte";
  import Container from "@components/layout/container.svelte";
  import SectionNav from "@components/section-nav.svelte";

  function getTitle() {
    return `[Foundations] Issue with page: "${data.meta.title}"`;
  }

  function getDescription() {
    return `--- url: https://anatomyui.com/foundations/${data.id}/${data.slug} ---`;
  }
</script>

<Container>
  <Grid>
    <Column column="1" span="2">
      <aside>
        <SectionNav
          name="Foundations"
          open={data.id}
          data={data.sections}
          currentPage="/foundations/{data.id}/{data.slug}" />
      </aside>
    </Column>

    <Column column="4" span="9">
      <article>
        <Text>
          <h1>{data.meta.title}</h1>

          <svelte:component this={data.content} />

          <hr />

          <footer>
            <a
              class="report-issue"
              target="_blank"
              href={`https://github.com/davidwoolf/anatomy-everyday-ui-site/issues/new?title=${getTitle()}&body=${getDescription()}&labels=documentation`}>
              report issue
            </a>

            {#if data.next && !data.next?.hidden}
              <a class="next-section" href="/foundations/{data.id}/{data.next.slug}">
                {data.next.title}
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 4.5H10.6M10.6 4.5L6.45882 0.5M10.6 4.5L6.45882 8.5"
                    stroke="currentcolor"
                    stroke-linecap="round" />
                </svg>
              </a>
            {/if}
          </footer>
        </Text>
      </article>
    </Column>
  </Grid>
</Container>

<svelte:head>
  <title>{data.meta.title} — Foundations | AnatomyUI</title>
</svelte:head>

<style>
  :global(:root) {
    --color-accent: var(--color-purple-400);
  }

  footer {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: space-between;
  }

  .next-section {
    align-items: center;
    border: 2px solid color-mix(in srgb, var(--color-gray-300), white 50%);
    border-radius: 9999px;
    display: flex;
    font-size: var(--font-size-base);
    font-weight: 500;
    inline-size: max-content;
    gap: 0.5rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    transition: all 75ms ease;
  }

  .next-section:hover {
    background-color: color-mix(in srgb, var(--color-gray-300), white 50%);
  }

  .report-issue {
    font-size: var(--font-size-sm);
    display: block;
    opacity: 0.6;
    text-align: center;
    text-decoration: underline;
  }

  @media (min-width: 640px) {
    footer {
      flex-direction: row;
    }
  }
</style>
