# Accordion

An accordion is a component

---

## Example

---

## Usage

test

### Installation

```sh
pnpm i @anatomykit/svelte
```

### Anatomy

```html
<script>
  import * as Accordion from "@anatomykit/svelte";
</script>

<AccordionRoot>
  <AccordionItem>
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</AccordionRoot>
```

### API

| name         | type                     | default        |
| ------------ | ------------------------ | -------------- |
| type         | `single \| multiple`     | `"single"`     |
| value        | `string \| string[]`     | —              |
| defaultValue | `string \| string[]`     | —              |
| onChange     | `function`               |                |
| direction    | `horizontal \| vertical` | `"horizontal"` |

---

## Action primitive

For ultimate control, use the action primitive.

```html
<script>
  import { accordion } from "@anatomykit/svelte/actions";
</script>

<div use:accordion="{{}}"></div>
```

---

## Keyboard support

| Key         | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| Space       | Toggles an item when the relevant trigger is focused                      |
| Enter       | Toggles an item when the relevant trigger is focused                      |
| Tab         | Focuses to the next accordion trigger                                     |
| Shift + Tab | Focuses the previous accordion trigger                                    |
| ArrowDown   | Focuses the next accordion trigger when the orientation is vertical       |
| ArrowUp     | Focuses the previous accordion trigger when the orientation is vertical   |
| ArrowRight  | Focuses the next accordion trigger when the orientation is horizontal     |
| ArrowLeft   | Focuses the previous accordion trigger when the orientation is horizontal |
| Home        | Focuses the first accordion trigger                                       |
| End         | Focuses the last accordion trigger                                        |
