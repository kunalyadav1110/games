import React from 'react'

function Cards() {
    const diamonds = new Array(13).fill().map((i,index)=> "D"+(index+1))
    const spades = new Array(13).fill().map((i,index)=> "S"+(index+1))
    const clubs = new Array(13).fill().map((i,index)=> "C"+(index+1))
    const hearts = new Array(13).fill().map((i,index)=> "H"+(index+1))
    const card = [...diamonds,...spades,...clubs,...hearts]

    const shuffle = ()=>{
        card.sort(()=> Math.random() - 0.5)
    }
    shuffle()
    const player1 = card.slice(0,13)
    const player2 = card.slice(13,26)
    const player3 = card.slice(26, 39)
    const player4 = card.slice(39)
    
  return (
    <div className=''>
      
     
      {JSON.stringify(player1)}<br></br>
      {JSON.stringify(player2)}<br></br>
      {JSON.stringify(player3)}<br></br>
      {JSON.stringify(player4)}
    </div>
  )
}

export default Cards
