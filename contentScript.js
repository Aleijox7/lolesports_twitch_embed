const iconBase64 = 'data:image/png;base64,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';
const errorIconBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0MjUgNDI1Ij4NCiAgPHBhdGggY2xhc3M9InNoYXBlIiBmaWxsPSIjZjQ0MzM2IiBkPSJNOTQuNzMsOTQuODVoOTQuMTJWNDcuMzdoLTczYy0zNy44MywwLTY4LjQ5LDMwLjc0LTY4LjQ5LDY4LjY2djczLjE3aDQ3LjM3Vjk0Ljg1eiBNMTc5LjA0LDIxMi45NCAgICAgbC04NC4zMSw4NC41MXYtNjAuNzdINDcuMzd2MTQxLjgzaDE0MS40OXYtNDcuNDhoLTYwLjYzbDg0LjMxLTg0LjUyTDE3OS4wNCwyMTIuOTR6IE0zMzAuMzQsMzMxLjAzaC05NC4xMnY0Ny40OGg3MyAgICAgYzM3LjgzLDAsNjguNDktMzAuNzQsNjguNDktNjguNjZ2LTczLjE3aC00Ny4zN1YzMzEuMDN6IE0yMzYuMjIsNDcuMzd2NDcuNDhoNjAuNjNsLTg0LjMxLDg0LjUybDMzLjQ5LDMzLjU3bDg0LjMxLTg0LjUydjYwLjc3ICAgICBoNDcuMzdWNDcuMzdIMjM2LjIyeiI+PC9wYXRoPg0KPC9zdmc+';
const shareIconBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj4NCjxwYXRoIGZpbGw9IiM5MTQ2RkYiIGQ9Ik01NzkuOCAyNjcuN2M1Ni41LTU2LjUgNTYuNS0xNDggMC0yMDQuNWMtNTAtNTAtMTI4LjgtNTYuNS0xODYuMy0xNS40bC0xLjYgMS4xYy0xNC40IDEwLjMtMTcuNyAzMC4zLTcuNCA0NC42czMwLjMgMTcuNyA0NC42IDcuNGwxLjYtMS4xYzMyLjEtMjIuOSA3Ni0xOS4zIDEwMy44IDguNmMzMS41IDMxLjUgMzEuNSA4Mi41IDAgMTE0TDQyMi4zIDMzNC44Yy0zMS41IDMxLjUtODIuNSAzMS41LTExNCAwYy0yNy45LTI3LjktMzEuNS03MS44LTguNi0xMDMuOGwxLjEtMS42YzEwLjMtMTQuNCA2LjktMzQuNC03LjQtNDQuNnMtMzQuNC02LjktNDQuNiA3LjRsLTEuMSAxLjZDMjA2LjUgMjUxLjIgMjEzIDMzMCAyNjMgMzgwYzU2LjUgNTYuNSAxNDggNTYuNSAyMDQuNSAwTDU3OS44IDI2Ny43ek02MC4yIDI0NC4zYy01Ni41IDU2LjUtNTYuNSAxNDggMCAyMDQuNWM1MCA1MCAxMjguOCA1Ni41IDE4Ni4zIDE1LjRsMS42LTEuMWMxNC40LTEwLjMgMTcuNy0zMC4zIDcuNC00NC42cy0zMC4zLTE3LjctNDQuNi03LjRsLTEuNiAxLjFjLTMyLjEgMjIuOS03NiAxOS4zLTEwMy44LTguNkM3NCAzNzIgNzQgMzIxIDEwNS41IDI4OS41TDIxNy43IDE3Ny4yYzMxLjUtMzEuNSA4Mi41LTMxLjUgMTE0IDBjMjcuOSAyNy45IDMxLjUgNzEuOCA4LjYgMTAzLjlsLTEuMSAxLjZjLTEwLjMgMTQuNC02LjkgMzQuNCA3LjQgNDQuNnMzNC40IDYuOSA0NC42LTcuNGwxLjEtMS42QzQzMy41IDI2MC44IDQyNyAxODIgMzc3IDEzMmMtNTYuNS01Ni41LTE0OC01Ni41LTIwNC41IDBMNjAuMiAyNDQuM3oiLz4NCjwvc3ZnPg==';

const supportedLanguages = ["en", "es", "fr", "it", "de"];
let currentLanguage = navigator.language.slice(0, 2);
console.log('Chrome language: ' + currentLanguage);

if (!supportedLanguages.includes(currentLanguage)) {
  currentLanguage = "en";
}
let resizingTriggered = false;

const translations = {
  en: {
    showChat: "Show Chat",
    hideChat: "Hide Chat",
  },
  es: {
    showChat: "Mostrar Chat",
    hideChat: "Ocultar Chat",
  },
  fr: {
    showChat: "Afficher le chat",
    hideChat: "Cacher le chat",
  },
  it: {
    showChat: "Mostra Chat",
    hideChat: "Nascondi Chat",
  },
  de: {
    showChat: "Chat anzeigen",
    hideChat: "Chat ausblenden",
  },
};

function getSelectedLanguage(callback) {
  chrome.storage.local.get("selectedLanguage", (data) => {
    currentLanguage = data.selectedLanguage || "en";
    callback(currentLanguage);
  });
}


function updateTexts(lang) {
  const toggleChatButton = document.querySelector(".toggle-chat-button .container");
  const buttonTextContent = toggleChatButton.childNodes[1];

  if (toggleChatButton.classList.contains("error")) {
    buttonTextContent.textContent = translations[lang].error;
  } else {
    const chatEmbed = document.querySelector(".twitch-chat");
    if (chatEmbed.classList && !chatEmbed.classList.contains("show-chat")) {
      buttonTextContent.textContent = translations[lang].showChat;
    } else {
      buttonTextContent.textContent = translations[lang].hideChat;
    }
  }
}


function setTwitchEmbedSize(twitchEmbed, chatEmbed) {
    const sidebarElement = document.querySelector('.overview-pane');
    if (!sidebarElement) return;
    const containerWidth = sidebarElement.clientWidth;
    const embedHeight = (9 / 16) * containerWidth;
    
    twitchEmbed.width = '100%';
    twitchEmbed.height = embedHeight;
    twitchEmbed.style.height = `${embedHeight}px`;

    chatEmbed.height = `calc(100vh - 80px - ${embedHeight}px)`;
    chatEmbed.style.height = `calc(100vh - 80px - ${embedHeight}px)`;
  }
  
  function createToggleButton(lang) {
    // Localizamos el elemento donde queremos insertar el botón
    const targetElement = document.querySelector("#riotbar-right-content");
    if (!targetElement) return;
  
    const toggleChatContainer = document.createElement("div");
    toggleChatContainer.className = "toggle-chat-container";
  
    const toggleChatButton = document.createElement("div");
    toggleChatButton.className = "toggle-chat-button";
  
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "container";
  
    const icon = document.createElement("img");
    icon.src = iconBase64;
    icon.alt = "";
    buttonContainer.appendChild(icon);
  
    const text = document.createTextNode("");
    buttonContainer.appendChild(text);

    const isLoggedIn = true;
  
    // const isLoggedIn = !document.querySelector(".riotbar-account-anonymous-link-wrapper");
  
    // if (!isLoggedIn) {
    //   icon.src = errorIconBase64;
    //   toggleChatButton.classList.add("error");
    // }
  
    toggleChatButton.onclick = () => {
      if (isLoggedIn) {
        const chatEmbed = document.querySelector(".twitch-chat");
        if (chatEmbed.classList && !chatEmbed.classList.contains("show-chat")) {
          chatEmbed.classList.add("show-chat");
          localStorage.setItem("chatState", "show");
          updateTexts(currentLanguage); // Actualiza los textos con el idioma actual
        } else {
          chatEmbed.classList.remove("show-chat");
          localStorage.setItem("chatState", "hide");
          updateTexts(currentLanguage); // Actualiza los textos con el idioma actual
        }
      }
    };
  
    toggleChatButton.appendChild(buttonContainer);
  
    toggleChatContainer.appendChild(toggleChatButton);
  
    // Insertamos el botón en el elemento seleccionado
    targetElement.appendChild(toggleChatContainer);

    const shareStreamContainer = document.createElement("div");
    shareStreamContainer.className = "share-stream-container";

    const shareStreamButton = document.createElement("div");
    shareStreamButton.className = "share-stream-button";

    const shareButtonContainer = document.createElement("div");
    shareButtonContainer.className = "container";
  
    const shareIcon = document.createElement("img");
    shareIcon.src = shareIconBase64;
    shareIcon.alt = "";
    shareButtonContainer.appendChild(shareIcon);

    shareStreamButton.onclick = () => {
      getChannelFromLocalStorage((savedChannel) => {
        if (!savedChannel) {
          savedChannel = 'knekro';
        }
        chrome.runtime.sendMessage({ action: "generateShareUrl", streamer: savedChannel, actualUrl: window.location.href });
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
          if (request.action === "copyShareUrl") {
            navigator.clipboard.writeText(request.shareUrl).then(
              function () {
                console.log("URL compartida copiada al portapapeles:", request.shareUrl);
              },
              function (err) {
                console.error("Error al copiar la URL compartida al portapapeles:", err);
              }
            );
          }
        });
      });
    };

    shareStreamButton.appendChild(shareButtonContainer);

    shareStreamContainer.appendChild(shareStreamButton);

    targetElement.appendChild(shareStreamContainer);
  
    // Restauramos el estado del chat al recargar la página
    const chatState = localStorage.getItem("chatState");
    if (chatState === "show") {
      const chatEmbed = document.querySelector(".twitch-chat");
      chatEmbed.classList.add("show-chat");
      text.textContent = translations[lang].hideChat;
    } else {
      const chatEmbed = document.querySelector(".twitch-chat");
      chatEmbed.classList.remove("show-chat");
      text.textContent = translations[lang].showChat;
    }
  }


  function createTwitchEmbed(channelName, lang) {
    const bodyContainer = document.querySelector('body');
    // const isLoggedIn = !document.querySelector('.riotbar-account-anonymous-link-wrapper');
    // if (!isLoggedIn) return;
  
    // Crear un contenedor para el stream y el chat
    const streamChatContainer = document.createElement('div');
    streamChatContainer.className = 'stream-chat-container';
    bodyContainer.appendChild(streamChatContainer);
  
    const twitchEmbed = document.createElement('iframe');
    twitchEmbed.src = `https://player.twitch.tv/?channel=${channelName}&parent=lolesports.com&muted=false`;
    twitchEmbed.className = 'twitch-stream show-stream';
    twitchEmbed.allowFullscreen = true;
    twitchEmbed.allow = 'autoplay';
    streamChatContainer.appendChild(twitchEmbed);
  
    const chatEmbed = document.createElement('iframe');
    chatEmbed.src = `https://www.twitch.tv/embed/${channelName}/chat?parent=lolesports.com&darkpopout`;
    chatEmbed.className = 'twitch-chat';
    streamChatContainer.appendChild(chatEmbed);

    setTwitchEmbedSize(twitchEmbed, chatEmbed);
  
    // Ajusta el tamaño del embed de Twitch cuando la ventana se redimensiona
    window.addEventListener('resize', () => setTwitchEmbedSize(twitchEmbed, chatEmbed));
  }

  function updateChannel(channelName) {
    const twitchEmbed = document.querySelector('.twitch-stream');
    const chatEmbed = document.querySelector('.twitch-chat');
  
    twitchEmbed.src = `https://player.twitch.tv/?channel=${channelName}&parent=lolesports.com&muted=false`;
    chatEmbed.src = `https://www.twitch.tv/embed/${channelName}/chat?parent=lolesports.com&darkpopout`;
  }
  
  
  function getChannelFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('channel') || '';
  }

  function saveChannelToLocalStorage(channel) {
    chrome.storage.local.set({ channel: channel });
  }
  
  function getChannelFromLocalStorage(callback) {
    chrome.storage.local.get('channel', (data) => {
      callback(data.channel);
    });
  }
  
  function waitForOverviewPane() {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const overviewPane = document.querySelector('.overview-pane');
            if (overviewPane) {
              resolve();
              observer.disconnect();
              break;
            }
          }
        }
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  function observeVideoPlayer() {
    const videoPlayer = document.querySelector('#video-player');
  
    if (!videoPlayer) return;
  
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          if (!resizingTriggered) {
            triggerResizeEvent();
          }
          break;
        }
      }
    });
  
    // Configura el observer para monitorear cambios en los atributos del elemento #video-player
    observer.observe(videoPlayer, { attributes: true });
  }
  
  function updateStructure() {
    const isLoggedIn = !document.querySelector('.riotbar-account-anonymous-link-wrapper');
    if (isLoggedIn) {
      return;
    }

    const mainElement = document.querySelector('main.Watch');
    if (!mainElement) return;
  
    const overviewPane = mainElement.querySelector('.overview-pane');
    const lower = mainElement.querySelector('.lower');
  
    if (!overviewPane || !lower) return;
  
    // Verifica si el overviewPane es hijo directo del elemento lower
    if (overviewPane.parentElement === lower) {
      // Mueve el overviewPane al principio del elemento main.Watch.large
      mainElement.insertBefore(overviewPane, mainElement.firstChild);
      triggerResizeEvent();
    }
  }

  function triggerResizeEvent() {
    resizingTriggered = true; // Establece resizingTriggered en true antes de disparar el evento
    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);
    setTimeout(() => {
      resizingTriggered = false; // Establece resizingTriggered en false después de disparar el evento
    }, 100);
  }
  
  async function main() {
    await waitForOverviewPane();

    // Llama a la función updateStructure para corregir la estructura inicial de la página
    updateStructure();
    observeVideoPlayer();

    // Observa los cambios en el DOM y actualiza la estructura cuando sea necesario
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          updateStructure();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    let channelName = getChannelFromUrl();
    if (channelName) {
      saveChannelToLocalStorage(channelName);
    }
  
    getChannelFromLocalStorage((savedChannel) => {
      if (!savedChannel) {
        savedChannel = 'knekro';
      }
      getSelectedLanguage((lang) => {
        createTwitchEmbed(savedChannel, lang);
        createToggleButton(lang);
        startIntroJsTutorial(true);
      });
    });
  
    // Escuchar mensajes desde popup.js
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "updateLanguage") {
        currentLanguage = request.language || "en";
        updateTexts(currentLanguage);
      }
      if (request.action === 'updateChannel') {
        updateChannel(request.channelName);
      }
    });

    chrome.runtime.sendMessage({ action: "contentScriptReady" });
  }
  
  window.addEventListener('load', main);

  function startIntroJsTutorial(forceExec=false, callback) {
    const completedTutorial = localStorage.getItem("completedTutorial");
  
    if (forceExec == false && completedTutorial === "true") {
      return;
    }
  
    const waitForElement = (selector, callback) => {
      if (document.querySelector(selector)) {
        callback();
      } else {
        setTimeout(() => waitForElement(selector, callback), 100);
      }
    };
  
    waitForElement(".toggle-chat-button", () => {
      const intro = introJs();
      getSelectedLanguage((lang) => {
      const introTranslations = getIntroTranslations(lang);
      intro.setOptions({
        steps: [
          {
            intro: introTranslations.welcome,
          },
          {
            element: ".toggle-chat-button",
            intro: introTranslations.toggleChatButton,
          },
          {
            element: ".twitch-stream",
            intro: introTranslations.twitchStream,
          },
          {
            element: ".twitch-chat",
            intro: introTranslations.twitchChat,
          },
          {
            element: ".share-stream-button",
            intro: introTranslations.shareStream,
          },
          {
            intro: introTranslations.final,
          },
        ],
        disableInteraction: false,
        exitOnOverlayClick: false,
        showButtons: true,
        doneLabel: introTranslations.doneLabel,
        nextLabel: introTranslations.nextLabel,
        prevLabel: introTranslations.prevLabel,
      });
  
      intro.start();

      intro.onbeforechange(async (targetElement) => {
        const chatEmbed = document.querySelector(".twitch-chat");
      
        if (targetElement === chatEmbed) {
          if (chatEmbed.classList && !chatEmbed.classList.contains("show-chat")) {
            chatEmbed.classList.add("show-chat");
            updateTexts(currentLanguage);
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 400);
            });
          }
        } else {
          if (localStorage.getItem("chatState") != "show") {
            chatEmbed.classList.remove("show-chat");
            localStorage.setItem("chatState", "hide");
            updateTexts(currentLanguage);
          }
        }
      });
  
      intro.oncomplete(() => {
        localStorage.setItem("completedTutorial", "true");
        window.scrollTo(0, 0);
        openPopupTab();
      });
  
      intro.onexit(() => {
        localStorage.setItem("completedTutorial", "true");
      });
    });

  
      if (callback) {
        callback();
      }
    });
  }
  
  function openPopupTab() {
    chrome.runtime.sendMessage({ action: 'openPopupTab' });
  }

  function getIntroTranslations(lang) {
    const introTranslations = {
      en: {
        welcome:
          "Welcome to the LoL Esports Twitch Radio extension tutorial. 👋<br><br>When you close or finish this tutorial, we'll redirect you to select the streamer of your choice. 😎<br><br>Let's get started!",
        toggleChatButton: "This is the button to show or hide the chat.",
        twitchStream: "This is where the Twitch stream will be displayed.",
        twitchChat: "And this is where the Twitch chat will be displayed. You can hide it whenever you want to view the current match's stats you are watching.",
        shareStream: "También puedes compartir el stream con otros usuarios que tengan instalada la extensión, para que vean el mismo stream que tú con el mismo streamer de radio lol. 🔗",
        final: "That's it! Enjoy the lol radio with the streamer of your choice. 😎",
        doneLabel: "Finish",
        nextLabel: "Next",
        prevLabel: "Previous",
      },
      es: {
        welcome:
          "Bienvenido al tutorial de la extensión LoL Esports Twitch Radio. 👋<br><br>Al cerrar o finalizar este tutorial te redirigiremos para que puedas seleccionar el streamer que elijas. 😎<br><br>¡Comencemos!",
        toggleChatButton: "Este es el botón para mostrar u ocultar el chat.",
        twitchStream: "Aquí es donde se mostrará el stream de Twitch.",
        twitchChat: "Y aquí es donde se mostrará el chat de Twitch. Lo puedes ocultar cuando quieras para visualizar las estadísticas de la partida actual que estás viendo.",
        shareStream: "También puedes compartir el stream con otros usuarios que tengan instalada la extensión, para que vean el mismo stream que tú con el mismo streamer de radio lol. 🔗<br><br>(Se te pedirá permiso para acceder a tu portapapeles)",
        final: "¡Eso es todo! Disfruta de la radio de lol con el streamer que elijas. 😎",
        doneLabel: "Finalizar",
        nextLabel: "Siguiente",
        prevLabel: "Anterior",
      },
      fr: {
        welcome:
          "Bienvenue dans le tutoriel de l'extension LoL Esports Twitch Radio. 👋<br><br>Lorsque vous fermez ou terminez ce tutoriel, nous vous redirigerons pour sélectionner le streamer de votre choix. 😎<br><br>Commençons!",
        toggleChatButton: "Ceci est le bouton pour afficher ou masquer le chat.",
        twitchStream: "C'est ici que le stream Twitch sera affiché.",
        twitchChat: "Et c'est ici que le chat Twitch sera affiché. Vous pouvez le masquer à tout moment pour voir les statistiques du match en cours que vous regardez.",
        shareStream: "También puedes compartir el stream con otros usuarios que tengan instalada la extensión, para que vean el mismo stream que tú con el mismo streamer de radio lol. 🔗",
        final: "C'est tout! Profitez de la radio lol avec le streamer de votre choix. 😎",
        doneLabel: "Terminer",
        nextLabel: "Suivant",
        prevLabel: "Précédent",
      },
      it: {
        welcome:
          "Benvenuto nel tutorial dell'estensione LoL Esports Twitch Radio. 👋<br><br>Quando chiudi o finisci questo tutorial, ti reindirizzeremo per selezionare lo streamer che preferisci. 😎<br><br>Iniziamo!",
        toggleChatButton: "Questo è il pulsante per mostrare o nascondere la chat.",
        twitchStream: "Qui verrà visualizzato lo stream di Twitch.",
        twitchChat: "E qui verrà visualizzata la chat di Twitch. Puoi nasconderla ogni volta che vuoi per visualizzare le statistiche della partita attuale che stai guardando.",
        shareStream: "También puedes compartir el stream con otros usuarios que tengan instalada la extensión, para que vean el mismo stream que tú con el mismo streamer de radio lol. 🔗",
        final: "È tutto! Goditi la radio di lol con lo streamer che preferisci. 😎",
        doneLabel: "Termina",
        nextLabel: "Avanti",
        prevLabel: "Indietro",
      },
      de: {
        welcome:
          "Willkommen beim Tutorial für die LoL Esports Twitch Radio-Erweiterung. 👋<br><br>Wenn du dieses Tutorial schließt oder beendest, leiten wir dich weiter, um den Streamer deiner Wahl auszuwählen. 😎<br><br>Los geht's!",
        toggleChatButton: "Dies ist der Button zum Anzeigen oder Ausblenden des Chats.",
        twitchStream: "Hier wird der Twitch-Stream angezeigt.",
        twitchChat: "Und hier wird der Twitch-Chat angezeigt. Du kannst ihn ausblenden, wann immer du möchtest, um die Statistiken des aktuellen Spiels, das du ansiehst, einzusehen.",
        shareStream: "También puedes compartir el stream con otros usuarios que tengan instalada la extensión, para que vean el mismo stream que tú con el mismo streamer de radio lol. 🔗",
        final: "Das ist es! Viel Spaß mit dem lol-Radio und dem Streamer deiner Wahl. 😎",
        doneLabel: "Fertig",
        nextLabel: "Weiter",
        prevLabel: "Zurück",
      },
    };
  
    return introTranslations[lang];
  }