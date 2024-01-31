<script>
  import Container from "@components/layout/container.svelte";
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import SectionNav from "@components/section-nav.svelte";

  export let data;

  const pages = {
    "1": {
      id: "getting-started",
      name: "Getting started",
    },
    "2": {
      id: "components",
      name: "Components",
      pages: [
        {
          slug: "accordion",
          title: "Accordion",
        },
        {
          slug: "alertdialog",
          title: "Alert dialog",
        },
        {
          slug: "avatar",
          title: "Avatar",
        },
        {
          slug: "collapsible",
          title: "Collapsible",
        },
        {
          slug: "dialog",
          title: "Dialog",
        },
        {
          slug: "menubar",
          title: "Menu bar",
        },
        {
          slug: "menu",
          title: "Menu",
        },
        {
          slug: "progress",
          title: "Progress",
        },
        {
          slug: "select",
          title: "Select",
        },
        {
          slug: "separator",
          title: "Separator",
        },
        {
          slug: "slider",
          title: "Slider",
        },
        {
          slug: "switch",
          title: "Switch",
        },
        {
          slug: "tabs",
          title: "Tabs",
        },
        {
          slug: "toggle",
          title: "Toggle",
        },
        {
          slug: "togglegroup",
          title: "Toggle group",
        },
        {
          slug: "tooltip",
          title: "Tooltip",
        },

        {
          slug: "toolbar",
          title: "Toolbar",
        },
      ],
    },
  };
</script>

<Container>
  <Grid>
    <Column column="1" span="2">
      <aside>
        <!-- open={data.id}
        data={data.sections}
        currentPage="/kit/{data.id}/{data.slug}"  -->
        <SectionNav name="AnatomyKit" open="" data={pages} currentPage="" />
      </aside>
    </Column>

    <Column column="4" span="9">
      <slot />
    </Column>
  </Grid>
</Container>

<style>
  :global(:root) {
    --color-accent: var(--color-red-400);
  }

  .anatomykit {
    color: var(--color-red-400);
    font-size: var(--font-size-4xl);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.75;
  }
</style>
