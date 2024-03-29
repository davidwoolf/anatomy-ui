<script>
  export let data;

  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Heading from "@components/text/heading.svelte";
  import Separator from "@components/grid/separator.svelte";
  import Text from "@components/text/text.svelte";
</script>

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
        {#each data.sections.layout.pages as section}
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
        {#each data.sections.typography.pages as section}
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
        <p>
          Color and light provide personality, depth, and tactility to interfaces. With
          multiple color spaces, powerful gradient and composition filter functions,
          element shadows, and inter-color interactions, the possibilities for color on
          the web are now endless.
        </p>
      </Text>

      <ul class="nav">
        {#each data.sections["color-light"].pages as section}
          <li>
            <a href="/foundations/color-light/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Forms</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>
          Forms are the core feature set that separates static sites from interactive
          applications–if implemented correctly.
        </p>
      </Text>

      <ul class="nav">
        {#each data.sections.forms.pages as section}
          <li>
            <a href="/foundations/forms/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>

      <Text>
        <p>more coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Sizing</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>
          Sizing elements, components, and entire pages can seem a daunting task on the
          web–and many units, functions, and ratio values exist to help do just that.
        </p>
      </Text>

      <ul class="nav">
        {#each data.sections.sizing.pages as section}
          <li>
            <a href="/foundations/sizing/{section.slug}">{section.title}</a>
          </li>
        {/each}
      </ul>

      <Text>
        <p>more coming soon</p>
      </Text>
    </Column>

    <Separator />

    <Column column="1" span="3">
      <Heading>Dynamic components</Heading>
    </Column>

    <Column column="5" span="12">
      <Text>
        <p>
          Dynamic components are a common interaction pattern, but are usually hard to
          implement correctly while accounting for flexible design systems and
          accessibility concerns.
        </p>
      </Text>

      <ul class="nav">
        {#each data.sections["dynamic-components"].pages as section}
          <li>
            <a href="/foundations/dynamic-components/{section.slug}">
              {section.title}
            </a>
          </li>
        {/each}
      </ul>
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
  </Grid>
</article>

<svelte:head>
  <title>Foundations — The anatomy of everyday UI</title>
</svelte:head>

<style>
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
    article {
      padding: 6rem;
    }
  }
</style>
