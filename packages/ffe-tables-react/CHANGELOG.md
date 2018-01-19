# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="4.9.7"></a>
## [4.9.7](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-tables-react

      <a name="4.9.6"></a>
## [4.9.6](***REMOVED***) (2018-01-18)




**Note:** Version bump only for package ffe-tables-react

    <a name="4.9.5"></a>

## [4.9.5](***REMOVED***) (2018-01-16)

**Note:** Version bump only for package ffe-tables-react

  <a name="4.9.4"></a>

## 4.9.4 (2018-01-10)

### Bug Fixes

* **ffe-tables-react:** Correct main file in package.json ([d9ee539](***REMOVED***))
* **ffe-tables-react:** Properly handle zero as row id ([35b523b](***REMOVED***))


# Changelog

## v4.9.3

* Fixed broken prop type for data IDs

## v4.9.2

* Added documentation and refactored slightly.
* Added missing prop types for documented props

## v4.9.1

* Fixed prop type of `caption` from `string` to `node` to allow rendering React components.
This was always intended based on `README.md`.
* Replace `flow.sh` with `buildCI.sh`.
* Added support for sorting on potentially undefined values in columns.

## v4.9.0

* Improve performance of table row rendering/sorting by utilizing an optional `id` property on each row object.
* The `id` property also fixes a bug where updating table rows (i.e pagination) didn't cause an unmount/mount of the new rows.

## v4.8.0

* Added optional props `descending` and `sortBy` to set initial sort.

## v4.7.0

* Bump peerDep on `ffe-tables` to `^8.1.0`.
* Added optional prop `alignTop` to table cells.
* Added optional prop `hideOnDesktop` to support hiding columns on desktop.

## v4.6.0

* Bump peerDep on `ffe-tables` to `^8.0.0`.
* Added optional prop `breakpoint` to table component.
* Added optional prop `hideOnSmallTablet` to support hiding columns responsively on smaller tablet screen sizes.
* Fixed lists of `PropTypes` to include recently added props.
* Fixed `alignLeft` not working on `SortableTable`.

## v4.5.0

* Added `hideOnMobile` boolean to support hiding columns responsively on mobile screen sizes.
* Added `columnLayoutMobile` boolean to support two column layout on mobile screen sizes.

## v4.4.1

* Allow sending in React components instead of strings as headings

## v4.4.0

* Added optional boolean prop `alignLeft` to support table modifier `--text-left` from `ffe-tables`.

## v4.3.0

* Added `hideOnTablet` boolean to support hiding columns responsively on tablet screen sizes.
* Added dep on `prop-types` and changed all `PropTypes` to use this package.

## v4.2.1

* Expand peerDep scope of `ffe-tables` to include `5.x`.
* Remove peerDep on `ffe-core` and `ffe-icons-react`.

## v4.2.0

* Added prop `srOnlyCaption` which visually hides the caption but keeps it available to screen readers.
* Added props `limit` and `offset` to render only a subset of given data.

## v4.1.1

* Reverted attempted fix on `onKeyDown`-events on expandable rows as it caused unforseen issues.
Consumers should be responsible for stopping event propagation when needed anyways.
* Added `event.stopPropagation()` to buttons in table examples to demonstrate the need for this.
* Improved logic to collapse rows on sort.

## v4.1.0

* Added optional boolean props `condensed` and `smallHeader` to support table modifiers from `ffe-tables`.

## v4.0.1

* All rows will now collapse on sort.
We do this because expanded state belongs to the row number,
not to the row data. Thus expanding and then sorting would result
in the same row number being expanded, even though it gets new data.

## v4.0.0

* BREAKING: Major API changes as we introduce the magic table which is both expandable and sortable.
* BREAKING: Column header values can no longer be nodes, only strings are accepted.
* Added support for custom compare function on each sortable column through the column prop `compare`.
* Added support for explicitly making a column not sortable through the column prop `notSortable`.
* Removed `isRequired` on prop `children` in `TableRowExpandable` as this produced a warning for unexpandable rows in expandable table.
* Fixed issue where having a button in the clickable part of an expandable row could cause the row to expand onKeyDown on the button.
* The consumer is still responsible for handling propagation of onClick-events.

### Migrating to v4.0.0

* Exports has changed from 3 components to a single default export.
* Tables are now made sortable by the boolean prop `sortable`.
* Tables are now made expandable by providing a function on prop `expandedContentMapper`.
* This replaces both the boolean `expandable` and the mapping to `TableRowExpandable` in table `children`.
* Please consult `README.md` for details about this function.

## v3.0.3

* Update dependency ffe-tables to 4.x
* Update dependency ffe-core to >= 8.2.3 < 9

## v3.0.2

* Fixed: When no children, or a falsy value, is passed as children to `TableRowExpandable` the row will set the expanded value in this.state to false in componentWillReceiveProps.

## v3.0.1

* Fixed: State change on props update in `SortableTable` will now only trigger if props have actually changed.
Also, this data will only be sorted if `sortBy` is set in component state.
* Fixed: Component will only update if props or state has actually changed
(avoid updating if equal props are given through a prop change in a parent component).

## v3.0.0

* BREAKING: Behavioural change on `TableRowExpandable`. If no children, or a falsy value is passed as children,
the row will not be expandable. This will remove chevron, tabIndex and event listeners from the `tr`.
This is intended used when there are no details available for the row, or if the expandable area contains
actions which are currently blocked on this item.
* Fixed: `TableRow` in a plain `ResponsiveTable` should not have a `tabIndex` (should not be focusable).

## v2.0.1

* Update dependency ffe-icons-react to ^2.3.0
* Update peerDependencies ffe-icons-react to ^2.3.0
* Removing sorting arrow in header cell if header is empty string

## v2.0.0

* BREAKING: `headers` prop is renamed to `columns` to include footers
* data is no longer a required prop in ResponsiveTable

### Migrating to v2.0.0

* Rename `headers` prop to `columns` in all tables
* Rename the `content` prop in the columns objects to `header`

change this:

```javascript
const headers = [
{ key: 'name', content: 'Varenavn' },
{ key: 'price', content: 'Pris', alignRight: true }
];
<ResponsiveTable headers={headers} data={data}>
```

to this:

```javascript
const columns = [
{ key: 'name', header: 'Varenavn' },
{ key: 'price', header: 'Pris', alignRight: true }
];
<ResponsiveTable columns={columns} data={data}>
```

## v1.0.2

* exports in index.js
* refactoring

## v1.0.1

* Update dependency ffe-icons-react to ^2.1.0

## v1.0.0

* Responsive table
* Sortable table
* Expandable row
* Update dependency ffe-tables to ^3.0.0

## v0.1.1

* Updgrade eslint to use latest FFE configuration

## v0.1.0

* Initial release
