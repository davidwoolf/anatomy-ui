It is a common pattern to disable buttons until some other step is completed, but this should be avoided, especially in forms. Disabled buttons are confusing to all actors, and can be especially frustrating for those using screen reader devices. Here are some common uses of disabled buttons and their alternatives.

### When forms contain invalid fields

Let actors keep submitting! Whether the form values are validated on the server or client, submission attempts should generally never be disabled, only the storing of values themselves should be blocked.

### Updates to items with no changes

While it may seem obvious to prevent updates when nothing has changed, this isn't always obvious to the person making updates. Instead, let them know there haven't been any updates since the last save.

### Unauthorized access to interface sections

If an interface section is unauthorized for the current actor, it should be removed entirely, not shown in a disabled state.
