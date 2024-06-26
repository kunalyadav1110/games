import React, { useState } from 'react'

function IncreseDecrese() {
  const [valueI,setValueI] = useState(0);
  // const [valueD,setValueD] = useState(0);
  const increse = ()=>{
    if (valueI<10){
      setValueI(valueI + 1)
    }
    
  }
  const decrese = ()=>{
    if(valueI>0){
    setValueI(valueI - 1)
    }
  }
  return (
    <div className='body'>
      <div className='increse'>
        <div  className='increse-left'>
          {valueI}
        </div>
        <div className='count'>
      <div onClick={()=>{increse()}} className='positive'>
        <h1>+</h1>
      </div>
      <div onClick={()=>{decrese()}} className='negative'>
        <h1>-</h1>
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default IncreseDecrese
