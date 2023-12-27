<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

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
    <Column column="1" span="3">
      <Heading>Layout</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>
          Well defined layouts on the web are no easy task. Many decisions, across
          multiple components, need to sync up for proper alignment, spacing, and
          hierarchy on devices big and small. In addition, semantically accurate elements
          need to be properly used for screen readers and search engine crawlers—sometimes
          in a specific order.
        </p>
      </Text>
      <ul class="nav">
        {#each data.layout as section}
          <li>
            <a href="/foundations/layout/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Typography</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>
          Typography is a crucial part of any interface, and the web comes with an immense
          number of tags, styling choices, and recommendations when it comes to handling
          text.
        </p>
      </Text>

      <ul class="nav">
        {#each data.typography as section}
          <li>
            <a href="/foundations/typography/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Color and light</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Animation</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Media</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Forms</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Sizing</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>Coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Extras</Heading>
    </Column>

    <Column column="5" span="12">
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
    column-count: 1;
    column-gap: 2rem;
    padding-block-start: 2.75rem;
  }

  .nav li {
    break-inside: avoid;
  }

  .nav a {
    display: inline-block;
    font-size: var(--font-size-xl);
    font-weight: 500;
    padding: 0.5rem 0;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    text-decoration-color: var(--color-gray-300);
  }

  .nav a:hover {
    text-decoration: none;
  }

  article {
    padding: 3rem 1.5rem;
    margin: 0 auto;
    max-width: 90rem;
  }

  @media (min-width: 768px) {
    .nav {
      column-count: 2;
    }

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
