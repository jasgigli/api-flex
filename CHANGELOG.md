# Changelog

## [1.1.0] - 2024-09-27

### Added

- **Automatic Version Increment**: Implemented a workflow to automatically increment the version and publish to npm when changes are pushed to the main branch.
- **Improved Caching Mechanism**: Enhanced caching capabilities to improve performance and reduce API calls for repeated requests.
- **Dynamic Request Handling**: Added support for dynamic request parameters to simplify API calls.
- **Additional Documentation**: Updated documentation to include usage examples and API reference.

### Fixed

- Resolved issue where API requests using `axios` resulted in incorrect `Authorization` header and unexpected `400 Bad Request` errors.
- Improved error handling in the library to provide more meaningful messages and prevent crashes during failed requests.

## [1.0.0] - 2024-04-27

### Added

- Initial release of the `api-flex` library.
- Features include API request handling with `fetch` and `axios`, automatic retries, token management, error handling, and caching.
