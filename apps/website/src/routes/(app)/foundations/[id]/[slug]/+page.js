import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  try {
    const { sections } = await parent();
    const { id, slug } = params;

    const nextSection =
      sections[id].pages.findIndex((section) => section.slug === params.slug) + 1;

    const post = await import(`../../../../../resources/foundations/${id}/${slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
      id,
      slug,
      next: sections[id].pages[nextSection] ? sections[id].pages[nextSection] : undefined,
    };
  } catch (e) {
    throw error(404, "page not found");
  }
}
