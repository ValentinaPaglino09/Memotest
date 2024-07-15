import React from 'react'
import style from './Win.module.css'

const Win = ({navigate}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 className={style.title}>Ganaste!</h1>
      <button className={style.boton} onClick={(e) => {
        e.preventDefault()
        navigate('/juego')
      }}>Volver a jugar</button>
    </div>
  )
}

export default Win