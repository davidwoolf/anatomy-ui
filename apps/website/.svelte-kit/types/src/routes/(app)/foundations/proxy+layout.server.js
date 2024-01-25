// @ts-nocheck
import { error } from "@sveltejs/kit";

/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export async function load({ fetch }) {
  let sections = [
    {
      id: "layout",
      name: "Layout",
      pages: [],
    },
    {
      id: "typography",
      name: "Typography",
      pages: [],
    },
    {
      id: "color-light",
      name: "Color and light",
      pages: [],
    },
    {
      id: "forms",
      name: "Forms",
      pages: [],
    },
    {
      id: "sizing",
      name: "Sizing",
      pages: [],
    },
    {
      id: "dynamic-components",
      name: "Dynamic components",
      pages: [],
    },
  ];

  /**
   * @typedef Section
   * @property {string} slug
   * @property {string} title
   * @property {string} description
   * @property {boolean?} hidden
   */

  /**
   * @typedef Data
   * @property {string} id
   * @property {string} name
   * @property {Section[]} pages
   */

  /** @type {Record<string, Data>} */
  let data = {};

  for (const section of sections) {
    const res = await fetch(`/foundations/${section.id}/sections.json`);

    if (res.status === 404) {
      error(404, "file not found");
    }

    if (res.status !== 200) {
      error(500, "something went wrong");
    }

    /** @type {Section[]} */
    const body = await res.json();

    data[section.id] = {
      ...section,
      pages: body.filter((item) => {
        if ("hidden" in item && item.hidden === true) {
          return false;
        }

        return true;
      }),
    };
  }

  return {
    sections: data,
  };
}
