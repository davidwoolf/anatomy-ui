<script>
  const components = [
    "dialog",
    "tooltip",
    "switch",
    "toggle",
    "togglegroup",
    "menubar",
    "menu",
    "accordion",
    "tabs",
    "toolbar",
    "progress",
    "separator",
    "select",
    "alertdialog",
    "avatar",
    "collapsible",
    "slider",
  ];
</script>

<nav>
  <ul>
    <li>
      <a href="/kit">Getting started</a>
    </li>

    <li>
      <a href="/kit/color">Color</a>
    </li>

    <li>
      <a href="/kit/typography">Typography</a>
    </li>

    <li>
      <span>Components</span>

      <ul>
        {#each components as page}
          <li>
            <a href="/kit/components/{page}">{page}</a>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
</nav>

<style>
  nav {
    margin-block-start: 1.5rem;
  }

  li {
    border-block-end: 1px solid var(--color-gray-200);
  }

  li:last-of-type {
    border-block-end: none;
  }

  a,
  span {
    display: block;
    font-size: var(--font-size-base);
    font-weight: 600;
    line-height: 1;
    padding-block: 1rem;
  }

  a:hover {
    color: var(--color-red-400);
    transition: all 150ms ease;
  }

  span {
    padding-block-end: 0.5rem;
  }

  ul ul a {
    color: color-mix(in srgb, var(--color-gray-800), transparent 20%);
    font-weight: 400;
    padding-block: 0.5rem;
  }

  ul ul a:hover {
    text-decoration: underline;
  }

  ul ul li {
    border-block-end: none;
  }
</style>
