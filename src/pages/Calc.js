import React, { useState } from 'react'

function Calc() {
    const [value, setValue] = useState("")
  return (
    <div style={{height: "100vh", backgroundColor:'orange', display:' flex', justifyContent: "center", alignItems: "center"}} className='calci'>
      <div style={{height: "60vh", width:'25%', backgroundColor: "white", boxSizing: "border-box"}} className='calci-body'>
      <div style={{width: "100%", boxSizing: "border-box", height:'10vh', border:'1px solid grey'}}>{value}</div>
      <div className='btns-div' style={{display:'flex', flexWrap:"wrap", gap:"5px", justifyContent:'center'}}>
        <div onClick={()=> setValue("")}>AC</div>
        <div onClick={()=>setValue(value + "%")}>%</div>
        <div onClick={()=> setValue(value.slice(0, value.length-1))}>BK</div>
        <div onClick={()=> setValue(value + "/")}>/</div>
        <div onClick={()=> setValue(value +"7")}>7</div>
        <div onClick={()=> setValue(value +"8")}>8</div>
        <div onClick={()=> setValue(value +"9")}>9</div>
        <div onClick={()=> setValue(value +"*")}>*</div>
        <div onClick={()=> setValue(value +"4")}>4</div>
        <div onClick={()=> setValue(value +"5")}>5</div>
        <div onClick={()=> setValue(value +"6")}>6</div>
        <div onClick={()=> setValue(value +"-")}>-</div>
        <div onClick={()=> setValue(value + "1")}>1</div>
        <div onClick={()=> setValue(value + "2")}>2</div>
        <div onClick={()=> setValue(value +"3")}>3</div>
        <div onClick={()=> setValue(value + "+")} >+</div>
        <div onClick={()=> setValue(value +"00")}>00</div>
        <div onClick={()=> setValue(value +"0")}>0</div>
        <div onClick={()=> setValue(value +".")}>.</div>
        <div onClick={()=> setValue(eval(value))} >=</div>
      </div>

      </div>
      
    </div>
  )
}

export default Calc
