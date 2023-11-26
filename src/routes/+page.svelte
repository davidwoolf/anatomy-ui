<script lang="ts">
  // import { assets } from "$app/paths";
</script>

<main class="au-container flex items-end p-32 pb-48 h-screen w-screen">
  <h1 class="overflow-hidden leading-none tracking-tight text-[7.5rem] font-thin">
    <div class="overflow-hidden heading-text pb-4">
      <span>The Anatomy</span>
    </div>
    <span class="line block border-b-2 border-yellow-400" />
    <div class="overflow-hidden heading-text pb-4">
      <span> of Everyday UI</span>
    </div>
    <span class="line block border-b-2 border-yellow-400" />
  </h1>
</main>

<style>
  .au-container {
    background: linear-gradient(to right, white 127px, rgb(0 0 0 / 0.08) 1px);
    background-size: 128px 100%;
  }

  .line {
    animation: slideIn;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-delay: 0.125s;
    animation-fill-mode: forwards;
    transform: translateX(-100%);
  }

  .line:last-of-type {
    animation-delay: 0.25s;
  }

  .heading-text span {
    animation: slideUp;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-delay: 0.125s;
    animation-fill-mode: forwards;
    display: block;
    transform: translateY(100%);
  }

  .heading-text:last-of-type span {
    animation-delay: 0.25s;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion) {
    .line,
    .heading-text span {
      transform: translate3d(0, 0, 0);
      animation: none;
    }
  }
</style>
