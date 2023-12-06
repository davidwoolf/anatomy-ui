import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
 
  // grab all contents and ensure we have a response
  const res = await fetch(`/layout/sections.json`);

  if (res.status === 404) {
    throw error(404, "page not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }

  /** @type Array<{slug: string; title: string; description: string; component: string;}> */
  const sections = await res.json();
  const matchingSection = sections.find(section => section.slug === params.slug);
  const nextSection = sections.findIndex(section => section.slug === params.slug) + 1;


  if(!matchingSection) {
    throw error(404, "page not found");
  }
  
  return {
    ...matchingSection,
    next: sections[nextSection] ? sections[nextSection].slug : undefined,
  }
}
