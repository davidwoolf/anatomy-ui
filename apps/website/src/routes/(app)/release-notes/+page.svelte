<script lang="ts">
  import Separator from "@components/separator.svelte";
  import Heading from "@components/text/heading.svelte";
</script>

<svelte:head>
  <title>Release notes — The anatomy of everyday UI</title>
</svelte:head>

<article>
  <Heading level="1">Release notes</Heading>

  <div class="stack">
    <div>
      <h2>
        <time>2024-01-30</time>
      </h2>

      <ul>
        <li>Replaced marked and highlight packages with MDsevX</li>
        <li>
          Consolidated all .json and .md files used for foundational content. Each section
          is now one .md file powered by MDsevX
        </li>
        <li>
          Removed original component file used to import all examples manually in favor of
          inlined MDsevX imports
        </li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-25</time>
      </h2>

      <ul>
        <li>Converted project into a monorepo structure with Turborepo</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-24</time>
      </h2>

      <ul>
        <li>Added sidebar navigation for “Foundations” pages</li>
        <li>
          Changed content display logic to be more CSS driven, simplifying formatting
          logic and making it more flexible for multiple use cases
        </li>
        <li>Improved spacing and readability for headings</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-09</time>
      </h2>

      <ul>
        <li>Added panning and scaling for examples</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-08</time>
      </h2>

      <ul>
        <li>Upgraded SvelteKit to 2.x</li>
        <li>Interactive examples for Dynamic Components under “Foundations”</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-07</time>
      </h2>

      <ul>
        <li>Interactive examples for Buttons sections under “Foundations”</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2024-01-02</time>
      </h2>

      <ul>
        <li>Interactive examples for Typography sections under “Foundations”</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-31</time>
      </h2>

      <ul>
        <li>Fixed nav drawer on mobile</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-30</time>
      </h2>

      <ul>
        <li>Fixed page titles</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-29</time>
      </h2>

      <ul>
        <li>Added content for “Transitional components” section under Foundations</li>
        <li>
          Interactive examples for repeating gradient functions, tiling gradients as
          background images
        </li>

        <li>
          Interactive examples for buttons, including styling resets, focus states, and
          affordances
        </li>

        <li>
          Navigation updates to allow dismissal on backdrop click and an exit animation
        </li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-27</time>
      </h2>

      <ul>
        <li>Added content for “Typography” section under Foundations</li>

        <li>Added content for “Color and light” section under Foundations</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-21</time>
      </h2>

      <ul>
        <li>
          Added a “Report Issue” button every page, which creates a github issue template
          for that link
        </li>

        <li>Small device enhancements and additional content citations</li>

        <li>Fixed credits for unsplash image photographers</li>
      </ul>
    </div>

    <Separator />

    <div>
      <h2>
        <time>2023-12-20</time>
      </h2>

      <ul>
        <li>
          Official launch with content and interactive examples for “Layouts” under
          Foundations
        </li>
      </ul>
    </div>
  </div>
</article>

<style>
  article {
    padding: 3rem 1.5rem;
    margin: 0 auto;
    max-width: 80ch;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 3rem 0 0;
  }

  ul,
  time {
    font-size: var(--font-size-lg);
    font-weight: 600;
  }

  li {
    list-style-type: "–";
    list-style-position: outside;
    font-weight: 400;
    margin: 0.5rem 0 0 0.6rem;
    padding: 0 0 0 0.5rem;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
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
