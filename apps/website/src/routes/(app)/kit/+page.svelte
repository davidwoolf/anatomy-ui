<script>
  import Text from "@components/text/text.svelte";
</script>

<article>
  <Text>
    <h1>Getting started</h1>

    <p>
      Welcome to AnatomyKit, a precomposed design system created for designers and
      engineers. Included features are type scales, color themes, and components commonly
      needed to make interfaces on the web–whether you're making a site or an app.
    </p>

    <hr />

    <h2>Supported technologies</h2>

    <p>
      As of now, supported platforms are Svelte, React, and the frameworks normally used
      in conjuction with them like SvelteKit, NextJS, and more. Additionally, raw CSS or
      TailwindCSS can be used for custom styling.
    </p>
  </Text>

  <!-- <div /> -->
</article>

<svelte:head>
  <title>AnatomyKit — AnatomyUI</title>
</svelte:head>

<style>
  article {
  }

  div {
    background-color: blue;
    position: absolute;
    height: 1px;
    left: 0;
    top: 195px;
    width: 100%;
  }
</style>
