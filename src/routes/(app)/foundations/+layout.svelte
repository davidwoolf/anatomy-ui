<article>
  <slot />
</article>

<style>
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
    article {
      padding: 6rem;
    }
  }
</style>
