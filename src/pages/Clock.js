import React from 'react'

function Clock() {
    const currDate = new Date()
    const hour = currDate.getHours()
    const minute = currDate.getMinutes()
    const second = currDate.getSeconds()
  return (
    <div>
        <div className='w-[300px] h-[300px] border relative border-black rounded-full flex items-center justify-center '>
            <div style={{transform: `rotate(${30*hour}deg)`, transformOrigin:'bottom'}} className='h-[100px] w-2 bg-red-500 bottom-[150px] absolute'></div>
            <div style={{transform: `rotate(${6*minute}deg)`, transformOrigin:'bottom'}} className='h-[120px] w-1 bg-orange-500 bottom-[150px] absolute'></div>
            <div style={{transform: `rotate(${1*second}deg)`, transformOrigin:'bottom'}} className='h-[140px] w-1 bg-green-500 bottom-[150px] absolute'></div>

            <div  className='h-2 w-2 bg-black absolute '></div>  
            <div className='h-[30px] w-[30px]  absolute top-0 text-center '>12</div>
            <div className='h-[30px] w-[30px]  absolute border  text-center  top-0'>1</div>

            <div className='h-[30px] w-[30px]  absolute bottom-0 text-center'>6</div>
            <div className='h-[30px] w-[30px]  absolute right-0 text-center'>3</div>
            <div className='h-[30px] w-[30px]  absolute left-0 text-center'>9</div>

        </div>
    </div>
  )
}

export default Clock
