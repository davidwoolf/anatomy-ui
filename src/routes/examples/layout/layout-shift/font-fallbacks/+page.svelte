<script>
  import { onMount } from "svelte";
  import Card from "@components/card.svelte";
  const stylesheet = () => import("./pacifico/style.css");
  let enabled = true;

  onMount(() => {
    setTimeout(() => {
      stylesheet();
    }, 1000);

    const params = new URLSearchParams(window.location.search);

    if (params.get("enabled") === "true") {
      enabled = true;
    } else {
      enabled = false;
    }
  });
</script>

<Card
  padding="3rem"
  fontFamily={enabled ? '"Pacifico", cursive' : '"Pacifico", sans-serif'}
  width="24rem" />
