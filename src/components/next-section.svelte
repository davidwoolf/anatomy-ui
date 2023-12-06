<script>
  /** @type {string} */
  export let href;
</script>

<a
  {href}
  class="
    border-2
    border-purple-400
    flex
    font-medium
    group
    items-baseline
    gap-4
    min-w-max
    px-6
    py-3
    rounded-full
    text-xl
    transition-all
    hover:bg-purple-400
    hover:text-white">
  <slot />

  <svg
    aria-hidden
    class="text-purple-400 relative top-px group-hover:text-white transition-all"
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.0415 8.5C19.0415 8.75635 18.939 8.99219 18.7339 9.18701L11.915 15.9854C11.71 16.1802 11.4946 16.2725 11.2485 16.2725C10.7461 16.2725 10.3564 15.9033 10.3564 15.3906C10.3564 15.1445 10.4385 14.8984 10.6025 14.7446L12.8994 12.4067L16.355 9.25879L13.8735 9.4126H0.902344C0.369141 9.4126 0 9.0332 0 8.5C0 7.9668 0.369141 7.5874 0.902344 7.5874H13.8735L16.3447 7.74121L12.8994 4.59326L10.6025 2.25537C10.4385 2.09131 10.3564 1.85547 10.3564 1.60938C10.3564 1.09668 10.7461 0.727539 11.2485 0.727539C11.4946 0.727539 11.71 0.80957 11.9355 1.03516L18.7339 7.81299C18.939 8.00781 19.0415 8.24365 19.0415 8.5Z"
      fill="currentcolor" />
  </svg>
</a>
