console.log('EuroSave Service Worker Rodando!');

// Isso garante que o arquivo seja tratado como um módulo
export {} 

// No futuro, aqui faremos as chamadas de API para não travar a Amazon
chrome.runtime.onInstalled.addListener(() => {
  console.log('EuroSave instalado com sucesso.');
});