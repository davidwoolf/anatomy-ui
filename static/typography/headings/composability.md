In most interfaces, components are abstracted and reused in different contexts and orders. Therefore, including hard coded headings such as `<h2>` and `<h3>` won't work as they may get out of order. There are a couple ways to handle problems like this:

- create composable components where base componetns are passed as children
- add prop arguments for headings and other text elements

In general, use composable architectures–especially if the main goal of the component is to abstract styling rather than stateful functionality. This mirrors static HTML element structure and encourages more atomic component systems. At a certain low level however, you may need to go the prop argument route.