import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const { id, slug } = params;

    const post = await import(`../../../../../resources/foundations/${id}/${slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
      id,
      slug,
    };
  } catch (e) {
    throw error(404, "page not found");
  }
}
