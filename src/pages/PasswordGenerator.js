import React, { useState } from 'react'

function PasswordGenerator() {
    const size = new Array(9).fill().map((i,index)=>index+8)
    let password = ""
    const [result ,setResult] = useState("")
    const generatePass = (x)=>{  
        const Capital = ['A','B','C','D','E']
        const Small = ['a','b','c','d','e']
        const Number = [1,2,3,4,5]
        const Symbol = ['@','#','$','%','&']
        const choose = [Capital,Small,Number,Symbol]
        for(let i=0;i<x;i++){
         const randomNum = Math.floor(Math.random()*5)
         const chooseNum = Math.floor(Math.random()*4)
         password = password+choose[chooseNum][randomNum]
        }
        setResult(password)
    }
    return (
    <div className='h-[100vh] w-[100%] flex justify-center flex-col items-center'>
     {/* <div>{JSON.stringify(size)}</div> */}
     {size.map((i)=>
    <button onClick={()=>generatePass(i)} className='border border-black w-[10%]'>{i}</button>)}
    <label> password : {result}</label>
    </div>
  )
}

export default PasswordGenerator
