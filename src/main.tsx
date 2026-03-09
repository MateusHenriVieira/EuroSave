import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Certifique-se que este arquivo tem as 3 linhas do @tailwind
import Popup from './popup/Popup'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
)