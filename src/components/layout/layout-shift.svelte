<script>
  import Controls from "@components/editing/controls.svelte";
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import HtmlCode from "@components/html-code.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import AspectRatio from "../../routes/examples/layout/layout-shift/aspect-ratio.svelte";
  import Animations from "../../routes/examples/layout/layout-shift/animations.svelte";
  import ExampleText from "@components/example-text.svelte";
  let reloadAspectRatio = false;
  let reloadAnimations = false;
  let enabledAspectRatio = "enabled";
  let enabledFontFallbacks = "enabled";
  let enabledTransformAnimations = "enabled";

  $: {
    // hacky way to remount a component
    if (enabledAspectRatio) {
      reloadAspectRatio = true;

      setTimeout(() => {
        reloadAspectRatio = false;
      });
    }
  }

  $: {
    // hacky way to remount a component
    if (enabledTransformAnimations) {
      reloadAnimations = true;

      setTimeout(() => {
        reloadAnimations = false;
      });
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    {#if !reloadAspectRatio}
      <AspectRatio enabled={enabledAspectRatio === "enabled" ? true : false} />
    {/if}
  </svelte:fragment>

  <div slot="description">
    <h2>Provide media and embed dimensions</h2>

    <ExampleText>
      Use the aspect-ratio CSS property to give media such as images, videos, and embedded
      content like <HtmlCode>iframe</HtmlCode> a concrete size before rendering. While height
      and width attributes directly on media elements have historically been used, the aspect-ratio
      property can inform overall dimensions without explicitly providing width and height
      values that might not translate well in responsive designs.
    </ExampleText>
    <ExampleText>
      It can also be applied to multiple elements in one declaration, since attribute
      values will need to be defined on each element.
    </ExampleText>

    <Controls>
      <Control label="Aspect ratios">
        <Select bind:value={enabledAspectRatio}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed={true}>
  <div slot="preview">
    <iframe
      loading="lazy"
      width="392"
      style:max-width="100%"
      style:aspect-ratio="1 / .7"
      src="/examples/layout/layout-shift/font-fallbacks?enabled={enabledFontFallbacks ===
      'enabled'
        ? true
        : false}"
      title="Card showing layout shift" />
  </div>

  <div slot="description">
    <h2>Font sizing and fallbacks</h2>

    <p>
      If your interface uses custom fonts, it’s recommended to use a <AttributeCode
        >font-display</AttributeCode> value that ensures text is displayed immediately while
      the custom font loads (if not already cached). This improves metrics like FCP (first
      contentful paint) and LCP (largest contentful paint). However, it can also create layout
      shifting since different font values don’t take up the same physical space, even with
      the same type properties.
    </p>
    <p>
      To solve this, try to provide built-in fallbacks that are optically similar in size
      to your custom fonts. This will decrease layout shift and also prevent jarring text
      swapping experiences.
    </p>

    <Controls>
      <Control label="Font fallback">
        <Select bind:value={enabledFontFallbacks}>
          <option value="enabled">cursive</option>
          <option value="disabled">sans serif</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example>
  <svelte:fragment slot="preview">
    {#if !reloadAnimations}
      <Animations enabled={enabledTransformAnimations === "enabled" ? true : false} />
    {/if}
  </svelte:fragment>

  <div slot="description">
    <h2>Implement animations properly</h2>

    <p>
      Layout shift doesn’t just happen on page and asset load, it can also happen when
      animating elements using CSS properties that contribute to the overall DOM layout
      flow.
    </p>
    <p>
      Avoid animating properties like height and width, top and left and margin and
      padding when possible. Instead, use transform for animations as it doesn’t cause
      layout re-computations.
    </p>

    <Controls>
      <Control label="Transform animations">
        <Select bind:value={enabledTransformAnimations}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>
