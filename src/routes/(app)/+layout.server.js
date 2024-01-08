
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
 
  // grab all contents and ensure we have a response
  const res = await fetch(`/layout/sections.json`);

  if (res.status === 404) {
    error(404, "page not found");
  }

  if (res.status !== 200) {
    error(500, "something went wrong");
  }

  /** @type Array<{slug: string; title: string; description: string; component: string;}> */
  const sections = await res.json();
  
  return {
    sections,
  }
}
