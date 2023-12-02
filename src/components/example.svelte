<div class="example-container">
  <slot />
</div>

<style>
  .example-container {
    align-items: center;
    background-color: #f1f1f9;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    inline-size: 100%;
  }

  @media (min-width: 1024px) {
    .example-container {
      aspect-ratio: 16 / 9;
    }
  }
</style>
