<script lang="ts">
  // data
  import type { PageData } from "./$types";
  export let data: PageData;

  // layout
  import Title from "@components/title.svelte";

  import Layout from "@components/layout.svelte";
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Heading from "@components/text/heading.svelte";
  import Separator from "@components/grid/separator.svelte";
  import Text from "@components/text/text.svelte";
</script>

<div class="breadcrumbs">
  <ul>
    <li>Foundations</li>
  </ul>
</div>

<article>
  <Grid>
    <Column column="1" span="6">
      <Heading>Layout</Heading>

      <Text>
        <p>
          Well defined layouts on the web are no easy task. Many decisions, across
          multiple components, need to sync up for proper alignment, spacing, and
          hierarchy on devices ranging from phones to televisions. In addition,
          semantically accurate elements need to be properly used for screen readers and
          search engine crawlers—sometimes in a specific order.
        </p>
      </Text>
    </Column>

    <Column column="8" span="12">
      <div class="nav">
        {#each data.sections as section}
          <a href="/foundations/layout/{section.slug}">{section.title}</a>
        {/each}
      </div>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Typography</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Color and light</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Animation</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Media</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Forms</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Sizing</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="6">
      <Heading>Extras</Heading>

      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>
  </Grid>
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

  .nav {
    display: flex;
    flex-direction: column;
    padding-block-start: 2.75rem;
    gap: 0.5rem;
  }

  .nav a {
    font-size: var(--font-size-xl);
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    text-decoration-color: var(--color-gray-300);
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

    article {
      padding: 6rem;
    }
  }
</style>
