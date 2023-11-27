The `<main>` element should wrap the core functionality of a page. Similar to the `<body>` element, `<main>` has some restrictions on its usage. Only one `<main>` element should be present and marked as visible. When including a “skip to main content” feature for keyboard navigation, it’s recommended to target the `<main>` element.

Avoid including app-level UI such as global headers, navigation, and footers inside of the `<main>` element [citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#usage_notes) unless they are the primary function of the specific page. 

For older browsers, you can add the `role="main"` to a `<div>` element instead to get similar semantic meaning. However, defer to using available elements rather than roles when possible.