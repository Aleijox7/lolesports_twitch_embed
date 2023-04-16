document.getElementById('update-channel-button').onclick = () => {
    const channelInput = document.getElementById('channel-input');
    const channelName = channelInput.value;
    if (channelName) {
      chrome.storage.sync.set({ twitchChannel: channelName }, () => {
        console.log(`Canal guardado: ${channelName}`);
        window.close();
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('#update-channel-button');
    const channelInput = document.querySelector('#channel-input');
  
    // Cargar el valor del canal almacenado en localStorage y establecerlo en el input
    chrome.storage.local.get('channel', (data) => {
      if (data.channel) {
        channelInput.value = data.channel;
      }
    });
  
    saveButton.addEventListener('click', () => {
      const channelName = channelInput.value;
      if (channelName) {
        // Guardar el canal en el almacenamiento local de Chrome
        chrome.storage.local.set({ channel: channelName }, () => {
          // Enviar un mensaje a content.js para actualizar el canal
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'updateChannel', channelName: channelName });
          });
        });
      }
    });
  });
  