# ffe-accordion-react

## Install

```
$ npm install --save ffe-accordion-react
```

## Example

```javascript
import { WhiteAccordion, AccordionItem } from 'ffe-accordion-react';

<WhiteAccordion>
    <AccordionItem title="Some header text, always visible">
        <p>Some more content, only shown when expanded.</p>
    </AccordionItem>
</WhiteAccordion>
```

## API

#### `Accordion`

* `children` (AccordionItem)

The AccordionItems contained by the Accordion.

#### `AccordionItem`

* `title` (renderable - string | component | array of components)

The accordion header content. May be a simple string or a more complex construction of components.

* `children` (renderable - string | component | array of components)

The content shown when the accordion is expanded. May be a simple string or a more complex construction of components.

* `isOpen` (boolean)

Enables you to override whether an item is open by default

* `onOpen` (function)

Callback function when accordion opens

* `onClose` (function)

Callback function when accordion close

* `ignoredNodeNames` (array of strings)

Some scenarios might involve having a form element (e.g a checkbox) inside the accordion item. In these cases you don't
want a click event on the checkbox to propagate to the underlying element and thus cause the accordion to expand. Avoid
this by passing the HTML node names you want to ignore clicks on (e.g. ['INPUT', 'LABEL'])

* `hasNestedCollapse` (boolean)

Set this property to true if you're sending in children that contains (or may contain) `react-collapse/Collapse`
element(s). Defaults to false.

## Test

Use npm linking to test local changes in your own project

```
sudo npm link
```

and in your own project:

```
npm link ffe-accordion-react
```
