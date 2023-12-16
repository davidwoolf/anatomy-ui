import { marked } from 'marked';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, parent }) {
  const { sections } = await parent();
  const {id, slug} = params;

  const matchingSection = sections.find(section => section.slug === params.slug);
  const res = await fetch(`/${id}/${slug}.json`);

  if (res.status === 404 || !matchingSection) {
    throw error(404, "page not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }

  const nextSection = sections.findIndex(section => section.slug === params.slug) + 1;

  
 
  /** @type Array<{ title: string; text: string; component?: string; sections?: Array<{ title: string; text: string; component?: string; }> }> */
  const content = await res.json();
  
  return {
    ...matchingSection,
    description: marked.parse(matchingSection.description, {mangle: false, headerIds: false}),
    content: content.map(item => ({
      ...item,
      text: marked.parse(item.text, {mangle: false, headerIds: false}),
      sections: item.sections ? item.sections.map(section => ({
        ...section,
        text: marked.parse(section.text, {mangle: false, headerIds: false}),
      })) : undefined,
    })),
    next: sections[nextSection] ? sections[nextSection].slug : undefined,
  }
}
