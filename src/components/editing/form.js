/**
 * @param {Event} e 
 * @returns {string}
 */
export function safelyGetFormEventValue(e) {
  if (!e.target || !("value" in e.target)) return "";

  return String(e.target.value);
}

/**
 * @param {Event} e 
 *  @param {String} newValue
 * @returns {void}
 */
export function safelySetFormEventValue(e, newValue) {
  if (!e.target || !("value" in e.target)) return;

  e.target.value = newValue;
}