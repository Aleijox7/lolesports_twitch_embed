chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openPopupTab') {
      const url = chrome.runtime.getURL('popup.html');
      chrome.tabs.create({ url: url });
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "contentScriptReady") {
      chrome.storage.local.set({ contentScriptTabId: sender.tab.id });
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateShareUrl") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabUrl = request.actualUrl;
        const shareUrl = generateShareUrl(tabUrl, request.streamer);
        console.log("URL para compartir:", shareUrl);
        chrome.tabs.sendMessage(tabs[0].id, { action: "copyShareUrl", shareUrl: shareUrl });
      });
    }
  });  
  
  function generateShareUrl(tabUrl, streamer) {
    const baseUrl = chrome.runtime.getURL("share.html");
    const encodedTabUrl = encodeURIComponent(tabUrl);
    const encodedStreamer = encodeURIComponent(streamer);
    const shareUrl = `${baseUrl}?tabUrl=${encodedTabUrl}&streamer=${encodedStreamer}`;
    return shareUrl;
  }