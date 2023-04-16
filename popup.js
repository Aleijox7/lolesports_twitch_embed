function isValidUrl(url) {
    return url.includes("https://lolesports.com/live/") || url.includes("https://lolesports.com/vod/");
  }
  
  document.getElementById("update-channel-button").onclick = () => {
    const channelInput = document.getElementById("channel-input");
    const channelName = channelInput.value;
    if (channelName) {
      chrome.storage.sync.set({ twitchChannel: channelName }, () => {
        console.log(`Canal guardado: ${channelName}`);
        window.close();
      });
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector("#update-channel-button");
    const channelInput = document.querySelector("#channel-input");
  
    chrome.storage.local.get("channel", (data) => {
      if (data.channel) {
        channelInput.value = data.channel;
      }
    });

    // Enfocar y seleccionar el texto del input automáticamente
    channelInput.focus();
    setTimeout(() => {
        channelInput.select();
      }, 100);
  
    saveButton.addEventListener("click", () => {
      const channelName = channelInput.value;
      if (channelName) {
        chrome.storage.local.set({ channel: channelName }, () => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (isValidUrl(tabs[0].url)) {
              chrome.tabs.sendMessage(tabs[0].id, {
                action: "updateChannel",
                channelName: channelName,
              });
            } else {
              console.log("La pestaña actual no es una página de LoL Esports.");
            }
          });
        });
      }
    });

    // Permitir el envío del formulario utilizando la tecla Enter
    channelInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
        saveButton.click();
        }
    });
  });
  