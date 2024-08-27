chrome.storage.local.get(['isHttps', 'hasTrackingScripts'], function(data) {
  document.getElementById('https-status').textContent = data.isHttps ? 'This page is using HTTPS.' : 'This page is not using HTTPS.';
  document.getElementById('tracking-status').textContent = data.hasTrackingScripts ? 'This page contains tracking scripts.' : 'No tracking scripts found on this page.';
});
