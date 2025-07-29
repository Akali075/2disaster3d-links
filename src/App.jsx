import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {/* Logo: reemplaza src por la ruta de tu logo real */}
      <div className="logo-box">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="48" r="48" fill="url(#paint0_linear)" />
          <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="bold" dy=".3em" fontFamily="Montserrat, Arial, sans-serif">2D</text>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7F3FFF" />
              <stop offset="1" stopColor="#00CFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="title">2Disaster3D</h1>
      <p className="description">Soluciones creativas en impresión 3D, diseño y prototipado. ¡Conecta con nosotros!</p>
      <div className="links">
        <a className="link-btn instagram" href="https://www.instagram.com/2disaster3d/" target="_blank">
          {/* Icono Instagram */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="7" fill="url(#ig)"/><defs><linearGradient id="ig" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#833ab4"/><stop offset="0.5" stopColor="#fd1d1d"/><stop offset="1" stopColor="#fcb045"/></linearGradient></defs><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke="#fff" strokeWidth="1.5"/><circle cx="17.2" cy="6.8" r="0.8" fill="#fff"/><rect x="3.5" y="3.5" width="17" height="17" rx="5.5" stroke="#fff" strokeWidth="1.5"/></svg>
          Instagram
        </a>
        <a className="link-btn tiktok" href="https://www.tiktok.com/@2disaster3d" target="_blank">
          {/* Icono TikTok */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="7" fill="#000"/><path d="M16.5 8.5c-1.1 0-2-.9-2-2V5h-2v8.5a1.5 1.5 0 1 1-1.5-1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 5c0 2.2 1.8 4 4 4" stroke="#00F2EA" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.5 13.5a3 3 0 1 1-3-3" stroke="#FF004F" strokeWidth="1.5" strokeLinecap="round"/></svg>
          TikTok
        </a>
        {/*<a className="link-btn youtube" href="#" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="7" fill="#FF0000"/><path d="M10 9.5v5l4-2.5-4-2.5z" fill="#fff"/><rect x="3.5" y="7" width="17" height="10" rx="5" stroke="#fff" strokeWidth="1.5"/></svg>
          YouTube
        </a>*/}
        <a className="link-btn x" href="https://x.com/2Disaster3D" target="_blank">
          {/* Icono X (Twitter) */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="7" fill="#000"/><path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          X
        </a>
        {/*<a className="link-btn portfolio" href="#" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="3" fill="#7F3FFF"/><path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7" stroke="#fff" strokeWidth="1.5"/><rect x="3" y="7" width="18" height="13" rx="3" stroke="#fff" strokeWidth="1.5"/></svg>
          Portafolio
        </a>
        <a className="link-btn email" href="mailto:tu@email.com">
          
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#ff5858"/><path d="M5 8.5l7 6 7-6" stroke="#fff" strokeWidth="1.5"/><rect x="4" y="7" width="16" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
          Email
        </a>*/}
      </div>
    </div>
  )
}

export default App
