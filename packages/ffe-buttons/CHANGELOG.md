# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.1.1"></a>
## [5.1.1](***REMOVED***) (2018-01-04)




**Note:** Version bump only for package ffe-buttons

<a name="5.1.0"></a>
# 5.1.0 (2017-12-22)


### Features

* **ffe-buttons:** Add contribute.md link to readme ([e0e3d2c](***REMOVED***))




# Changelog

## v5.0.1
* Fix unnecessary duplicate nesting of `--loading`-modifier.

## v5.0.0
* BREAKING: peerDependency to `ffe-core` bumped to new major
* Replaced hardcoded font-sizes with mixins from ffe-core

## v4.2.0
* Add `ffe-task-button` as a new button type. Should be used for any action where the user is adding a new item to some kind of collection. It's not opinionated about what icon to use, but was designed with `pluss-ikon` from `ffe-icons` in mind.

## v4.1.0
* Add `--inline` modifier to ffe-button-group. When using this modifier, the buttons in the modified button group will not have width 100% on small screens,
and will be displayed on the same line as long as there is enough horizontal space.

## v4.0.4
* Support both versions 9 and 10 of `ffe-core`

## v4.0.3
* Replaced hardcoded transition properties with variables from ffe-core

## v4.0.2
* Add line-height to buttons to remove implicit dependency on ffe-body-text
* Add multiline example for ffe-action-button

## v4.0.1
* Fixed `active` and `focus` state of the chevron in `ffe-shortcut-button--condensed`.

## v4.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## v3.0.0
* BREAKING: `ffe-back-button` is now a `display: inline-block` element, which might break some layouts.
Migrating should be pretty simple though - if you were depending on `ffe-back-button` to be a block level
element, please wrap your element in a block level element, like a `<div />`.
* Made `ffe-back-button` work with `<a />` elements.
* Made `ffe-tertiary-button` work with `<a />` elements.

## v2.5.7
* Removed use of `line-height` to set button height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## v2.5.6
* Changed primary button background color to @ffe-blue-royal-light-wcag

## v2.5.5
* According to Bodil Egge, icons in buttons are 14x14 px in "verktøykassa", not 18x18 px. This change only affects the size of the icon, the button's outer dimensions are not changed.

## v2.5.4
* Fix visual bug with icons in buttons in IE by explicitly setting label icon width.

## v2.5.3
* The chevron icon does not need to have the inline style `transform:rotate(-90deg)` anymore.

## v2.5.2
* Add `outline: 0` to `.ffe-primary-button:focus` to avoid "double" focus in Firefox.

## v2.5.1
* Fix position of spinner in condensed buttons.
* Minor placement adjustment of icons in secondary and tertiary buttons (this time with help from professionals).

## v2.5.0
* Icons can be nested inside tertiary buttons with `.ffe-tertiary-button__label-icon`.
This also requires `.ffe-tertiary-button--with-icon` on the button.
* Adjust odd placement of icons in secondary buttons.

## v2.4.0
* Icons can be nested inside secondary buttons with `.ffe-secondary-button__label-icon`.

## v2.3.0
* Add compact variant of action, primary, secondary, tertiary and shortcut button (modifier `--condensed`).

## v2.2.0
* Added ffe-back-button

## v2.1.4
* Updated design of ffe-tertiary-button

## v2.1.3
* Add `fill: @ffe-blue-royal-light-wcag;` to `.ffe-shortcut-button__icon-chevron` so it's no longer black by default.
* Fix broken selector for `:hover` state of `.ffe-shortcut-button__icon-chevron`.

## v2.1.2

Add `cursor: pointer;` to `.ffe-tertiary-button`

## v2.1.1

Improve `.ffe-button-group` to use less fragile selectors

## v2.1.0

La til `ffe-button-group` _by popular demand_

## v2.0.0

* Bumpet ffe-core peerDependency til ny major ^8.0.2
* Bumpet devDependency på ffe-core til ^8.0.2

## v1.0.1

La til mixins.less med mixins som forsvinner fra ffe-core med version 8.0.0

## v1.0.0

Første versjon av pakken. Less-filene har før dette ligget i [ffe-core](***REMOVED***).
Ffe-buttons ble skilt ut fra ffe-core i ffe-core v8.0.0.
