For a group of navigation links, use the `<nav>` element. Ensure you use this element sparingly for core navigation relevant to a page. Ancillary links in elements such as `<footer>` don’t need to be wrapped in `<nav>` unless they include a set of related links for the page.

When adding multiple `<nav>` elements to a page, use the `aria-labelledby` attribute[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content), in combination with a text level element and matching `id` attribute to distinguish between them.

```html
<header>
	<nav aria-labelledby="site-navigation">
		<h2 id="site-navigation">Site links</h2>
		<!-- links -->
	</nav>
</header>

<article>
	<aside>
		<nav aria-labelledby="resource-navigation">
			<h2 id="resource-navigation">Additional resources</h2>
			<!-- links -->
		</nav>
	</aside>
</article>
```