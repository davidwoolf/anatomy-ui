<script>
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  let enabledFontFallbacks = "enabled";
</script>

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

  <svelte:fragment slot="preview-controls">
    <Control label="Font fallback">
      <Select bind:value={enabledFontFallbacks}>
        <option value="enabled">cursive</option>
        <option value="disabled">sans serif</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
