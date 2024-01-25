import { marked } from "marked";
import hljs from "highlight.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, parent }) {
  marked.setOptions({
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : "plaintext";

      return hljs.highlight(code, { language: validLanguage }).value;
    },
  });

  const { sections } = await parent();
  const { id, slug } = params;

  const matchingSection = sections[id].pages.find(
    (section) => section.slug === params.slug
  );
  const nextSection =
    sections[id].pages.findIndex((section) => section.slug === params.slug) + 1;
  const res = await fetch(`/foundations/${id}/${slug}.json`);

  if (res.status === 404 || !matchingSection) {
    error(404, "page not found");
  }

  if (res.status !== 200) {
    error(500, "something went wrong");
  }

  /** @type Array<{ title?: string; text?: string; file?: string; component?: string; width?: string; sections?: Array<{ title: string; text: string; component?: string; }> }> */
  const content = await res.json();

  /**
   *
   * @param {string} text
   * @returns
   */
  function parseText(text) {
    let post = text;
    const references = text.match(/\[citation\]\((\w|:|\/|\.|-|#|@)*\)/g);

    /** @type Array<string> */
    let links = [];

    if (references) {
      for (let index = 0; index < references.length; index++) {
        const formattedValue = references[index].replace("citation", String(index + 1));

        // grab the link for later
        const link = references[index].match(/(https:\/\/)(\w|:|\/|\.|-|#)*/g);

        if (link) {
          links = links.concat([link[0]]);
        }

        post = post.replace(references[index], `<sup>${formattedValue}</sup>`);
      }
    }

    return marked.parse(post, { mangle: false, headerIds: false });
  }

  /**
   *
   * @param {string | undefined} text
   * @param {string | undefined} file
   * @returns
   */
  async function getText(text, file) {
    if (text) {
      return parseText(text);
    }

    if (file) {
      const res = await fetch(`/foundations/${id}/${slug}/${file}`);

      if (res.status !== 200) {
        error(500, `could not find file: ${id}/${slug}/${file}`);
      }

      const value = await res.text();

      return parseText(value);
    }
  }

  return {
    ...matchingSection,
    id,
    description: parseText(matchingSection.description),
    content: await Promise.all(
      content.map(async (item) => {
        const text = await getText(item.text, item.file);

        return {
          ...item,
          text,
          sections: item.sections
            ? item.sections.map((section) => ({
                ...section,
                text: parseText(section.text),
              }))
            : undefined,
        };
      })
    ),
    next: sections[id].pages[nextSection] ? sections[id].pages[nextSection] : undefined,
  };
}
