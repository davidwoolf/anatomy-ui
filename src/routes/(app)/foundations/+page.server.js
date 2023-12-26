import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, }) {
  const sections = ["layout", "typography"];

  /** 
   * @typedef {Object} Section
   * @property {string} slug
   * @property {string} title
   * @property {string} description
   * @property {boolean?} hidden
   */

  /** @type {Record<string, Section[]>} */
  let data = {};

  sections.forEach(async section => {
    const res = await fetch(`/${section}/sections.json`);

    if (res.status === 404) {
      throw error(404, "file not found");
    }
  
    if (res.status !== 200) {
      throw error(500, "something went wrong");
    }

    /** @type {Section[]} */
    const body =  await res.json();

    data[section] = body.filter(item => item?.hidden ? false : true)
  })

  return data;
  // {
  //   sections: {
  //     /** @type Array<{ slug: string; title: string; description: string; }> */
  //     layout: await layout.json(),
  //   },
  // }
}
