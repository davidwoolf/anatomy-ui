<div {...$$props}>
  <slot />
</div>

<style>
  div {
    margin-inline: auto;
    max-width: 92rem;
    padding-block: 2rem;
    padding-inline: 1.5rem;
  }

  @media (min-width: 768px) {
    div {
      padding-block: 6rem;
      padding-inline: 4rem;
    }
  }

  @media (min-width: 1024px) {
    div {
      padding: 6rem;
    }
  }
</style>
