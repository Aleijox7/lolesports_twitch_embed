const iconBase64 = 'data:image/png;base64,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';
const errorIconBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0MjUgNDI1Ij4NCiAgPHBhdGggY2xhc3M9InNoYXBlIiBmaWxsPSIjZjQ0MzM2IiBkPSJNOTQuNzMsOTQuODVoOTQuMTJWNDcuMzdoLTczYy0zNy44MywwLTY4LjQ5LDMwLjc0LTY4LjQ5LDY4LjY2djczLjE3aDQ3LjM3Vjk0Ljg1eiBNMTc5LjA0LDIxMi45NCAgICAgbC04NC4zMSw4NC41MXYtNjAuNzdINDcuMzd2MTQxLjgzaDE0MS40OXYtNDcuNDhoLTYwLjYzbDg0LjMxLTg0LjUyTDE3OS4wNCwyMTIuOTR6IE0zMzAuMzQsMzMxLjAzaC05NC4xMnY0Ny40OGg3MyAgICAgYzM3LjgzLDAsNjguNDktMzAuNzQsNjguNDktNjguNjZ2LTczLjE3aC00Ny4zN1YzMzEuMDN6IE0yMzYuMjIsNDcuMzd2NDcuNDhoNjAuNjNsLTg0LjMxLDg0LjUybDMzLjQ5LDMzLjU3bDg0LjMxLTg0LjUydjYwLjc3ICAgICBoNDcuMzdWNDcuMzdIMjM2LjIyeiI+PC9wYXRoPg0KPC9zdmc+';

let currentLanguage = "es";
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
    currentLanguage = data.selectedLanguage || "es";
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
        savedChannel = 'knekro'; // Canal por defecto
      }
      getSelectedLanguage((lang) => {
        createTwitchEmbed(savedChannel, lang);
        createToggleButton(lang);
      });
    });
  
    // Escuchar mensajes desde popup.js
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "updateLanguage") {
        currentLanguage = request.language || 'es';
        updateTexts(request.language);
      }
      if (request.action === 'updateChannel') {
        updateChannel(request.channelName);
      }
    });
  }
  
  window.addEventListener('load', main);

  let player;

// Función para inicializar el reproductor de YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-player", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Función que se ejecuta cuando el reproductor de YouTube está listo
function onPlayerReady(event) {
  event.target.playVideo();
}

document.addEventListener('DOMContentLoaded', function() {
  // Función para agregar elementos de control de YouTube
  function addYouTubeControls() {
    const controlsHTML = `
      <div class="youtube-controls">
        <button class="control-button rewind-5">-5 segundos</button>
        <button class="control-button rewind-1">-1 segundo</button>
        <button class="control-button pause-play">Pausar/Reproducir</button>
        <button class="control-button forward-1">+1 segundo</button>
        <button class="control-button forward-5">+5 segundos</button>
        <button class="control-button speed-x2">x2 velocidad</button>
      </div>
    `;

    document.querySelector(".WatchMenu").insertAdjacentHTML('beforeend', controlsHTML);

    // Agrega la funcionalidad a los botones de control
    document.querySelector(".control-button.pause-play").addEventListener('click', function () {
      const currentState = player.getPlayerState();
      if (currentState === YT.PlayerState.PLAYING) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });

    document.querySelector(".control-button.rewind-1").addEventListener('click', function () {
      player.seekTo(player.getCurrentTime() - 1, true);
    });

    document.querySelector(".control-button.rewind-5").addEventListener('click', function () {
      player.seekTo(player.getCurrentTime() - 5, true);
    });

    document.querySelector(".control-button.forward-1").addEventListener('click', function () {
      player.seekTo(player.getCurrentTime() + 1, true);
    });

    document.querySelector(".control-button.forward-5").addEventListener('click', function () {
      player.seekTo(player.getCurrentTime() + 5, true);
    });

    document.querySelector(".control-button.speed-x2").addEventListener('click', function () {
      const currentPlaybackRate = player.getPlaybackRate();
      if (currentPlaybackRate === 1) {
        player.setPlaybackRate(2);
      } else {
        player.setPlaybackRate(1);
      }
    });
  }

  // Función para eliminar elementos de control de YouTube
  function removeYouTubeControls() {
    const youtubeControls = document.querySelector(".youtube-controls");
    if (youtubeControls) {
      youtubeControls.remove();
    }
  }

  // Escucha el evento de clic en los elementos de selección de plataforma
  const providerOptions = document.querySelectorAll(".option[data-provider]");
  providerOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedProvider = this.getAttribute("data-provider");

      // Si se seleccionó YouTube, agregar los elementos de control de YouTube
      if (selectedProvider === "youtube") {
        addYouTubeControls();
      }
      // Si se seleccionó otra plataforma, eliminar los elementos de control de YouTube
      else {
        removeYouTubeControls();
      }
    });
  });
});

// function loadYouTubeIframeAPI() {
//   const script = document.createElement("script");
//   script.src = "https://www.youtube.com/iframe_api";
//   const firstScriptTag = document.getElementsByTagName("script")[0];
//   firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
// }

// loadYouTubeIframeAPI();