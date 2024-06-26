import React, { useState } from 'react'

function Bollywood() {
    const movies = ["De Dana Dan", 'Fukrey', 'Hera Pheri', 'Bhool Bhoolaiya', 'Chup Chup Ke', 'Welcome' , 'Dhamaal', 'Dhol','Housefull']
    const [picture,setPicture] = useState([])
    const startGame = ()=>{
        const randomMovie = Math.floor(Math.random()*9)
        const picture = movies[randomMovie].split("");
        setPicture(picture)
    }
    const [letter,setLetter] = useState([])
    const [lives,setLives] = useState(9)
 const [correct,setCorrect] = useState([])
 const [inCorrect, setInCorrect] = useState([])
 const checkLetter = ()=>{
    if(picture.includes(letter)){
        setCorrect([...correct, letter])
        setLetter("")
    }else{
        setInCorrect([...inCorrect, letter])
        setLives(lives-1);
        setLetter('')
    }
 }
  return (
    
    <div className='flex items-center justify-center h-[100vh] gap-8 flex-col'> 
      <button onClick={()=>startGame()}>START GAME</button>
      <div className='flex'>
        <input value={letter} onChange={(e)=>setLetter(e.target.value)} type='text' placeholder='Enter a Letter'></input>
        <button className='border bg-blue-200' onClick={()=>checkLetter()}>Add</button>
        <label>Lives : {lives}</label>
      </div>
      {/* {JSON.stringify(picture)} */}
      <div className='flex gap-4'>
      {picture.map((i)=>
      <div className='w-10 border-b border-black flex items-end justify-center'>{correct.includes(i) &&  i}</div>)}
      </div>
      {JSON.stringify(correct)}
      {JSON.stringify(inCorrect)}
    </div>
  )
}

export default Bollywood
