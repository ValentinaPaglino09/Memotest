import React from 'react'
import style from './Home.module.css'

const Home = ({navigate}) => {

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 className={style.title}>Memotest!</h1>
      <button className={style.boton} onClick={(e) => {
        e.preventDefault()
        navigate('/juego')
      }}>Jugar</button>
    </div>
  )
}

export default Home