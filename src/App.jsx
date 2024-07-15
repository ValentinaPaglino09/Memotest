import { useEffect, useState } from 'react'
import Cards from './components/Cards/Cards'
import compareCards from './utils/compareCards'
import { cards } from './assets/cards'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Win from './components/Win/Win'



function App() {
  
  const [points, setPoints] = useState(0)
  const [cardsSelected, setCardsSelected] = useState([])
  const [cardsRandom, setCardsRandom] = useState([])
  const [pairsFound, setPairsFound] = useState([])
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    const cardsRandomized = cards.sort(() => Math.random() - 0.5)
    setCardsRandom(cardsRandomized)
  }, [])


  const selectCard = (e, cardId) => {
    e.preventDefault()
    const cardAlreadySelected = cardsSelected.includes(cardId)
    if (cardsSelected.length < 2 && !cardAlreadySelected) setCardsSelected([...cardsSelected, cardId])
     
  }

  useEffect(() => {
    if (cardsSelected.length === 2) compareCards(cardsSelected, setPoints, points, setCardsSelected, pairsFound, setPairsFound)
      if (points === cards.length / 2) {
        
        setPoints(0)
        setPairsFound([])
        navigate('/win')
      }
  }, [cardsSelected])
 
  
  console.log(cardsSelected);

  return (
    <>
    {location.pathname === '/juego' && <Header />}
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
     
       <Routes>
        <Route  path='/' element={<Home navigate={navigate}/>}/>
      <Route path="juego" element={<Cards cards={cardsRandom} selectCard={selectCard} cardsSelected={cardsSelected} pairsFound={pairsFound} navigate={navigate}/>} />
      <Route path='win' element={<Win navigate={navigate}/>}/>
    </Routes>
     
      </div>
      
      </>
  )
}

export default App
