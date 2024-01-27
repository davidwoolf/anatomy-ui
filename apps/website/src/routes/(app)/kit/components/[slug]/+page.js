import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const { slug } = params;

    const res = await import(`../../../../../resources/components/${slug}.md`);

    return {
      content: res.default,
      slug,
    };
  } catch (e) {
    console.log(e);
    throw error(404, "page not found");
  }
}
