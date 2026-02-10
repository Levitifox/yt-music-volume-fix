# YT Music Volume Fix

A small Chrome extension that makes the YouTube Music volume control more precise by allowing a higher maximum value and finer step increments.

## Features
- Toggle the fix on/off from the popup.
- Set a custom maximum volume (default: 100) to increase slider granularity.
- Uses Chrome `storage.sync` to persist settings.

## Installation
1. Open Chrome (or a Chromium-based browser).
2. Go to `chrome://extensions` and enable *Developer mode*.
3. Click *Load unpacked* and select this project folder.

## Usage
- Click the extension icon to open the popup.
- Enable or disable the fix using the checkbox.
- Change *Maximum Volume* to increase granularity (e.g. `40` or `500`).
- The content script applies the settings on https://music.youtube.com/*.

## Files
- `manifest.json` — extension manifest and permissions.
- `content.js` — content script that updates the YouTube Music control.
- `popup.html`, `popup.css`, `popup.js` — extension UI and settings storage.
- `icons/` — extension icons.

## Permissions
This extension only requests the `storage` permission to save user preferences.
