import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=> navigate('/practice')}>Practice</button>
      <button onClick={()=> navigate('/calci')}>Calculator</button>
      <button onClick={()=> navigate('/ttt')}>TicTacToe</button>
      <button onClick={()=> navigate('/snake')}>Snake & Ladder</button>
      <button onClick={()=> navigate('/increse')}>Increse & Decrese</button>
      <button onClick={()=> navigate('/dates')}>Dates</button>
      <button onClick={()=> navigate('/clock')}>Clock</button>
      <button onClick={()=> navigate('/movie-ticket')}>Movie</button>
      <button onClick={()=> navigate('/kbc')}>KBC</button>
      <button onClick={()=> navigate('/bollywood')}>Bollywood</button>
      <button onClick={()=> navigate('/firebase')}>Firebase</button>
      <button onClick={()=> navigate('/googlemap')}>GoogleMap</button>
      <button onClick={()=> navigate('/password')}>Password Generator</button>
      <button onClick={()=> navigate('/Student')}>Student</button>
      <button onClick={()=> navigate('/guessthenumber')}>Guess The Number</button>
      <button onClick={()=> navigate('/rockpaperscisors')}>RockPaperScisors</button>
      <button onClick={()=> navigate('/cards')}>Cards</button>
    </div>
  )
}

export default Home
