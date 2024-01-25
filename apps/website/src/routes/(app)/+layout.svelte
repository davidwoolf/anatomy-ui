<script>
  import Nav from "./nav.svelte";
  import "../../embed-reset.css";
  import "../../app.css";
</script>

<header>
  <a href="/">Anatomy UI</a>

  <Nav />
</header>

<main>
  <slot />
</main>

<style>
  :global(body) {
    -webkit-font-smoothing: antialiased;
    color: var(--color-gray-800);
    font-family: var(--font-sans);
  }

  header {
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-block: 1.5rem 0;
    padding-inline: 1.5rem;
  }

  header a {
    font-size: var(--font-size-lg);
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    header {
      padding-block: 1.5rem 0;
      padding-inline: 2rem;
    }
  }
</style>
