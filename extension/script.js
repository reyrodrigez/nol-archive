chrome.webRequest.onBeforeRequest.addListener((e) => {
  return {
    redirectUrl: `http://web.archive.org/web/${e.url}`
  }
}, {urls: [
      "*://*.gothamist.com/*",
      "*://gothamist.com/*"
    ],types: ["main_frame"]
}, ["blocking"]);
