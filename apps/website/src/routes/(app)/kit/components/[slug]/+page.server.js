import { error } from "@sveltejs/kit";
import { marked } from "marked";
import hljs from "highlight.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  marked.setOptions({
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
      return hljs.highlight(code, { language: validLanguage }).value;
    },
  });

  const { slug } = params;

  const res = await fetch(`/kit/components/${slug}.md`);

  if (res.status !== 200) {
    error(404, "page not found");
  }

  const body = await res.text();

  return {
    content: marked.parse(body, { mangle: false, headerIds: false }),
    slug,
  };
}
