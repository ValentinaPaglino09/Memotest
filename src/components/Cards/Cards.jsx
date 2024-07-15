import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'


const Cards = ({cards, selectCard, cardsSelected, pairsFound}) => {

   
  return (
    <>
    
    <div className={style.cards}>
    {cards.map(card => (<Card key={card.id} cardId={card.id} cardContent={card.content} selectCard={selectCard} cardsSelected={cardsSelected} pairsFound={pairsFound}/>))}
    </div>
   
    </>
  )
}

export default Cards