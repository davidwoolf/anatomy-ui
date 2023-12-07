<script>
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import ProTip from "@components/pro-tip.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="card-wrapper">
      <div>
        <Card>
          <h2>Content box sizing</h2>
          <p>
            Context box sizing adds explicit widths and heights in addition to padding and
            border width. This means a 100px wide box with 20px of left padding and 20px
            of right padding will by 140px wide.
          </p>
        </Card>
      </div>

      <div>
        <Card>
          <h2>Border box sizing</h2>
          <p>
            Border box sizing calculates padding and border widths within the defined
            width and height. This means a 100px wide box with 20px of left padding and
            20px of right padding will by 100px wide.
          </p>
        </Card>
      </div>
    </div>
  </svelte:fragment>

  <div slot="description">
    <ProTip>
      <p>Recommendation</p>
    </ProTip>

    <div class="text-wrapper">
      <ExampleText>
        Turn on border box sizing for all elements if possible. Every element’s dimensions
        will be calculated the same, and explicit calculations will be easier as padding
        and border width values won’t unintentionally increase the width and height of
        elements.
      </ExampleText>
    </div>
  </div>
</Example>

<style>
  .card-wrapper {
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    .card-wrapper {
      display: flex;
      max-width: 80%;
    }

    .card-wrapper div:nth-child(2) {
      margin-block-start: 6rem;
    }
  }

  .text-wrapper {
    margin: 1rem 0 0;
  }
</style>
