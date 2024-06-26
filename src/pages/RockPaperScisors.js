import React, { useState } from "react";

function RockPaperScisors() {
  const list = ["Rock", "Paper", "Scisors"];
  const [computerAssumption, setComputerAssumption] = useState("");
  const [userAssumption, setUserAssumption] = useState("");
  const [winner,setWinner] = useState("")
  const gameFunction = (user) => {
    const computerValue = Math.floor(Math.random()* 3);
    const comp = list[computerValue]
    setComputerAssumption(comp);
    // const userValue = Math.floor(Math.random(list)*3)
    setUserAssumption(user);
    if(user == comp){
        setWinner("tie")
    }else{
        if((comp=="Rock" && user=="Scisors") || (comp=="Scisors" && user=="Paper") || (comp=="Paper" && user=="Rock")){
            setWinner("Computer")
        }else{
            setWinner("User")
        }
    }
  };

  console.log(userAssumption);
  return (
    <div>
      <div className="h-[30vh] w-full flex items-center justify-center gap-5 text-white font-bold">
        <button
          onClick={() => gameFunction("Rock")}
          className="h-[8vh] w-[20%] bg-purple-400"
        >
          ROCK
        </button>
        <button
          onClick={() => gameFunction("Paper")}
          className="h-[8vh] w-[20%] bg-purple-400"
        >
          PAPER
        </button>
        <button
          onClick={() => gameFunction("Scisors")}
          className="h-[8vh] w-[20%] bg-purple-400"
        >
          SCISORS
        </button>
      </div>

      <div className="h-[40vh] w-[100%] flex flex-col items-center justify-center gap-6 text-[30px]">
        <label>Computer: {computerAssumption}</label>
        <label>User: {userAssumption} </label>
        <label>Winner: {winner} </label>
      </div>
    </div>
  );
}

export default RockPaperScisors;
