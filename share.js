const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tabUrl = urlParams.get("tabUrl");
const streamer = urlParams.get("streamer");

console.log("URL del tab:", tabUrl);
console.log("Streamer:", streamer);

saveChannelToLocalStorage(streamer);

chrome.tabs.create({ url: tabUrl });
window.close();

function saveChannelToLocalStorage(channel) {
    chrome.storage.local.set({ channel: channel });
}