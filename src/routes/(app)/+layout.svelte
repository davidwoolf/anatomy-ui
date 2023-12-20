<script>
  import Nav from "./nav.svelte";
  import "../../embed-reset.css";
  import "../../app.css";
</script>

<header>
  <a href="/">The Anatomy of Everyday UI</a>

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
    padding: 1.5rem 1.5rem 0;
  }

  header a {
    font-size: var(--font-size-lg);
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  @media (min-width: 1024px) {
    header {
      padding: 1.5rem 2rem 0;
    }
  }
</style>
