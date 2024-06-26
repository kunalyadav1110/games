import React, { useState } from 'react'

function TicTacToe() {
    const [Turn,setTurn] = useState(1)
    const [block1, setBlock1] = useState("")
    const [block2, setBlock2] = useState("")
    const [block3, setBlock3] = useState("")
    const [block4, setBlock4] = useState("")
    const [block5, setBlock5] = useState("")
    const [block6, setBlock6] = useState("")
    const [block7, setBlock7] = useState("")
    const [block8, setBlock8] = useState("")
    const [block9, setBlock9] = useState("")
    const blockFn1 = ()=>{
        if(Turn == 1 && block1 ==""){
            setBlock1("X")
            setTurn(2)
        }
        else if(block1 ==""){
            setBlock1("O")
            setTurn(1)
        }
    }
    const blockFn2 = ()=>{
        if(Turn == 1 && block2 ==""){
            setBlock2("X")
            setTurn(2)
        }
        else if(block2 ==""){
            setBlock2("O")
            setTurn(1)
        }
    }
    const blockFn3 = ()=>{
        if(Turn == 1 && block3 ==""){
            setBlock3("X")
            setTurn(2)
        }
        else if(block3 ==""){
            setBlock3("O")
            setTurn(1)
        }
    }
    const blockFn4 = ()=>{
        if(Turn == 1 && block4 ==""){
            setBlock4("X")
            setTurn(2)
        }
        else if(block4 ==""){
            setBlock4("O")
            setTurn(1)
        }
    }
    const blockFn5 = ()=>{
        if(Turn == 1 && block5 ==""){
            setBlock5("X")
            setTurn(2)
        }
        else if(block5 == ""){
            setBlock5("O")
            setTurn(1)
        }
    }
    const blockFn6 = ()=>{
        if(Turn == 1 && block6 ==""){
            setBlock6("X")
            setTurn(2)
        }
        else if(block6 ==""){
            setBlock6("O")
            setTurn(1)
        }
    }
    const blockFn7 = ()=>{
        if(Turn == 1 && block7 ==""){
            setBlock7("X")
            setTurn(2)
        }
        else if(block7 ==""){
            setBlock7("O")
            setTurn(1)
        }
    }
    const blockFn8 = ()=>{
        if(Turn == 1 && block8 ==""){
            setBlock8("X")
            setTurn(2)
        }
        else if(block8 ==""){
            setBlock8("O")
            setTurn(1)
        }
    }
    const blockFn9 = ()=>{
        if(Turn == 1 && block9 ==""){
            setBlock9("X")
            setTurn(2)
        }
        else if (block9==""){
            setBlock9("O")
            setTurn(1)
        }
    }
  return (
    <div>
      <div className='body' style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <div className='div-body' style={{height:"600px",width:"600px",border:"1px solid"}}>
        <div className='blocks' style={{display:"flex",flexWrap:"wrap",justifyContent:"center",height:"100%",width:"100%"}}>
            <div onClick={()=> blockFn1()}>{block1}</div>
            <div onClick={()=> blockFn2()}>{block2}</div>
            <div onClick={()=> blockFn3()}>{block3}</div>
            <div onClick={()=> blockFn4()}>{block4}</div>
            <div onClick={()=> blockFn5()}>{block5}</div>
            <div onClick={()=> blockFn6()}>{block6}</div>
            <div onClick={()=> blockFn7()}>{block7}</div>
            <div onClick={()=> blockFn8()}>{block8}</div>
            <div onClick={()=> blockFn9()}>{block9}</div>
        </div>
         </div>
      </div>
      {block1 == "X" & block2 == "X" & block3 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block1 == "O" & block2 == "O" & block3 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block4 == "X" & block5 == "X" & block6 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block4 == "O" & block5 == "O" & block6 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block7 == "X" & block8 == "X" & block9 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block7 == "O" & block8 == "O" & block9 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block1 == "X" & block4 == "X" & block7 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block1 == "O" & block4 == "O" & block7 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block2 == "X" & block5 == "X" & block8 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block2 == "O" & block5 == "O" & block8 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block3 == "X" & block6 == "X" & block9 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block3 == "O" & block6 == "O" & block9 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block1 == "X" & block5 == "X" & block9 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block1 == "O" & block5 == "O" & block9 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null}
      {block3 == "X" & block5 == "X" & block7 == "X" ? setTimeout(()=>{alert("Player 'X' won")}, 200) : block3 == "O" & block5 == "O" & block7 == "O" ? setTimeout(()=>{alert("Player 'O' won")}, 200) : null} 
    </div>
  )
}

export default TicTacToe
