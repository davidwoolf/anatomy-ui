/**
 * @typedef Node
 * @property {string} [tag]
 * @property {string} [text]
 * @property {Record<string | number, Node>} [nodes]
 * */

/**
 *
 * @param {string} selector
 * @param {Record<string | number, Node>} code
 * @param {string} fallback
 */
export function getNode(selector, code, fallback) {
  let selectors = selector.split(".");

  let filtered = code;

  selectors.forEach((value) => {
    if (filtered[value]) {
      // @ts-expect-error: types will be weird here as we're narrowing down
      filtered = filtered[value];
    }
  });

  if (typeof filtered === "string") {
    return filtered;
  }

  return fallback;
}