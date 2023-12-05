<script>
  import Controls from "@components/editing/controls.svelte";
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import HtmlCode from "@components/html-code.svelte";
  let enabledAspectRatio = true;

  /**
   *
   * @param {Event} e
   */
  function updateAspectRatio(e) {
    if (!e.target || !("value" in e.target)) {
      return;
    }

    if (e.target.value === "disabled") {
      enabledAspectRatio = false;
    } else {
      enabledAspectRatio = true;
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    <iframe
      width="392"
      style:max-width="100%"
      style:aspect-ratio="1.04 / 1"
      src="/examples/layout/layout-shift/aspect-ratio?enabledAspectRatio={enabledAspectRatio}"
      title="Card showing layout shift" />
  </svelte:fragment>

  <div slot="description">
    <h2>Provide media and embed dimensions</h2>

    <p>
      Use the aspect-ratio CSS property to give media such as images, videos, and embedded
      content like <HtmlCode>iframe</HtmlCode> a concrete size before rendering. While height
      and width attributes directly on media elements have historically been used, the aspect-ratio
      property can inform overall dimensions without explicitly providing width and height
      values that might not translate well in responsive designs.
    </p>
    <p>
      It can also be applied to multiple elements in one declaration, since attribute
      values will need to be defined on each element.
    </p>

    <Controls>
      <Control label="Aspect ratios">
        <Select on:change={updateAspectRatio}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed={true}>
  <div slot="preview">
    <p>hello</p>
  </div>

  <div slot="description">
    <h2>Font sizing and fallbacks</h2>

    <p>
      If your interface uses custom fonts, it’s recommended to use a font-display value
      that ensures text is displayed immediately while the custom font loads (if not
      already cached). This improves metrics like FCP (first contentful paint) and LCP
      (largest contentful paint). However, it can also create layout shifting since
      different font values don’t take up the same physical space, even with the same type
      properties.
    </p>
    <p>
      To solve this, try to provide built-in fallbacks that are optically similar in size
      to your custom fonts. This will decrease layout shift and also prevent jarring text
      swapping experiences.
    </p>
  </div>
</Example>

<style>
</style>
