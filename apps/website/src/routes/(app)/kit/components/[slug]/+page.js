import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const { slug } = params;

    const post = await import(`../../../../../resources/kit/components/${slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
      slug,
    };
  } catch (e) {
    throw error(404, "page not found");
  }
}
