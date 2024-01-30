---
title: Links and buttons
slug: links-buttons
---

Link and button tags are used to perform actions by interface actors. However, they are semantically different and should be chosen based on separate requirements.

---

## Links

When creating links to other pages (or sections within the same page), use the `<a>` tag. While it’s common to extend this tag with JavaScript to perform an animation or load in content without reloading the page, if the action is navigation based, it’s best to stick with `<a>` (and ensure those navigation actions still work without JavaScript).

---

## Buttons

When creating actions to submit data or perform non-navigation UI updates, use the `<button>` tag. While buttons are not required to be inside of form elements, it can be helpful to think of interface actions as data submissions when questioning whether a `<button>` is the proper tag to use. For example, a "Delete item" action is a data submission and would be a great use of `<button>`.
