While the name might suggest a very specific usage, `<article>` should be used as the container element for any self contained piece of information that can be inserted elsewhere in a document, app, or on third party sites.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) This includes:

- Blog posts (probably the most well known example)
- Product information
- Individual comments
- Widgets (ex: weather conditions)
- Social media posts

Just make sure to add a text heading for each article (the level is up to you). You can also nest `<article>` elements within another, as long as it relates to the parent (a great example is comments on a blog post). When doing this, avoid using a child `<article>` element for ancillary details that don’t make sense on their own.

If you are using `<article>` for a list of items, consider grouping them in a `<section>` that has the `role="feed"` attribute.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)

```html
<section role="feed">
	<article />
	<article />
	<article />
	<article />
	<article />
	<article />
	<!-- n number of items continues... -->
</section>
```