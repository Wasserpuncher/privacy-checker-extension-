{
  "manifest_version": 2,
  "name": "Privacy Checker",
  "version": "1.0",
  "description": "A browser extension that checks the security of the current webpage and provides privacy feedback.",
  "permissions": [
    "activeTab",
    "storage"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "icons": {
    "48": "icon.png"
  }
}
