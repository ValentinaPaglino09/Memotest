import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    
    
  return (
    <nav className={style.nav}>
        
        <Link to="/"><a>Volver al inicio</a></Link>
    </nav>
  )
}

export default Header