# Changelog

All notable changes to this project will be documented in this file.

## [1.2.3]

### Changed

- Improved FilterParser for undefined values

### Fixed

- Fix problem with empty filters list in latest release

## [1.2.2]

### Fixed

- Fix broken filters in combination with beforeAll hooks

## [1.2.1]

### Fixed

- Fix broken TypeError: this.titleValidator.hasFilter is not a function

## [1.2.0]

### Fixed

- Added new event listener for before() to avoid some setup processes from running if the test will be skipped anyway.

## [1.1.0]

### Added

- Add new option to provide a combination of AND and OR conditions for filters

## [1.0.0]

### Added

- Initial version of the Cypress Filters
