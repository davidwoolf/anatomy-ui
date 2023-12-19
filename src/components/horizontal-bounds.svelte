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
    justify-content: center;
    color: var(--color-green-400);
    display: flex;
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 1rem 0 0 0;
  }

  .container div {
    background-color: var(--color-green-400);
    position: absolute;
    height: 1px;
    top: 0.5rem;
    width: 100%;
  }

  .container div::before,
  .container div::after {
    background-color: var(--color-green-400);
    content: "";
    height: 7px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    width: 1px;
  }

  .container div:before {
    left: 0;
  }

  .container div:after {
    right: 0;
  }
</style>
