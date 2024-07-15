const compareCards = (cardsSelected, setPoints, points, setCardsSelected, pairsFound, setPairsFound) => {
    
    const id1 = cardsSelected[0]
    const id2 = cardsSelected[1]

    const id1Start = id1[0]
    const id2Start = id2[0]


    if (id1Start === id2Start) {
        setPoints(++points)
        setPairsFound([...pairsFound, id1, id2])
    }
   setTimeout(() => {setCardsSelected([])}, "1200")
    //setCardsSelected([])  
}

export default compareCards