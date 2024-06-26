import React, { useState } from 'react'

function GuessTheNumber() {
    const [number,setNumber] = useState("")
    const[guessNum,setGuessNum] = useState("")
    const [attempt,setAttempt] = useState(5)
    const guessTheNumber= ()=>{
        const randomNum = Math.floor(Math.random()*100)
        setNumber(randomNum)
    }
    const checkNum = ()=>{
        if(guessNum == number){
            alert("You Won!")
        }else if(guessNum < number){
            alert("Number is less than accual number")
            setAttempt(attempt-1)
        }else{
            alert("Number is Greater than accual number")
            setAttempt(attempt-1)
        }
    }
  return (
    <div>
      <div className='flex items-center justify-center flex-col h-[100vh] gap-4'>
      <div className=''>
        <button onClick={()=>guessTheNumber()} className='w-[200px] h-[5vh] bg-purple-500 text-white'>Start Game</button>
      </div>
      {/* {JSON.stringify(number)} */}
      
            <input onChange={(e)=>setGuessNum(e.target.value)} className='w-[20%] border-black border' placeholder='Enter the number'></input>
            <label>Attempts : {attempt}</label>
            <button onClick={()=>checkNum()} className='w-[200px] h-[5vh] bg-purple-500 text-white'>Submit</button>
      </div>
    </div>
  )
}

export default GuessTheNumber
