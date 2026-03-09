import React from 'react'
import ReactDOM from 'react-dom/client'
import './content.css' // Crie este arquivo vazio ou com Tailwind básico

// Função para injetar o EuroSave na página da Amazon
const injectEuroSave = () => {
  const rootElement = document.createElement('div')
  rootElement.id = 'eurosave-root'
  
  // Tenta injetar perto do preço original da Amazon
  const target = document.querySelector('#corePrice_feature_div') || document.body
  target.prepend(rootElement)

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div className="p-4 my-2 border-2 border-euro-primary bg-white rounded-xl shadow-lg font-sans">
        <h3 className="text-euro-secondary font-bold">EuroSave 🇪🇺</h3>
        <p className="text-sm text-gray-600">Verificando preços em tempo real...</p>
      </div>
    </React.StrictMode>
  )
}

// Executa a injeção
injectEuroSave()