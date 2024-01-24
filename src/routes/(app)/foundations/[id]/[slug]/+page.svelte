<script>
  export let data;

  // layout
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Text from "@components/text/text.svelte";
  import Component from "@components/component.svelte";
  import Container from "@components/layout/container.svelte";
  import SectionNav from "./section-nav.svelte";

  function getTitle() {
    return `[Foundations] Issue with page: "${data.title}"`;
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
          <h1>{data.title}</h1>

          {@html data.description}

          {#each data.content as row, index (index)}
            <hr />

            <h2>{row.title}</h2>

            {#if row.text}
              {@html row.text}
            {/if}

            {#if row.component}
              <Component name={row.component} path={data.id} id={data.slug} />
            {/if}

            {#if row.sections}
              {#each row.sections as section}
                <h3>{section.title}</h3>

                {@html section.text}

                {#if section.component}
                  <Component name={section.component} path={data.id} id={data.slug} />
                {/if}
              {/each}
            {/if}
          {/each}

          <hr />

          <a
            class="report-issue"
            target="_blank"
            href={`https://github.com/davidwoolf/anatomy-everyday-ui-site/issues/new?title=${getTitle()}&body=${getDescription()}&labels=documentation`}>
            report issue
          </a>
        </Text>
      </article>
    </Column>
  </Grid>
</Container>

<svelte:head>
  <title>{data.title} — Foundations | AnatomyUI</title>
</svelte:head>
