import React from 'react'
import style from './Card.module.css'

const Card = ({cardId, cardContent, selectCard, cardsSelected, pairsFound}) => {
 
    const cardIsSelected = cardsSelected &&cardsSelected.includes(cardId)
    const pairIsFound = pairsFound && pairsFound.includes(cardId)
  
  return (
    <div id={cardId} style={{backgroundColor: pairIsFound ? cardContent : cardIsSelected ?  cardContent : "grey"}} className={style.card} onClick={(e) => selectCard(e, cardId)}></div>
  )
}

export default Card