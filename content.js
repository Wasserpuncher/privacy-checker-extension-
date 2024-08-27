(function() {
  let isHttps = window.location.protocol === 'https:';
  let hasTrackingScripts = Array.from(document.getElementsByTagName('script')).some(script => {
    return script.src.includes('tracking') || script.src.includes('analytics');
  });

  chrome.storage.local.set({ isHttps, hasTrackingScripts }, function() {
    console.log('Privacy data saved.');
  });
})();
