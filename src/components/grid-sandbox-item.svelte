<div class="item"><slot /></div>

<style>
  .item {
    align-items: center;
    border: 1px solid var(--color-gray-300);
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    line-height: 1;
    justify-content: center;
    padding: 0.25rem;
    height: 100%;
  }

  .item:before {
    counter-increment: section;
    content: counter(section);
  }
</style>
