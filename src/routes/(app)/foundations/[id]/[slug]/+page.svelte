<script lang="ts">
  // data
  import type { PageData } from "./$types";
  export let data: PageData;

  // layout
  import Title from "@components/title.svelte";
  import Description from "@components/description.svelte";
  import Layout from "@components/layout.svelte";
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Heading from "@components/text/heading.svelte";
  import Text from "@components/text/text.svelte";
  import Separator from "@components/grid/separator.svelte";
  import Row from "@components/grid/row.svelte";
  import Box from "@components/box.svelte";
  import Spacer from "@components/grid/spacer.svelte";
</script>

<div class="breadcrumbs">
  <ul>
    <li>Foundations</li>
    <li class="breadcrumb--divider" aria-hidden>/</li>
    <li>{data.id}</li>
    <li class="breadcrumb--divider" aria-hidden>/</li>
    <li class="breadcrumb--current">{data.title}</li>
  </ul>
</div>

<article>
  <Layout>
    <svelte:fragment slot="head">
      <Title>{data.title}</Title>

      <Description>
        {@html data.description}
      </Description>

      {#if data.next}
        <a class="next-section" href={data.next.slug}>
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
    </svelte:fragment>

    <svelte:fragment slot="contents">
      <Grid>
        {#each data.content as row, index (index)}
          {#if index !== 0}
            <Separator />
          {/if}
          <Column column="1" span="3">
            <Heading>{row.title}</Heading>
          </Column>

          <Column column="5" span="9">
            <Text>
              {#if row.text}
                {@html row.text}
              {/if}
            </Text>

            {#if row.component}
              <Spacer />
              {#await import(/* @vite-ignore */ `../../../../../../src/examples/${data.id}/${row.component}`) then module}
                <svelte:component this={module.default} />
              {/await}
            {/if}
          </Column>

          {#if row.sections}
            {#each row.sections as section, index}
              <Spacer />

              <Row>
                <Column column={index % 2 === 0 ? "9" : "1"} span="4">
                  <Box
                    paddingLeading={index % 2 === 0 ? "3rem" : "0"}
                    paddingTrailing={index % 2 === 0 ? "0" : "3rem"}>
                    <Text>
                      <h2>{section.title}</h2>

                      {@html section.text}
                    </Text>
                  </Box>
                </Column>

                <Column column={index % 2 === 0 ? "1" : "5"} span="8">
                  {#if section.component}
                    {#await import(/* @vite-ignore */ `../../../../../../src/examples/${data.id}/${section.component}`) then module}
                      <svelte:component this={module.default} />
                    {:catch error}
                      <p style="color: red">Cannot find example</p>
                    {/await}
                  {/if}
                </Column>
              </Row>
            {/each}
          {/if}
        {/each}
      </Grid>
    </svelte:fragment>
  </Layout>
</article>

<style>
  .breadcrumbs {
    display: flex;
    font-size: 0.875rem;
    padding: 0.25rem 1.5rem 0;
  }

  .breadcrumbs ul {
    display: flex;
    gap: 0.5rem;
  }

  .breadcrumbs li {
    opacity: 0.6;
    text-transform: capitalize;
  }

  .breadcrumbs .breadcrumb--divider {
    opacity: 0.3;
  }

  .breadcrumbs .breadcrumb--current {
    opacity: 1;
    text-transform: revert;
  }

  .next-section {
    align-items: center;
    border: 2px solid color-mix(in srgb, var(--color-gray-300), white 50%);
    border-radius: 9999px;
    display: flex;
    font-size: var(--font-size-base);
    font-weight: 500;
    gap: 0.5rem;
    margin: 2rem 0 0;
    width: max-content;
    padding: 0.5rem 1rem;
    transition: all 75ms ease;
  }

  .next-section:hover {
    background-color: color-mix(in srgb, var(--color-gray-300), white 50%);
  }

  article {
    padding: 3rem 1.5rem;
    margin: 0 auto;
    max-width: 90rem;
  }

  @media (min-width: 768px) {
    article {
      padding: 6rem 4rem;
    }
  }

  @media (min-width: 1024px) {
    .breadcrumbs {
      padding: 0.25rem 2rem 0;
    }

    .next-section {
      margin: 2rem auto 0;
    }

    article {
      padding: 6rem;
    }
  }
</style>
