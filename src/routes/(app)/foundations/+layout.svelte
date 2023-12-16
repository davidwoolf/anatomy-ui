<script>
  import Nav from "./nav.svelte";

  /** @type {import("./$types").LayoutData} */
  export let data;
</script>

<header>
  <span>The Anatomy of Everyday UI</span>

  <Nav {data} />
</header>

<main>
  <article>
    <slot />
  </article>
</main>

<style>
  header {
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 0;
  }

  header span {
    font-size: var(--font-size-lg);
    font-weight: 500;
    letter-spacing: -0.01em;
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
    header {
      padding: 1.5rem 2rem 0;
    }

    article {
      padding: 6rem;
    }
  }
</style>
