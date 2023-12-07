<div class="layout--description">
  <slot />
</div>

<style>
  .layout--description {
    color: rgb(31 41 55 / 0.8);
    margin: 0.5rem 0 0;
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    .layout--description {
      margin: 1.5rem 0 0;
      font-size: 1.3125rem;
    }
  }

  :global(.layout--description a) {
    text-decoration-color: rgb(31 41 55 / 0.3);
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    text-decoration: underline;
    transition: all 0.2s ease;
  }

  :global(.layout--description a:hover) {
    text-decoration-color: #9747ff;
  }
</style>
