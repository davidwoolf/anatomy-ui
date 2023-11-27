import { marked } from 'marked';
import hljs from 'highlight.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  let items = ["section"];

  /** @type Array<{name: string, content: string}> */
  let formatted = []

  for(const item of items) {
    const res = await fetch(`/layout/semantic-elements/${item}.md`);
    
    if (res.status !== 200) {
      continue;
    }
    let post = await res.text();

    // grab all of the matching citations
    const references = post.match(/\[citation\]\((\w|:|\/|\.|-|#)*\)/g);
    
    /** @type Array<string> */
    let links = [];

    if(references) {
      for(let index = 0; index < references.length; index++) {
        const formattedValue = references[index].replace("citation", String(index + 1));
        
        // grab the link for later
        const link = references[index].match(/(https:\/\/)(\w|:|\/|\.|-|#)*/g);

        if(link) {
          links = links.concat([link[0]])
        }
      
        post = post.replace(references[index], `<sup>${formattedValue}</sup>`);
      }
    }

    // note: this is the deprecated way of doing this, but is required to work in SvelteKit
    marked.setOptions({
      highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(code, { language: validLanguage }).value;
      }
    });

    formatted = formatted.concat([{
      name: item,
      content: marked.parse(post, {mangle: false, headerIds: false})
    }])
  }
  
  return {
    items: formatted,
  };
}
