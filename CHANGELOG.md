# Changelog

Notable changes made to this project will be documented in a detailed fashion within this file below.

## 1.2.2 - 02.22.2026
### Fixed
- Updated URL redirect RegEx to resolve issues with Reddit media and gallery links in the new "allow" rule.

## 1.2.1 - 02.22.2026
### Fixed
- Fixed regexFilter error occurring in Chrome by re-working URL redirect RegEx logic to be RE2 compliant.

## 1.2.0 - 02.12.2026
### Fixed
- Updated URL redirect RegEx to resolve issues with Reddit media and gallery links.

## 1.1.0 - 02.10.2026
### Added
- Dynamic rules support in background service worker

### Fixed
- FireFox temporary extension persistence across various tabs

## 1.0.0 - 02.06.2026
### Added
- Redirect from reddit.com to old.reddit.com
- Full support for all subreddit paths and also queries
- Leverages Chrome V3 declarativeNetRequest

## [Unreleased]