# Changelog

## [1.0.6] - 2024-10-23

### Added

- **⚡️ Circuit Breaker Feature**: Introduced a Circuit Breaker mechanism that enhances API request resilience by preventing repeated attempts to call a failing service, improving application stability and user experience.

### Updated

- **Documentation**: Updated documentation to include examples and explanations for the new Circuit Breaker feature, enhancing clarity for all existing features.

---

## [1.0.5] - 2024-10-23

### Updated

- **Batch Requests**: Added the batch requests feature as it was fully implemented yet.

- **Documentation**: Updated with examples for existing features and enhanced clarity.

---

## [1.0.4] - 2024-10-23

### Added

- **Retry Mechanism Enhancements**: Introduced a feature that allows failed requests to automatically retry again and again based on specified conditions like network errors or rate limiting. The retry functionality now supports customizable retry counts and delays, ensuring more resilient API calls.

**Example:**

```javascript
import apiFlex from "api-flex";

const response = await apiFlex("https://example.com/api", {
  retries: 5, // Retry up to 5 times
});
```

---

## [1.0.3] - 2024-10-23

### Updated

- **Dependencies**: Updated `axios` and `node-fetch` to the latest versions for enhanced performance and security.
- **Bug Fixes**: Addressed minor bugs reported in version 1.0.2 to improve stability.
- **Documentation**: Enhanced documentation with more detailed usage examples and improved clarity.

---

## [1.0.2] - 2024-09-27

### Added

- **Automatic Version Increment**: Implemented a workflow to automatically increment the version and publish to npm when changes are pushed to the main branch.
- **Improved Caching Mechanism**: Enhanced caching capabilities to improve performance and reduce API calls for repeated requests.
- **Dynamic Request Handling**: Added support for dynamic request parameters to simplify API calls.
- **Additional Documentation**: Updated documentation to include usage examples and API reference.

### Fixed

- Resolved issue where API requests using `axios` resulted in incorrect `Authorization` header and unexpected `400 Bad Request` errors.
- Improved error handling in the library to provide more meaningful messages and prevent crashes during failed requests.

---

## [1.0.1] - 2024-09-23

### Fixed

- **Bug Fixes**: Addressed an issue with token refresh handling and resolved some minor inconsistencies in request handling logic.

---

## [1.0.0] - 2024-09-21

### Added

- Initial release of the `api-flex` library.
- Features include API request handling with `fetch` and `axios`, automatic retries, token management, error handling, and caching.

---

## Version History Summary

- **1.0.6** - Added Circuit Breaker feature and updated documentation.
- **1.0.5** - Added batch request support and updated documentation.
- **1.0.4** - Added enhanced retry mechanism with customizable retry count and delays.
- **1.0.3** - Updated dependencies, bug fixes, and documentation improvements.
- **1.0.2** - Introduced caching, dynamic request handling, and version increment workflow.
- **1.0.1** - Fixed token refresh and minor request handling issues.
- **1.0.0** - Initial release with core features like retries, token management, and caching.
