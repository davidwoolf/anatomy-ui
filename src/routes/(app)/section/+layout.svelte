<header>
  <span>The Anatomy of Everyday UI</span>
</header>

<main>
  <article>
    <slot />
  </article>
</main>

<style>
  header {
    align-items: center;
    border-block-end: 1px solid var(--color-gray-200);
    display: flex;
    height: 4rem;
    margin-inline-start: 1.5rem;
  }

  header span {
    font-size: var(--font-size-lg);
    letter-spacing: -0.01em;
    opacity: 0.6;
  }

  article {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: 768px) {
    header {
      margin-inline-start: 4rem;
      height: 5rem;
    }

    header span {
      font-size: var(--font-size-xl);
    }

    article {
      padding: 4rem;
    }
  }

  @media (min-width: 1024px) {
    header {
      margin-inline-start: 5rem;
    }

    article {
      padding: 5rem;
    }
  }

  @media (min-width: 1536px) {
    header {
      margin-inline-start: 8rem;
    }

    article {
      padding: 5rem 8rem;
    }
  }
</style>
