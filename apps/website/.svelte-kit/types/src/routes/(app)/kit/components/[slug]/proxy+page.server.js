// @ts-nocheck
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ fetch, params, parent }) {
  const { slug } = params;

  return {
    slug,
  };
}
