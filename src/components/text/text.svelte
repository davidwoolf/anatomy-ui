<div class="component--text">
  <slot />
</div>

<style>
  :global(.component--text h2) {
    color: var(--color-gray-800);
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 110%;
    text-wrap: balance;
  }

  :global(.component--text h3) {
    color: var(--color-gray-800);
    font-size: var(--font-size-base);
    font-weight: 600;
    line-height: 110%;
    text-wrap: balance;
  }

  :global(
      .component--text p,
      .component--text li,
      .component--text th,
      .component--text td
    ) {
    color: color-mix(in srgb, var(--color-gray-800), white 30%);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: 145%;
    max-inline-size: 65ch;
  }

  :global(.component--text table) {
    background-color: white;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    box-shadow: 0 1px 2px 0px rgba(151, 71, 255, 0.12);
    border-collapse: separate;
    border-radius: 0.5rem;
    inline-size: 100%;
    table-layout: auto;
    text-align: left;
  }

  :global(.component--text th, .component--text td) {
    border-block-end: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    color: color-mix(in srgb, var(--color-gray-800), white 30%);
    font-size: var(--font-size-sm);
    font-weight: 400;
    line-height: 145%;
    padding: 0.5rem;
    max-inline-size: 65ch;
    vertical-align: baseline;
  }

  :global(.component--text th) {
    color: var(--color-gray-800);
    font-weight: 600;
  }

  :global(.component--text tbody tr:last-child td) {
    border-block-end: none;
  }

  :global(.component--text ul, .component--text ol) {
    margin-block: 0.75rem;
  }

  :global(.component--text ul li) {
    margin-block-start: 0.5rem;
  }

  :global(.component--text ul li:before) {
    content: "– ";
  }

  /* all headings followed by block level content */
  :global(.component--text :not(ul, ol, table, p) + :not(h2, h3)) {
    margin-block-start: 0.5rem;
  }

  /* all block level content followed by headings */
  :global(.component--text :not(h2, h3) + :not(ul, ol, table, p)) {
    margin-block-start: 1.25rem;
  }

  /* all block level content followed by block level content */
  :global(.component--text :not(h2, h3) + :not(h2, h3)) {
    margin-block-start: 0.75rem;
  }

  :global(.component--text p > a) {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    text-decoration-color: var(--color-gray-300);
  }

  :global(.component--text p > a:hover) {
    text-decoration: none;
  }

  :global(.component--text p sup) {
    font-weight: 500;
  }

  :global(
      .component--text h2 code,
      .component--text h3 code,
      .component--text p code,
      .component--text li code,
      .component--text td code
    ) {
    background-color: color-mix(in srgb, var(--color-gray-300), white 70%);
    color: var(--color-gray-800);
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.875em;
    font-weight: 600;
    padding: 0.125rem;
  }

  :global(.component--text pre) {
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

  :global(.hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  :global(.hljs-name, .hljs-attr, .hljs-selector-tag, .hljs-attribute) {
    color: var(--color-green-400);
  }

  :global(.hljs-comment) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  :global(.hljs-title, .hljs-string, .hljs-built_in) {
    color: var(--color-purple-400);
  }

  @media (min-width: 768px) {
    :global(.component--text h2) {
      font-size: var(--font-size-xl);
    }

    :global(.component--text h3, .component--text p, .component--text li) {
      font-size: var(--font-size-lg);
    }
  }
</style>
