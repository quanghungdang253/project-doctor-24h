import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/font.css';

createRoot(document.getElementById('root')!).render(

         <StrictMode>
            <BrowserRouter>
               <App />
               </BrowserRouter>
          </StrictMode>
    
)
