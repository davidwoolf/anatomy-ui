It is a common pattern to disable buttons until some other step is completed, but this should be avoided, especially in forms. Disabled buttons are confusing to all actors, and can be especially frustrating for those using screen reader devices. Here are some common uses of disabled buttons and their alternatives:

| use case                  | alternative                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| invalid form fields       | let them submit! use client and server side validation to give feedback on improper or missing values |
| no change since last save | allow clicking and provide a notification that there's nothing to update                              |
| not enough access         | avoid using buttons and consider removing unactionable content entirely                               |
| sold out item             | provide an error notification or replace the button entirely with a message that the item is sold out |
