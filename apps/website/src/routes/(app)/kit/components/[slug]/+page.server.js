/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, parent }) {
  const { slug } = params;

  return {
    slug,
  };
}
