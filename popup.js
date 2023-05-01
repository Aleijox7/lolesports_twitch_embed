const translations = {
  en: {
    selectTwitchChannel: "Select Twitch channel",
    updateChannel: "Update channel",
  },
  es: {
    selectTwitchChannel: "Seleccionar canal de Twitch",
    updateChannel: "Actualizar canal",
  },
  fr: {
    selectTwitchChannel: "Sélectionnez la chaîne Twitch",
    updateChannel: "Mettre à jour la chaîne",
  },
  it: {
    selectTwitchChannel: "Seleziona canale Twitch",
    updateChannel: "Aggiorna canale",
  },
  de: {
    selectTwitchChannel: "Twitch-Kanal auswählen",
    updateChannel: "Kanal aktualisieren",
  },
};

function changeLanguage(lang) {
  document.querySelector("h1").innerText = translations[lang].selectTwitchChannel;
  document.querySelector("#update-channel-text").innerText = translations[lang].updateChannel;

  // Guarda el idioma seleccionado en localStorage
  chrome.storage.local.set({ selectedLanguage: lang }, () => {
    // Envía un mensaje para notificar a contentScript.js sobre el cambio de idioma
    chrome.storage.local.get("contentScriptTabId", (data) => {
      if (data.contentScriptTabId) {
        chrome.tabs.sendMessage(data.contentScriptTabId, { action: "updateLanguage", language: lang });
      } else {
        console.log("No se encontró el ID de la pestaña del content script.");
      }
    });
  });
}


document.querySelector("#language-button").addEventListener("click", function () {
  const languageOptions = document.querySelector("#language-options");
  languageOptions.classList.toggle("hidden");
});

document.querySelector("#language-options").addEventListener("click", function (event) {
  if (event.target.tagName === "DIV") {
    const lang = event.target.dataset.lang;
    changeLanguage(lang);
    document.querySelector("#language-options").classList.add("hidden");
  }
});

  function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language.split('-')[0];
  }

  chrome.storage.local.get("selectedLanguage", (data) => {
    const savedLanguage = data.selectedLanguage;
    const defaultLanguage = savedLanguage ? savedLanguage : getBrowserLanguage();
    changeLanguage(defaultLanguage in translations ? defaultLanguage : "es");
  });  
  
  document.addEventListener("click", function (event) {
    const languageOptions = document.querySelector("#language-options");
    const languageSelector = document.querySelector("#language-selector");
  
    if (
      !languageSelector.contains(event.target) &&
      !languageOptions.classList.contains("hidden")
    ) {
      languageOptions.classList.add("hidden");
    }
  });

function isValidUrl(url) {
    return url.includes("https://lolesports.com/live/") || url.includes("https://lolesports.com/vod/");
  }
  
  document.getElementById("update-channel-button").onclick = () => {
    const channelInput = document.getElementById("channel-input");
    const channelName = channelInput.value;
    if (channelName) {
      chrome.storage.sync.set({ twitchChannel: channelName }, () => {
        console.log(`Canal guardado: ${channelName}`);
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
          chrome.storage.local.get("contentScriptTabId", (data) => {
            if (data.contentScriptTabId) {
              chrome.tabs.sendMessage(data.contentScriptTabId, { action: "updateChannel", channelName: channelName }, () => {
                chrome.tabs.update(data.contentScriptTabId, { active: true });
                window.close();
              });
            } else {
              console.log("No se encontró el ID de la pestaña del content script.");
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
  