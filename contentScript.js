const iconBase64 = 'data:image/png;base64,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';

function setTwitchEmbedSize(twitchEmbed, chatEmbed) {
    const sidebarElement = document.querySelector('.overview-pane');
    const containerWidth = sidebarElement.clientWidth;
    const embedHeight = (9 / 16) * containerWidth;
    
    twitchEmbed.width = '100%';
    twitchEmbed.height = embedHeight;
    twitchEmbed.style.height = `${embedHeight}px`;

    chatEmbed.height = `calc(100vh - 80px - ${embedHeight}px)`;
    chatEmbed.style.height = `calc(100vh - 80px - ${embedHeight}px)`;
  }
  
  function createToggleButton() {
    // Localizamos el elemento donde queremos insertar el botón
    const targetElement = document.querySelector('#riotbar-right-content');
    if (!targetElement) return;
  
    const toggleChatContainer = document.createElement('div');
    toggleChatContainer.className = 'toggle-chat-container';
  
    const toggleChatButton = document.createElement('div');
    toggleChatButton.className = 'toggle-chat-button';
  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'container';
  
    const icon = document.createElement('img');
    icon.src = iconBase64;
    icon.alt = '';
    icon.style.marginRight = '5px';
    buttonContainer.appendChild(icon);
  
    const text = document.createTextNode('');
    buttonContainer.appendChild(text);
  
    toggleChatButton.onclick = () => {
      const chatEmbed = document.querySelector('.twitch-chat');
      if (chatEmbed.classList && !chatEmbed.classList.contains('show-chat')) {
        chatEmbed.classList.add('show-chat');
        localStorage.setItem('chatState', 'show');
        text.textContent = 'Ocultar Chat';
      } else {
        chatEmbed.classList.remove('show-chat');
        localStorage.setItem('chatState', 'hide');
        text.textContent = 'Mostrar Chat';
      }
    };
  
    toggleChatButton.appendChild(buttonContainer);
  
    toggleChatContainer.appendChild(toggleChatButton);
  
    // Insertamos el botón en el elemento seleccionado
    targetElement.appendChild(toggleChatContainer);
  
    // Restauramos el estado del chat al recargar la página
    const chatState = localStorage.getItem('chatState');
    if (chatState === 'show') {
      const chatEmbed = document.querySelector('.twitch-chat');
      chatEmbed.classList.add('show-chat');
      text.textContent = 'Ocultar Chat';
    } else {
      const chatEmbed = document.querySelector('.twitch-chat');
      chatEmbed.classList.remove('show-chat');
      text.textContent = 'Mostrar Chat';
    }
  }
  

  function createTwitchEmbed(channelName) {
    const overviewPane = document.querySelector('body');
    if (!overviewPane) return;
  
    // Crear un contenedor para el stream y el chat
    const streamChatContainer = document.createElement('div');
    streamChatContainer.className = 'stream-chat-container';
    overviewPane.appendChild(streamChatContainer);
  
    const twitchEmbed = document.createElement('iframe');
    twitchEmbed.src = `https://player.twitch.tv/?channel=${channelName}&parent=lolesports.com`;
    twitchEmbed.className = 'twitch-stream show-stream';
    twitchEmbed.allowFullscreen = true;
    setTwitchEmbedSize(twitchEmbed, streamChatContainer);
    streamChatContainer.appendChild(twitchEmbed);
  
    const chatEmbed = document.createElement('iframe');
    chatEmbed.src = `https://www.twitch.tv/embed/${channelName}/chat?parent=lolesports.com&darkpopout`;
    chatEmbed.className = 'twitch-chat';
    streamChatContainer.appendChild(chatEmbed);
  
    // Ajusta el tamaño del embed de Twitch cuando la ventana se redimensiona
    window.addEventListener('resize', () => setTwitchEmbedSize(twitchEmbed, chatEmbed));
  }

  function updateChannel(channelName) {
    const twitchEmbed = document.querySelector('.twitch-stream');
    const chatEmbed = document.querySelector('.twitch-chat');
  
    twitchEmbed.src = `https://player.twitch.tv/?channel=${channelName}&parent=lolesports.com`;
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
  
  async function main() {
    await waitForOverviewPane();
  
    let channelName = getChannelFromUrl();
    if (channelName) {
      saveChannelToLocalStorage(channelName);
    }
  
    getChannelFromLocalStorage((savedChannel) => {
      if (!savedChannel) {
        savedChannel = 'knekro'; // Canal por defecto
      }
      createTwitchEmbed(savedChannel);
      createToggleButton();
    });
  
    // Escuchar mensajes desde popup.js
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'updateChannel') {
        updateChannel(request.channelName);
      }
    });
  }
  
  
  window.addEventListener('load', main);