<div class="component--text" {...$$props}>
  <slot />
</div>

<style>
  .component--text > :global(h1) {
    font-size: var(--font-size-5xl);
    letter-spacing: -0.01em;
    line-height: 1;
    font-weight: 300;
  }

  .component--text > :global(h2) {
    font-size: var(--font-size-3xl);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 110%;
  }

  .component--text > :global(h3) {
    color: var(--color-gray-800);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    line-height: 110%;
    text-wrap: balance;
  }

  .component--text > :global(p),
  .component--text > :global(:is(ul, ol, dl) li),
  .component--text > :global(table :is(th, td)) {
    color: color-mix(in srgb, var(--color-gray-800), white 30%);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: 160%;
    max-inline-size: 65ch;
  }

  .component--text > :global(table) {
    background-color: white;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    box-shadow: 0 1px 2px 0px rgba(151, 71, 255, 0.12);
    border-collapse: separate;
    border-radius: 0.5rem;
    inline-size: 100%;
    table-layout: auto;
    text-align: left;
  }

  .component--text > :global(table :is(th, td)) {
    border-block-end: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    padding: 0.5rem;
    vertical-align: baseline;
  }

  .component--text > :global(table th) {
    color: var(--color-gray-800);
    font-weight: 600;
  }

  .component--text > :global(table tbody tr:last-child td) {
    border-block-end: none;
  }

  .component--text > :global(:is(ul, ol)) {
    margin-block: 0.75rem;
  }

  .component--text > :global(ul li) {
    margin-block-start: 0.5rem;
  }

  .component--text > :global(ul li:before) {
    content: "– ";
  }

  .component--text :global(h1 + p) {
    margin-block-start: 1rem;
  }

  /* all headings followed by block level content */
  .component--text :global(h2 + :is(p, ul, ol, table, pre)) {
    margin-block-start: 0.75rem;
  }

  .component--text :global(h3 + :is(p, ul, ol, table, pre)) {
    margin-block-start: 0.5rem;
  }

  /* all block level content followed by h3 */
  .component--text :global(:is(p, ul, ol, table, pre) + h3) {
    margin-block-start: 2rem;
  }

  /* all block level content followed by block level content */
  .component--text :global(:is(p, ul, ol, table) + :is(p, ul, ol, table)) {
    margin-block-start: 1rem;
  }

  .component--text :global(:is(p, table, pre) + .sandbox),
  .component--text :global(.sandbox + :is(p, h3)) {
    margin-block-start: 2rem;
  }

  .component--text :global(p > a) {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    text-decoration-color: var(--color-gray-300);
  }

  .component--text :global(p > a:hover) {
    text-decoration: none;
  }

  .component--text :global(p sup) {
    font-weight: 500;
  }

  .component--text > :global(hr) {
    border: none;
    background: var(--color-gray-300);
    block-size: 1px;
    opacity: 0.5;
    margin-block: 2rem;
    inline-size: 100%;
  }

  .component--text :global(.sandbox + hr) {
    margin-block-end: 0;
    visibility: hidden;
  }

  .component--text :global(:is(h2, h3, p, li, td) code) {
    background-color: var(--color-gray-100);
    color: var(--color-purple-400);
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.8125em;
    font-weight: 600;
    padding-block: 0.125rem;
    padding-inline: 0.25rem;
    letter-spacing: -0.025em;
    white-space: nowrap;
  }

  .component--text :global(pre) {
    background-color: white;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    box-shadow: 0 1px 2px 0px rgba(151, 71, 255, 0.12);
    color: var(--color-gray-800);
    border-radius: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.875em;
    font-weight: 500;
    margin: 0.75rem 0;
    padding: 1.5rem;
    overflow: scroll;
    inline-size: 100%;
  }

  .component--text :global(.token.tag),
  .component--text :global(.token.keyword),
  .component--text :global(.token.built_in),
  .component--text :global(.token.params) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  .component--text :global(.token.name),
  .component--text :global(.token.tag),
  .component--text :global(.token.attr),
  .component--text :global(.token.selector-tag),
  .component--text :global(.token.attribute) {
    color: var(--color-green-400);
  }

  .component--text :global(.token.comment) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  .component--text :global(.token.title),
  .component--text :global(.token.string),
  .component--text :global(.token.built_in) {
    color: var(--color-purple-400);
  }

  @media (min-width: 768px) {
    .component--text > :global(h1) {
      font-size: var(--font-size-6xl);
    }

    .component--text :global(h1 + p) {
      margin-block-start: 2.5rem;
    }

    .component--text > :global(h2) {
      font-size: var(--font-size-4xl);
    }

    .component--text > :global(h3) {
      font-size: var(--font-size-2xl);
    }

    .component--text > :global(p),
    .component--text > :global(:is(ol, ul, dl) li) {
      font-size: var(--font-size-lg);
    }

    .component--text > :global(hr) {
      margin-block: 3rem;
    }

    .component--text :global(.sandbox + hr) {
      margin-block-end: 3rem;
      visibility: visible;
    }
  }
</style>
