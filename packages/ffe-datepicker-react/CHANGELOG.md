# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.7.8"></a>
## [2.7.8](***REMOVED***) (2018-01-23)




**Note:** Version bump only for package ffe-datepicker-react

<a name="2.7.7"></a>
## [2.7.7](***REMOVED***) (2018-01-22)




**Note:** Version bump only for package ffe-datepicker-react

<a name="2.7.6"></a>
## [2.7.6](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-datepicker-react

<a name="2.7.5"></a>
## [2.7.5](***REMOVED***) (2018-01-19)


### Bug Fixes

* Upgrade ffe-icons-react to v4 ([ea2d734](***REMOVED***))




<a name="2.7.4"></a>
## [2.7.4](***REMOVED***) (2018-01-19)


### Bug Fixes

* **ffe-datepicker-react:** added tests ([b4ad204](***REMOVED***))
* **ffe-datepicker-react:** changed slightly the logic so that calendar will open only if it is not already open ([233d17b](***REMOVED***))
* **ffe-datepicker-react:** refactoring ([e11e9f1](***REMOVED***))
* **ffe-datepicker-react:** This commit adds a fix to make sure date with validation error can be changed ([610dfcb](***REMOVED***))




<a name="2.7.3"></a>
## [2.7.3](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-datepicker-react

<a name="2.7.2"></a>
## 2.7.2 (2018-01-10)




**Note:** Version bump only for package ffe-datepicker-react

# Changelog

## v2.7.1
* Run onValidationComplete on empty values
* Trigger onChange before MIN_DATE and MAX_DATE errors to avoid resetting error messages onChange

## v2.7.0
* Add onValidationComplete property
* Fix typo in readme
* Fix strike-throughs in readme

## v2.6.4
* Support for React 16

## v2.6.3
* Prevent unnecessary calls to onChange

## v2.6.2
* Added validation when minDate or maxDate changes

## v2.6.1
* Add support for version 8 of `ffe-form`
* Fix incorrect variable names in `i18n`

## v2.6.0
* Provide validation error text to onError callback. This allows the consuming component to use the error texts defined by this component.

## v2.5.2
* Removing class `ffe-calendar__date--focus` from container-div.

## v2.5.1
* Fix prop type warning when using `ariaInvalid` prop with a boolean value on `Datepicker`.
This property is deprecated now, you should instead use the standard `aria-invalid` with a `String` value ("true" or "false").

## v2.5.0
* Add property `hideErrors`, which hides the internal datepicker error output if any
* Add possibility to use `aria-invalid` prop on both `Datepicker` and `DateInput`. This will take prescedence over the `ariaInvalid` prop.
* Fix typo in class name for `ffe-calendar__date--focus`, making it not apply the correct styles
* Improve readme slightly
* Internal refactor and formatting cleanup

## v2.4.4
* Fix bug where the datepicker wasn't clickable with invalid-input.

## v2.4.3
* Bugfix: SimpleDate.fromString did not parse valid dates on certain days at the end of a month, which resulted in false-negative validation errors.

## v2.4.2
* Minor error message text fix

## v2.4.1
* Add optional label to input field

## v2.4.0
* Fix a bug where the datepicker didn't show on focus/click after there has been an error.
* Use PropTypes from `prop-types` package, instead of React.

## v2.3.0
* Increased version range for ffe-form

## v2.2.0
* Added multiple dateformats to input field
**d[d]m[m]yy[yy]
**d[d] m[m] yy[yy]
**d[d]/m[m]/yy[yy]
**d[d]-m[m]-yy[yy]
**d[d].m[m].yy[yy]
* Validates on blur with default or custom error messages

## v2.1.1
* Expand peerDep scope of `ffe-datepicker` to include `4.x`.
* Expand peerDep scope of `ffe-form` to include `5.x`.
* Remove peerDep on `ffe-core`.

## v2.1.0
* Make it possible to display the calendar above the datepicker field using the `calendarAbove` boolean property.

## v2.0.9
* Remove event listeners on unmount

## v2.0.8
* Fix focus/click bug which made it possible to keep several calendars open when having more than one datepicker on the same page

## v2.0.7
* Update dependency ffe-datepicker to ^3.0.1

## v2.0.6
* Use event.preventDefault on buttons for navigating months

## v2.0.5
* Update dependency ffe-datepicker to ^3.0.0

## v2.0.4
* Update eslint to use FFE eslint

## v2.0.3
* Added type=button to header buttons which prevents a form submit
* Updated peerDependency for ffe-form to 4.x.x

## v2.0.2
* Updated peerDependency for ffe-form to 2.x.x or 3.x.x
* Updated dependency for ffe-datepicker to 2.1.1

## v2.0.1
* Remove abbr from th in datepicker as it is not a prop. Causing console error

## v2.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Bumped dependency on `ffe-datepicker` to `^2.0.0`
* Added peerDependency on `ffe-form` on `^1.0.1`
* Updated path to datepicker.less

## v1.1.5

* Fix tabbing bug which caused datepicker not to close

## v1.1.4

* Bumped version of ffe-datepicker dependency

## v1.1.3

* Added max length for input

## v1.1.2

* Added ariaInvalid to support validation errors

## v1.1.1

* Fix month formatting bug which caused incorrect dates in certain cases

## v1.1.0

* Styles moved to seperate package.
* Expose styles through index.less
* Fix focus bug after selecting date


## v1.0.0

* Initial release
