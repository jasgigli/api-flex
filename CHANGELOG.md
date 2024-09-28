# Changelog

## [1.1.0] - 2024-09-18

### Fixed

- Resolved issue where API requests using `axios` resulted in incorrect `Authorization` header and unexpected `400 Bad Request` errors.

### Added

- Improved error logging with more detailed error messages.
- Updated handling of `Authorization` header to support dynamic tokens.

## [1.0.0] - 2024-04-27

### Added

- Initial release of `api-ease` library.
- Features include API request handling with `fetch` and `axios`, automatic retries, token management, error handling, and caching.
