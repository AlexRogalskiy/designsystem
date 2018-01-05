# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

     <a name="9.0.1"></a>

## [9.0.1](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/compare/ffe-icons@9.0.0...ffe-icons@9.0.1) (2018-01-05)

**Note:** Version bump only for package ffe-icons

     <a name="9.0.0"></a>

# [9.0.0](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/compare/ffe-icons@8.0.0...ffe-icons@9.0.0) (2018-01-02)

### Bug Fixes

* **ffe-icons:** Rename numeric icons ([502c8c9](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/502c8c9))

### BREAKING CHANGES

* **ffe-icons:** Rename two icons that begins with numbers in order
  to allow named exports in react package.

The following icons have been renamed:

* `1-2-3-sirkel-ikon` is now named `sirkel-1-2-3-ikon`
* `1-2-3-understrek-ikon` is now named `understrek-1-2-3-ikon`


    <a name="8.0.0"></a>

# 8.0.0 (2017-12-22)

### Bug Fixes

* **ffe-icons:** Fix git repository url ([6278180](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/6278180))
* **ffe-icons:** Remove class attribute from klokke-ikon ([0298c35](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/0298c35))

### Features

* **ffe-icons:** Add contribute.md link to readme ([166d9b2](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/166d9b2))

### Fix

* Rename all icons to end with -ikon ([f4b815a](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/f4b815a))

### BREAKING CHANGES

* This commit renames two icons in ffe-icons.
  `bankid-icon` is now named `bankid-ikon`, and
  `mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

# Changelog

## 7.17.0

* Add kr-klokke-ikon.svg

## 7.16.0

* Add gravemaskin-ikon.svg

## 7.15.0

* Add info-sirkel-solid-ikon.svg

## 7.14.0

* Add p-pose-stjerne-ikon.svg

## 7.13.0

* Add beta-ikon.svg
* Add kr-tannhjul-ikon.svg
* Add mobil-utropstegn-ikon.svg
* Add person-streker-ikon.svg

## 7.12.0

* pil-ut-av-boks-skraa-ikon has been updated with thicker lines

## 7.11.0

* snakkeboble-ikon.svg has been redesigned to be more in line with the visual profile.

## 7.10.0

* Added trillekoffert-ikon.svg

## 7.9.1

* Remove class property from taleassistent-ikon, that broke usage with ffe-icons-react

## 7.9.0

* Added taleassistent-ikon.svg

## 7.8.0

* Added bankid- and varsel-ikon.svg

## 7.7.0

* Added kalkulator-ikon.svg

## 7.6.1

* Updated utropstegn-icon.svg

## 7.6.0

* Added hus-stjerne-ikon.svg

## 7.5.4

* Bugfix: Removed a class-attribute that caused warnings when used with react.

## 7.5.3

* Bugfix: Remember that `.svg` is appended to all input in the `icons` config object
  (as a convenience).

## 7.5.2

* Bugfix: Include all icons when `opts.icons` are set to `*`. This fixes a problem in
  `ffe-icons-react` where no icons were outputted during the build

## 7.5.1

* Add babel-polyfill, to support node 4

## 7.5.0

* Added svar-pil-ikon.svg, binders-ikon.svg

## 7.4.1

* Bugfix: resolves a path issue that made the `projectIcons` config unusable outside of `npm link`

## 7.4.0

* Bugfix: the produced bundle should again only contain the icons in your `icons.json`
* New feature: `projectIcons` option now available

Usage:

```json
{
    "dest": "dist/resources/",
    "icons": ["bamse-ikon"],
    "projectIcons": ["src/main/resources/special/snowflake/snokrystall-ikon"]
}
```

## 7.3.0

Added moped-ikon.svg

## 7.2.0

Added pluss-icon.svg

## 7.1.1

Added handlevogn-pakker-ikon.svg, bil-camping-ikon.svg and hus-tre-ikon.svg

## 7.0.1

Changes the shebang so it works better on different flavours of Linux

## 7.0.0

**Breaking changes**

The Gulp dependency has been removed. Outdated packages that crash on
Node 7 deep in the dependency tree made it overdue

_To migrate you need to update your npm-script_:

```json
"ffe:icons": "ffe-icons --opts=icons.json",
```

Note that the `--opts` flag now assumes the base path for the location of `icons.json` is the directory
above `node_modules/` (the same directory as your apps `package.json`). So what used to be
`--opts=../../icons.json` is now just `--opts=icons.json`.

## 6.4.0

* Added koffert-ikon.svg

## 6.3.0

* Added p-pose-ikon.svg

## 6.2.0

* Added mynter-to-stabler-pluss.svg

## 6.1.1

* Update design on faks-printer-solid-ikon [FFE-90](https://jira.intern.sparebank1.no/browse/FFE-90)

## 6.1.0

* Added pose-i-haand-ikon.svg

## 6.0.0

* Breaking: kontorbygg-ikon renamed to kontorbygg-solid-ikon in order to be consistent with how other icons are named. Anyone who where using the `kontorbygg-ikon` and wants to keep using the version with a fill should change to `kontorbygg-solid-ikon`.
* Add new icons
* kontorbygg-ikon (replaces old solid one with a non-solid version)
* skyskraper-ikon
* personer-ikon

## 5.3.1

* No change

## Version 5.3.0

* Added a few new icons
* hus-hake-ikon.svg
* hus-hjerte-ikon-svg
* kr-hake-ikon.svg

## Version 5.2.1

* No change.

## Version 5.2.0

* Added konfetti-ikon.svg
* Added tommel-opp-ikong.svg

## Version 5.1.0

* Added a bunch of new icons
* campingbil-ikon.svg
* fritidshus-ikon.svg
* handlevogn-ikon.svg
* hus-enebolig-ikon.svg
* hus-horisontaldelt-ikon.svg
* hus-ikon.svg
* hus-kjedet-ikon.svg
* hus-leilighet-ikon.svg
* hus-rekkehus-ikon.svg
* hus-vertikaldelt-ikon.svg
* katt-ikon.svg
* lommebok-ikon.svg
* mobil-ikon.svg
* motorsykkel-ikon.svg
* nokkelhull-ikon.svg
* person-brukket-arm-ikon.svg
* robat-ikon.svg
* seilbat-ikon.svg
* snoscooter-ikon.svg
* sofa-ikon.svg
* sporsmalstegn-ikon.svg
* sykebil-ikon.svg
* traktor-ikon.svg
* ung-caps-ikon.svg

## Version 5.0.0

* A vengeful lumberjack has swung the axe against tre-ikon, spire-ikon, and blad-ikon. It was decided the icons did not fit the brand and should not be used by anyone.

## Version 4.7.0

* Added bygning-pluss-ikon.svg

## Version 4.6.0

* Added stetoskop-ikon.svg

## Version 4.5.0

* Added forstorrelsesglass-ikon.svg

## Version 4.4.0

* Added snakkeboble-ikon.svg

## Version 4.3.0

* Added person-rullestol-ikon.svg
* Added hjerte-kardiograf-ikon.svg

## Version 4.2.0

* Added graf-opp-enkel-ikon.svg
* Added soylediagram-ikon.svg
* Added pil-ut-av-boks-skraa-ikon.svg

## Version 4.1.0

* Added blyant-ikon.svg
* Added person-pluss-ikon.svg
* Added bsu-ikon.svg

## Version 4.0.0

* Renamed: hake-sirkel-ikon.svg => hake-sirkel-solid-ikon.svg
* Added a new hake-sirkel-ikon.svg that is not solid

## Version 3.7.2

* New icon: kalender-ikon.svg

## Version 3.7.1

* Quickfix for kartmarkor-ikon - Was not optimized correctly

## Version 3.7.0

* Changed look of tannhjul-ikon
* Add old tannhjul-ikon.svg as tannhjul-solid-ikon.svg
* Name change: dokument-med-test-ikon.svg -> dokument-med-tekst-ikon.svg
* Name change: hengelas.svg -> hengelas-ikon.svg
* Name change: kontorbygg.svg -> kontorbygg-ikon.svg
* Name change: pil-ned.svg -> pil-ned-ikon.svg
* New icon: utropstegn-ikon.svg
* New icon: info-ikon.svg
* New icon: dokument-efaktura-ikon.svg
* New icon: kartmarkor-ikon.svg
* New icon: kr-pil-solid-ikon.svg

## Version 3.6.0

* New icons: hake-stjerne-ikon

## Version 3.5.0

* New icons: blad-ikon, hake-sirkel-ikon, spire-ikon, tre-ikon

## Version 3.4.0

* New icons: graf-opp-ikon, kake-kvart-ikon, person-slips-ikon, sparegris-ikon, konvolutt-ikon

## Version 3.3.0

* New icon: kontorbygg

## Version 3.2.0

* New icon: paraply-ikon

## Version 3.1.0

* New icons: hengelaas, pil-ned, tannhjul
* Automatic publish and test
* Screenshot in readme

## Version 3.0.0

* Removed the postinstall script, since it created issues with builds on npm 2.x. See https://github.com/npm/npm/issues/8850

## Version 2.4.0

Optimized:

* boks-ikon
* varebil-ikon
* verktoy-skiftenokkel-ikon

## Version 2.3.0

Renamed lukk-ikon to kryss-sirkel-ikon and optimized it

## Version 2.2.0

Optimized:

* lyspare-ikon

## Version 2.1.0

Added new icons and optimized some old ones for use in lo-kort.

Optimized:

* 1-2-3-sirkel
* 1-2-3-understrek
* atv
* badekar-dusj
* bamse
* bat-liten
* bat-stor
* bestikk
* betaling-100
* betaling-kontaktlos
* betaling-kontaktlos-info
* betalingskort
* betalingskort-innpakket
* betalingskort-kryss
* bil
* faks-printer
* kr-pil
* kryss
* laptop
* mobil-a-b-c
* mynter
* person
* tabell-kroner

New:

* betalingskort-globus
* betalingskort-hand
* betalingskort-kreditt
* betalingskort-stjerne
* dokument-med-test
* faks-printer-2
* mynter-2
* pdf
* piler-hoyre-venstre
* xls-ikon

## Version 2.0.0

For version 2.x, removed all existing icons and added \_ICON_REQUIREMENTS.md to have a clean slate. Also updated README.

Releasing version 2 with the first batch of optimized icons:

* chevron
* familie
* flamme
* fly
* gave
* hake
* hjerte
* info-sirkel
* kr-pose
* person-mikrofon
* plaster
* telefon

## Version 1.0.3

* Made devDependencies actual dependencies so package consumers get them...
* Re-added postinstall script

## Version 1.0.2

* Removed postinstall script, since some build tools had trouble finding gulp at that stage
* Updated package.json with the correct repository URL

## Version 1.0.1

* Added plaster-ikon
  ![plaster-ikon](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-icons/browse/icons/plaster-ikon.svg?raw)

## Version 1.0.0

* Renamed default sprite to ffe-icons.svg
* Renamed desktop-ikon to laptop-ikon
* Added several new icons to ffe-icons
* Removed sfo-icons - use instead the common ffe-icons
* Updated the gulpfile to be extendable via an options json to allow for minimum SVG sprite generation per project
