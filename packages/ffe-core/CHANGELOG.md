# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="10.3.1"></a>
## [10.3.1](***REMOVED***) (2018-02-01)


### Bug Fixes

* **ffe-core:** Re-add property `sb1.StaticResources` in `package.json`. ([3506fb5](***REMOVED***))




      <a name="10.3.0"></a>
# [10.3.0](***REMOVED***) (2018-01-19)


### Features

* **ffe-core:** Add --inline modifier to headings ([98b9570](***REMOVED***))




    <a name="10.2.5"></a>
## [10.2.5](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-core

  <a name="10.2.4"></a>

## [10.2.4](***REMOVED***) (2018-01-10)

**Note:** Version bump only for package ffe-core

<a name="10.2.3"></a>

## [10.2.3](***REMOVED***) (2018-01-09)

**Note:** Version bump only for package ffe-core

<a name="10.2.2"></a>

## [10.2.2](***REMOVED***) (2018-01-05)

**Note:** Version bump only for package ffe-core

<a name="10.2.1"></a>

## [10.2.1](***REMOVED***) (2018-01-04)

**Note:** Version bump only for package ffe-core

<a name="10.2.0"></a>

# 10.2.0 (2017-12-22)

### Features

* **ffe-core:** Add contribute.md link to readme ([4f0693c](***REMOVED***))

# Changelog

## v.10.1.2

* Reduced font size of `ffe-fontsize-form-input` from `18px` to `16px`.

## v.10.1.1

* Replaced hardcoded font-sizes with variables

## v.10.1.0

* Supports `--no-underline` modifier for `ffe-h*` classes. Only use these if there are anchors in menus with header-style typography when it's obvious from their context that they are clickable.

## v.10.0.0

* BREAKING: The new default for links is the underlined version. If you want links without underlines use the `--no-underline` modifier.
* BREAKING: Element styling (via `ffe-element-styling.less` and `element-map.less`) is removed.

Element styling has been deprecated for several majors, so hopefully this will not be a heavy upgrade for most
applications. However, for those applications that still import and use these styles, the upgrade path consists of
adding some classes in your DOM:

* Add `ffe-body-text` class to `<body />` tag.
* Add `ffe-h[1-6]` classes to `<h[1-6] />` tags
* Add `ffe-body-paragraph` class to `<p />` tags
* Add `ffe-strong-text` class to `<strong />` tags
* Add `ffe-em-text` class to `<em />` tags
* Add `ffe-pre-text` class to `<pre />` tags
* Add `ffe-link-text` class to `<a />` tags
* Add `ffe-divider-line` class to `<hr />` tags
* Add `ffe-fieldset` class to `<fieldset />` tags

## v.9.3.0

* Added cursor: pointer to `ffe-link-text`
* Added support for modifier `--underline` to `ffe-link-text` for anchors with underline.

Prefer using the underlined variant. There will be an upcoming major release that makes it the new default.

Early adaptors of `v.9.3.0` who wants to be ready for the next major can start using `--no-underline` for
the links that they don't want underlined in the next major.

## v.9.2.0

* Added `motion.less`, which contains variables for common transitions

To migrate to this release, replace timing functions (including `ease-in`, `ease-out` and other functions that do not directly correspond to the variables) and duration with the variables that fit your use case. Make sure to specify which property to transition - avoid `all`.

For example `transition: all 0.15s ease;` may be replaced by `transition: transform @ffe-transition-duration @ffe-ease-in-out-back;`.

## v.9.1.0

* Definition of breakpoints and variables related to layout (`@app-width`, ...) have their own less files: `less/breakpoints.less` and `less/app-width.less`.
* Each less file can be independently imported.
* Better default for `@base-url` ("." instead of "/").

## v.9.0.1

* Added devDependency to ffe-lists in order to correctly style examples

## v.9.0.0

* BREAKING: List styling are removed from `ffe-core`. These styles are now available in `ffe-lists`.
* BREAKING: `.ffe-number-list` is no more - use `ffe-lists`'s `.ffe-numbered-list`.
* BREAKING: Removed `@ffe-sand-25` from colors.less, renamed other color variables.

To upgrade to this release, all references to the following variables must be replaced by their new names in your LESS code:

* `@ffe-blue-flat` --> `@ffe-blue-cobalt`
* `@ffe-blue-royal-light-wcag` --> `@ffe-blue-azure`
* `@ffe-blue-royal-light` --> `@ffe-blue-deep-sky`
* `@ffe-blue-royal-light-50` --> `@ffe-blue-sky`
* `@ffe-blue-royal-light-20` --> `@ffe-blue-pale`
* `@ffe-blue-royal-light-10` --> `@ffe-blue-ice`
* `@ffe-green-wcag` --> `@ffe-green-shamrock`
* `@ffe-green-dark-10` --> `@ffe-green-emerald`
* `@ffe-green-wcag-20` --> `@ffe-green-mint`
* `@ffe-orange-wcag` --> `@ffe-orange-fire`
* `@ffe-orange-wcag-20` --> `@ffe-orange-salmon`
* `@ffe-purple-wcag` --> `@ffe-purple-magenta`
* `@ffe-sand-50` --> `@ffe-sand-ivory`
* `@ffe-sand-25` --> `@ffe-sand`
* `@ffe-grey-light-bg` --> `@ffe-grey-cloud`
* `@ffe-grey-light` --> `@ffe-grey-silver`
* `@ffe-grey-dark` --> `@ffe-grey-charcoal`

To save some time on searching and replacing, run this command from inside your repository:

for pair in ffe-blue-flat:ffe-blue-cobalt ffe-blue-royal-light-10:ffe-blue-ice ffe-blue-royal-light-20:ffe-blue-pale ffe-blue-royal-light-50:ffe-blue-sky ffe-blue-royal-light-wcag:ffe-blue-azure ffe-blue-royal-light:ffe-blue-deep-sky ffe-green-wcag-20:ffe-green-mint ffe-green-wcag:ffe-green-shamrock ffe-green-dark-10:ffe-green-emerald ffe-orange-wcag-20:ffe-orange-salmon ffe-orange-wcag:ffe-orange-fire ffe-purple-wcag:ffe-purple-magenta ffe-sand-50:ffe-sand-ivory ffe-sand-25:ffe-sand ffe-grey-light-bg:ffe-grey-cloud ffe-grey-light:ffe-grey-silver ffe-grey-dark:ffe-grey-charcoal; do old=${pair%%:_}; new=${pair##_:}; echo "Changing $old to $new"; find . -type f -name '\*.less' -exec sed -i "s/$old/$new/g" {} \;; done

## v.8.2.4

Adjusted colors to reflect design guidelines

## v.8.2.3

Added color `@ffe-blue-royal-light-10` (background color of expandable table rows)

## v.8.2.2

`ffe-divider-line`'s width explicitly set to 100% to make sure it divides its entire
container. This fixes an issue discovered when using the divider in a `ffe-grid` column.
It should not affect dividers used outside of flex-containers.

## v.8.2.1

Change `ffe-section-wrapper--bg-blue-flat` text color selector from wildcard to individual for typography.
This fixes a bug where `ffe-secondary-button` inside a `ffe-section-wrapper--bg-blue-flat` would get
white text on a white background.

## v.8.2.0

Added `--bg-blue` and `--bg-blue-flat` modifiers to `.ffe-section-wrapper`.
The `--bg-blue-flat` text color to `ffe-white` for all its children since the
default color does not work very well on dark blue backgrounds.

## v.8.1.2

This release changes the font size and / or line-height for h2, h4 and h6 for
**desktop** users. In addition, the color of `.ffe-sub-lead-paragraph` has
changed from `@ffe-blue-royal` to `@ffe-black`.

**Visual diff**

Consumers of `.ffe-h2`, `.ffe-h4`, `.ffe-h6` and `.ffe-sub-lead-paragraph`
will have to update their visual baseline images. Since the actual changes will
be small and have a very small chance of actually breaking a design, this
change was introduced as a patch.

## v.8.1.1

This release changes `@ffe-sand` from `#E1D5AF` to `#F8F5EB`

Since `@ffe-sand` after this change is more or less equal to the old
`@ffe-sand-25`, `@ffe-sand-25` is now in effect an alias for `@ffe-sand`.
This choice has been made to preserve backwards compatibility for the
Less code. Consumers of `@ffe-sand-25` should see no perceivable change.

The postfix usually indicates opacity relative to the base color, given
a white background color. In this case `@ffe-sand-25` would have become
too white, so it has been removed from the color palette.

**Visual diff**

Consumers of `@ffe-sand` and `@ffe-sand-50` will find the colors are
significantly lighter. This is by design, and considered a bugfix.

## v.8.1.0

Added a class, ffe-screenreader-only, and styles for hiding page
elements visually, while retaining accessibility.

## v.8.0.3

**Visual diff**

`@ffe-grey-light-bg` changes from `#F1F1EF` to `#F9F9F9`. This change
fixes problems with color contrast, and is considered a bugfix.

## v.8.0.2

* Fixes a bug where `box-sizing: border-box;` went missing

## v.8.0.1

* Readded normalize.css as a static file

## v.8.0.0

* Removing components from ffe-core (new modules created for them in their respective repos).
* Updating examples to only include new ffe-core elements.
* Updated normalize.css and added it as an npm dependency. (see https://github.com/necolas/normalize.css/blob/master/CHANGELOG.md for changes since v.3.0.3)
* Cleaned up example files. Removed navigation, javascript and unused styling.
* Added a description for migrating to v8.0.0

### Migrating to v.8.0.0

_ffe-core_ has been split in several packages, and a few things have been removed.

#### Installing the latest FFE

To upgrade from 7.x you will need to install these packages:

```bash
$ npm install --save ffe-core ffe-buttons ffe-form ffe-lists ffe-tables ffe-tabs ffe-spinner
```

Remember to also update your Less imports
(example below is given [less-plugin-npm-import](https://github.com/less/less-plugin-npm-import) is used):

```less
@import 'npm://ffe-core/less/ffe';
@import 'npm://ffe-buttons/less/buttons';
@import 'npm://ffe-form/less/form';
@import 'npm://ffe-lists/less/lists';
@import 'npm://ffe-tables/less/tables';
@import 'npm://ffe-tabs/less/tabs';
@import 'npm://ffe-spinner/less/spinner';
```

#### Other breaking changes

`ffe-info-message` has been renamed to `ffe-field-info-message` (in `ffe-form`)
`ffe-info-message--error` is now `ffe-field-error-message`
`ffe-info-message--success` is now `ffe-field-success-message`

`ffe-clearfix` has been removed, which has consequences for `ffe-section-wrapper`.

If your design is dependent on the clearfix you must add it to your project yourself:

```less
/* In your Less, after importing ffe-core */
.ffe-section-wrapper {
    &:before,
    &:after {
        display: table;
        content: "";
    }
    &:after {
        clear: both;
    }
}
```

`ffe-button-group` was removed, but has been reintroduced in `ffe-buttons@2.1.0`.

If you want to keep using it and don't plan on upgrading to `ffe-buttons@2.1.0` soon you can add the following to your project:

```less
.ffe-button-group {
padding: 40px 0;

&--thin {
  padding: 0;
}
}

.ffe-button-group [class^='ffe-'][class$='-button'] {
margin: 0 auto 10px;

@media screen and (min-width: @breakpoint-sm) {
  display: inline-block;
  margin: 0 0 10px 10px;
  width: auto;

  &:first-child {
      margin-left: 0;
  }
}
}
```

If you have used any of the `.ffe-shadow-buttons-whatever()` mixins they are now `.ffe-buttons-shadow-whatever()`.

#### "Gotchas"

* `ffe-tab-button` is in `ffe-tabs`, not `ffe-buttons`

## v.7.0.1

* Minor fix: make button texts of loading buttons unselectable, the text is only of interest for
screen readers and ought to remain invisible under all circumstances.

## v.7.0.0

* Breaking: removed `--inline` support from `.ffe-form-label`. It was just setting max-width to 100% which is not the same as inlining. Removed `max-width: 85%` from `ffe-form-label`. It's layout and doesn't belong in the component. It now defaults to browser default which should be `none`. If you were using `ffe-form-label ffe-form-label--inline` you can just use `ffe-form-label`. If you were relying on the max-width being 85% then action is required.
* Breaking: removed support for deprecated `ffe-check-box` in favor of the arguably less aptly named `ffe-checkbox`. NOTE: Filename is also changed.
* Breaking: removed support for deprecated `ffe-select-box` in favor of the arguably less aptly named `ffe-dropdown`.
* Added CONTRIBUTE.md to clarify release procedures.

## v.6.3.2

* Change background position of dropdown arrows from fluid to static
* Rollback breaking change from v.6.3.1 - `--inline` support has been restored to `.ffe-form-label`

## v.6.3.1

* Add isLoading style for ffe-dropdown-react
* Focus state styling fix for select element in IE
* Focus state styling fix for ghost action button

## v.6.3.0

* Add description list component
* Patch --no-space on ffe-content-container to also work on larger screens
* Minor form examples fix: prefixed icon-info-error with ffe-

## v.6.0.1

* Minor radio switch fix: adjusted vertical position of the label
* Minor form examples fix: prefixed info-message and info-message--error with ffe-
* Added display: inline-block to ffe-primary-button\_\_label-text fix a bug in Safari. Label disappears if changing states from loading to normal.

## v.6.0.0

* Several changes to sizes and line-heights of the typography. Also added ffe-sub-lead-paragraph.

## v.5.6.0

* Adding 20% opaque green.
* Adding 20% opaque orange.
* Adding 20% opaque light royal blue.
* Minor fixes to tertiary-button appearance.

## v.5.5.3

* Removing general positioning of spinner to fix layout bug when spinner is used on secondary buttons.
Bug happens because secondary-button reruns ffe-sb1-spinner-mixin after position is set in primary-button which it extends.

## v.5.5.2

* Fixed bug that vertically misalignes icon on info-messages. [Source of solution](http://stackoverflow.com/questions/11726442/font-rendering-line-height-issue-on-mac-pc-outside-of-element)

## v.5.5.1

* Secondary button: Modified colors for the loading state

## v.5.5.0

* Layout: Support `--bg-sand` and `--bg-grey` modifiers on `ffe-content-container`

## v.5.4.0

* ffe-dropdown replaces ffe-select-box, while ffe-select-box is kept (but deprecated) until the next major release

## v.5.3.1

* Responsive table: Fix left-alignment of table headers in Internet Explorer

## v.5.3.0

* Implemented Tertiary button
* Updated element mapping to include fieldsets. Fixes default styling set by normalize.
* Introduce less variable `ffe-expand-button-height`

## v.5.2.0

* Bugfix select box text foreground color
* New component: expand button (for controlling collapsable containers)

## v.5.1.0

* Implemented ghost- and tab-button

## v.4.2.1

* New build

## v.4.2.0 (16.03.2016)

* Inlined svg-icons in less to avoid potential include-issues

## v.4.1.0

* Introduce new gateway less-file: ffe-no-reset.less
* Add property for static resources to package.json. Fascilitates tooling that copies static resources to output folder

## v.4.0.1

* Fix: `ffe-` prefix for `@breakpoint-sm` was missing for `.primary-button` making buttons have width 100% on larger screens

## v.4.0.0 (08.03.2016)

* Element styling is now opt-in rather than default

## v.3.0.0 (07.03.2016)

* All css classes now prefixed with `ffe-`
* All less color variables now prefixed with `ffe-`

## v.2.1.1 (04.02.2016)

* Fix: 0 vertikal margin for content-container--no-space regardless of screen size
* Examples: it's better to use https:// URL than protocol relative
* Styling changes for check-box
* Styling changes for radio-button
* Make sure --no-margin variants of headers are always valid

## v.2.1.0 (04.01.2016)

* FFE-3 Adding layout system
* FFE-4 Using vendor fonts without hinting to avoid IE-issues and updated styleguide
* FFE-4 Fikser strong og fjerner unødvendige kodeeksempler på typografi
* Stilguide endringer (lagt til ny meny og ny struktur)

## v.2.0.0 (26.11.2015)

* Bytter fra RSCSS til BEM som kodestandard for CSS.

## v.1.0.3 (20.11.2015)

* IE-fix. Legger til z-index på radioknapp for at den ikke skal skjules under header ved re-rendring.

## v.1.0.2 (12.11.2015)

* Styling direkte på elementer er nå optional
* Fargejusteringer
* Fixet tabbing til checkboxer og radio-knapper for Mobile Safari
* Fjernet dobbel border-bottom under collapsed radio blocks

## v.1.0.0 (21.10.2015)

* Bruk av `aria-hidden` og `aria-invalid` for å style skjemafeil, erstatter `-error`
* Bruk av `aria-hidden` for å skjule innhold i radio-blocks, erstatter `-visible`

## v.0.0.2 (29.09.2015)

* Omstrukturering og design av eksempelsiden (stilguide)

## v0.0.1 (22.09.2015)

* Grunnleggende typografi, variabler (farger, etc.) og basic komponenter
