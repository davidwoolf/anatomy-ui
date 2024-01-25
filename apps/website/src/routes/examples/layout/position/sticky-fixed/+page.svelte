<script>
  import { onMount } from "svelte";

  let type = "sticky";

  onMount(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("type") === "fixed") {
      type = "fixed";
    } else {
      type = "sticky";
    }
  });
</script>

<div class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor ex.
    Maecenas mattis eros at dui condimentum, ultricies malesuada mauris aliquam. Morbi
    fringilla aliquet neque, non varius turpis feugiat nec. Integer eu odio nunc.
    Vestibulum mattis purus quis mauris venenatis eleifend. Cras semper imperdiet mollis.
  </p>

  <div class="element" style:position={type}>this element is {type}</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor ex.
    Maecenas mattis eros at dui condimentum, ultricies malesuada mauris aliquam. Morbi
    fringilla aliquet neque, non varius turpis feugiat nec. Integer eu odio nunc.
    Vestibulum mattis purus quis mauris venenatis eleifend. Cras semper imperdiet mollis.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor ex.
    Maecenas mattis eros at dui condimentum, ultricies malesuada mauris aliquam. Morbi
    fringilla aliquet neque, non varius turpis feugiat nec. Integer eu odio nunc.
    Vestibulum mattis purus quis mauris venenatis eleifend. Cras semper imperdiet mollis.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor ex.
    Maecenas mattis eros at dui condimentum, ultricies malesuada mauris aliquam. Morbi
    fringilla aliquet neque, non varius turpis feugiat nec. Integer eu odio nunc.
    Vestibulum mattis purus quis mauris venenatis eleifend. Cras semper imperdiet mollis.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor ex.
    Maecenas mattis eros at dui condimentum, ultricies malesuada mauris aliquam. Morbi
    fringilla aliquet neque, non varius turpis feugiat nec. Integer eu odio nunc.
    Vestibulum mattis purus quis mauris venenatis eleifend. Cras semper imperdiet mollis.
  </p>
</div>

<style>
  p {
    color: var(--color-gray-300);
    font-family: var(--font-placeholder);
    line-height: 125%;
    margin: 0 auto;
    max-width: 50ch;
  }

  p + p {
    margin-block-start: 1rem;
  }

  .container {
    padding: 1rem;
  }

  .element {
    background-color: color-mix(in srgb, var(--color-gray-300), white 30%);
    color: var(--color-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    inset-block-start: 0;
    margin: 1rem -1rem;
    padding: 1rem 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    .container {
      padding: 4rem;
    }

    .element {
      border-radius: 0.5rem;
      inset-block-start: 2rem;
      margin: 1rem -2rem;
    }
  }
</style>
