<script>
  /** @type {string} */
  export let size;
</script>

<div class="container" style:height={size}>
  {size}
  <div />
</div>

<style>
  .container {
    align-items: center;
    color: var(--color-green-400);
    display: flex;
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 0 0 0 1rem;
  }

  .container div {
    background-color: var(--color-green-400);
    position: absolute;
    height: 100%;
    left: 0.5rem;
    width: 1px;
  }

  .container div::before,
  .container div::after {
    background-color: var(--color-green-400);
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 7px;
  }

  .container div:before {
    top: 0;
  }

  .container div:after {
    bottom: 0;
  }
</style>
