/**
 * @param {Event} e 
 * @returns {string}
 */
export function safelyGetFormEventValue(e) {
  if (!e.target || !("value" in e.target)) return "";

  return String(e.target.value);
}