# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="2.1.5"></a>
## [2.1.5](***REMOVED***) (2018-01-31)




**Note:** Version bump only for package ffe-formatters

      <a name="2.1.4"></a>
## [2.1.4](***REMOVED***) (2018-01-22)




**Note:** Version bump only for package ffe-formatters

    <a name="2.1.3"></a>
## [2.1.3](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.2"></a>
## [2.1.2](***REMOVED***) (2018-01-18)




**Note:** Version bump only for package ffe-formatters

<a name="2.1.1"></a>

## 2.1.1 (2018-01-16)

**Note:** Version bump only for package ffe-formatters

## v2.1.0

* `formatNumber` now accepts additional props to the `opts`-argument. - `thousandSeparator` (defaults to NON_BREAKING_SPACE) - `decimalMark` (defaults to ',')
## v2.0.4
* Bugfix: Fixed a bug where - `formatNumber(0)` returns 0, (expected: '0') - `formatNumber(0, { decimals: 2 })` returns 0, (expected: '0,00')
## v2.0.3

### 🐛 Bugfixes

* `formatDistance` no longer returns the empty string if the input is equal to
the result of `formatNumber(input)` (solves part of SFO-6995)

## v2.0.2

* Bugfix: Include correct files in NPM package.

## v2.0.1

* Bugfix: Fix broken export of `formatFodselsnummer` from the main index file.

## v2.0.0

**BREAKING:** `formatPercentage` now expects the actual percentage instead of the fraction.
Previously: `formatPercentage(0.123) === 12.3 %`, now: `formatPercentage(0.123) === 0.12 %`.
To migrate, just make sure the value you send in is in the correct order of magnitude.

## v1.0.0

Initial version of `ffe-formatters`. Includes the following formatters:

* formatAccountNumber
* formatCurrency
* formatDate
* formatFodselsnummer
* formatKm
* formatNumber
* formatPercentage
