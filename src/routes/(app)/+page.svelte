<script>
  import NextSection from "@components/next-section.svelte";
</script>

<section>
  <h1>The anatomy of everyday UI</h1>

  <p>Gain deeper knowledge to making interfaces for the web</p>

  <div>
    <NextSection href="/foundations">Foundations</NextSection>
  </div>
</section>

<style>
  section {
    align-items: center;
    height: calc(100dvh - 51px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    animation: fadeUp;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: 1;
    animation-duration: 1.75s;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
    font-size: var(--font-size-4xl);
    font-weight: 600;
    letter-spacing: -0.0175em;
    line-height: 1;
    opacity: 0;
  }

  p {
    animation: fadeIn;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-duration: 1.1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    color: color-mix(in srgb, var(--color-gray-800), white 40%);
    font-size: var(--font-size-lg);
    font-weight: 400;
    margin: 1rem 0 0;
    opacity: 0;
    line-height: 125%;
  }

  div {
    animation: fadeIn;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    margin: 3rem 0 0;
    opacity: 0;
  }

  @media (min-width: 788px) {
    h1 {
      font-size: var(--font-size-6xl);
    }

    p {
      font-size: var(--font-size-2xl);
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
