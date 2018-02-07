# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

       <a name="8.1.5"></a>
## [8.1.5](***REMOVED***) (2018-02-07)


### Bug Fixes

* **ffe-tables:** Fix overlapping media queries ([e2bca24](***REMOVED***))




       <a name="8.1.4"></a>
## [8.1.4](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-tables

   <a name="8.1.3"></a>
## [8.1.3](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-tables

  <a name="8.1.2"></a>
## [8.1.2](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-tables

<a name="8.1.1"></a>

## 8.1.1 (2018-01-10)

**Note:** Version bump only for package ffe-tables

# Changelog

## v.8.1.0

* Added `--hide-xlg` modifier which hides columns in `lg` breakpoint (typically desktop).
* Added `--top` modifier which vertical-aligns content in a columns at the top.

## v.8.0.1

* `--text-left` now also works with `--condensed`

## v.8.0.0

* BREAKING: Changed `--hide-md` modifier to hide columns between `sm` and `md` breakpoints instead of `md` and `lg` to be consistent with `--hide-sm`.
* Added `--hide-lg` modifier which hides columns between the `md` and `lg` breakpoints. This is how `--hide-md` behaved in earlier versions.

## v.7.0.0

* BREAKING: Removed `responsive` from all styles. Style names are now `ffe-table`, `ffe-table__cell`, `ffe-table--condensed`, etc.
* Added modifiers `--breakpoint-sm` and `--breakpoint-none` to table level to modify the responsive behaviour. This is useful when paired with `--hide-sm` or `--hide-md` to maintain normal table style on smaller screens.

## v.6.0.1

* Moved `--columns-sm` to container level to avoid being dependent on markup changes in several places. This change is breaking in relation to `v.6.0.0`, but is published as a patch due to `v.6.0.0` being a mere few hours old.

## v.6.0.0

* BREAKING: Refactored styling for small screens
_ Removed the `--vertical` modifier - vertical view is now default on small screens
_ Added `--columns-sm` modifier to preserve the column layout which was previously default on small screens
* Fixed text color for table headers displayed as pseudo elements
* Added `--hide-sm` modifier to support hiding columns on small screens
* Added margin-bottom to `.ffe-responsive-table__content` on small screens to separate cells more clearly

## v.5.2.1

* Support both versions 9 and 10 of `ffe-core`

## v.5.2.0

* Added `--hide-md` modifier in order to be able to responsively hide columns

## v.5.1.2

* Specified font size of `--condensed` modifier to 14px
* Added example of condensed table

## v.5.1.1

* Replaced hardcoded transition properties with variables from ffe-core

## v.5.1.0

* Added modifier `--text-left` that left-aligns the content of headings and cells. Use it with `.ffe-responsive-table`.

## v.5.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## v.4.0.1

* Update dependency to ffe-core to ensure all colors are correct

## v.4.0.0

* BREAKING: Refactored styling to reflect design guidelines
_ More vertical padding in table rows by default
_ Added default horizontal padding in table cells on small screens
_ Changed th color to ffe-blue-royal
_ Changed background colors in expandable rows \* Different border and text styling in table footers
* Rewrote styling to less syntax
* Specified icon height to fix IE bug where chevron causes table row height issues
* Added `--condensed` modifier to decrease default vertical padding in table rows

## v.3.0.1

* Fixed broken animation in `ffe-expandable-row`

## v.3.0.0

* BREAKING: Removes element styling on table elements.
All table child elements MUST HAVE its corresponding classname. Take a look at the migrationg guide og the examples
* Adds styling for `ffe-sortable-table` and `ffe-expandable-row`.
* Adds a `--collapsed` modifier to `ffe-responsive-table__row` and `ffe-responsive-table__cell` to prevent them taking
up any space. Used on the `.expand-icon` and the row that holds the content to be expanded.
* Adds a `--text-right` modifier to `ffe-responsive-table__content`

## Migrating to v.3.0.0

Make sure all table child elements have the following classnames:

```
<caption
class="ffe-responsive-table__caption">
<thead
class="ffe-responsive-table__head">
<tr
class="ffe-responsive-table__row">
<td
class="ffe-responsive-table__cell">
<footer
class="ffe-responsive-table__footer">
```

`<tbody>` (still) don't require classname

**Visual diff**

No visual diff. The tables in the examples have been updated to use caption instead of `<h2>`.

## v.2.1.0

Adds a `--vertical` modifier to `ffe-responsive-table__content` which makes the table-headers
and table-cell stack vertically. This was implicitly supported and even documented in the
example but this release gives that concept an explicit modifier.

## v.2.0.0

This release removes a lot of specificity from the package, making it easier to override
locally. This is a breaking change in the case where the consumer has applied styling to
a `.ffe-responsive-table` table's children that has been overridden by this package.
Hopefully such code does not exist in large quantities, but please check your implementations
after upgrading.

This release also introduces class names for all styled elements within a
`.ffe-responsive-table` table. This way, we can do away with styling DOM-elements completely
in a future major version. Please go through your implementations and add the appropriate
class names (use the [less-file](less/table.less) for documentation).

There are no visual or functional differences between 1.0.1 and 2.0.0.

## v.1.0.1

This release has added `border-collapse: collapse` to `.ffe-responsive-table`.

**Visual diff**

Consumers of `.ffe-responsive-table` will now have borders even if they don't use common-ui.
