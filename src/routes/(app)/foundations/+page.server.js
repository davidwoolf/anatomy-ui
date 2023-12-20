import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, }) {
  const res = await fetch(`/layout/sections.json`);

  if (res.status === 404) {
    throw error(404, "file not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }
 
  /** @type Array<{ slug: string; title: string; description: string; }> */
  const sections = await res.json();

  return {
    sections,
  }
}
