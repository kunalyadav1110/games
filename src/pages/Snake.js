import React, { useState } from "react";
function Snake() {
  const [Dice, setDice] = useState();
  const [Player1, setPlayer1] = useState(0);
  const [Player2, setPlayer2] = useState(0);
  const [Turn, setTurn] = useState(1);
  const RollDice = () => {
    const diceValue = Math.ceil(Math.random() * 6);
    setDice(diceValue);
    if (Turn == 1) {
      if (Player1 == 0) {
        if (diceValue == 6 || diceValue == 1) {
          setPlayer1(1);
        }
      } else {
        if (diceValue + Player1 < 31) {
          setPlayer1(diceValue + Player1);
        }
      }
      setTurn(2);
    } else if (Turn == 2) {
      if (Player2 == 0) {
        if (diceValue == 1 || diceValue == 6) {
          setPlayer2(1);
        }
      }
      else {
        if (diceValue + Player2 < 31) {
          setPlayer2(diceValue + Player2);
        }
      }
      setTurn(1);
    }
  };
  return (
    <div>
      <div
        className="body"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ height: "620px", width: "700px" }} className="tic">
          <div
            className="board-bg"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div
              className={
                (Player1 == 25) & (Player2 == 25)
                  ? "btn3"
                  : Player1 == 25
                  ? "btn1"
                  : Player2 == 25
                  ? "btn2"
                  : "btn4"
              }
            >
              25
            </div>
            <div
              className={
                (Player1 == 26) & (Player2 == 26)
                  ? "btn3"
                  : Player1 == 26
                  ? "btn1"
                  : Player2 == 26
                  ? "btn2"
                  : "btn4"
              }
            >
              26
            </div>
            <div
              className={
                (Player1 == 27) & (Player2 == 27)
                  ? "btn3"
                  : Player1 == 27
                  ? "btn1"
                  : Player2 == 27
                  ? "btn2"
                  : "btn4"
              }
            >
              27
            </div>
            <div
              className={
                (Player1 == 28) & (Player2 == 28)
                  ? "btn3"
                  : Player1 == 28
                  ? "btn1"
                  : Player2 == 28
                  ? "btn2"
                  : "btn4"
              }
            >
              28
            </div>
            <div
              className={
                (Player1 == 29) & (Player2 == 29)
                  ? "btn3"
                  : Player1 == 29
                  ? "btn1"
                  : Player2 == 29
                  ? "btn2"
                  : "btn4"
              }
            >
              29
            </div>
            <div
              className={
                (Player1 == 30) & (Player2 == 30)
                  ? "btn3"
                  : Player1 == 30
                  ? "btn1"
                  : Player2 == 30
                  ? "btn2"
                  : "btn4"
              }
            >
              30
            </div>
            <div
              className={
                (Player1 == 24) & (Player2 == 24)
                  ? "btn3"
                  : Player1 == 24
                  ? "btn1"
                  : Player2 == 24
                  ? "btn2"
                  : "btn4"
              }
            >
              24
            </div>
            <div
              className={
                (Player1 == 23) & (Player2 == 23)
                  ? "btn3"
                  : Player1 == 23
                  ? "btn1"
                  : Player2 == 23
                  ? "btn2"
                  : "btn4"
              }
            >
              23
            </div>
            <div
              className={
                (Player1 == 22) & (Player2 == 22)
                  ? "btn3"
                  : Player1 == 22
                  ? "btn1"
                  : Player2 == 22
                  ? "btn2"
                  : "btn4"
              }
            >
              22
            </div>
            <div
              className={
                (Player1 == 21) & (Player2 == 21)
                  ? "btn3"
                  : Player1 == 21
                  ? "btn1"
                  : Player2 == 21
                  ? "btn2"
                  : "btn4"
              }
            >
              21
            </div>
            <div
              className={
                (Player1 == 20) & (Player2 == 20)
                  ? "btn3"
                  : Player1 == 20
                  ? "btn1"
                  : Player2 == 20
                  ? "btn2"
                  : "btn4"
              }
            >
              20
            </div>
            <div
              className={
                (Player1 == 19) & (Player2 == 19)
                  ? "btn3"
                  : Player1 == 19
                  ? "btn1"
                  : Player2 == 19
                  ? "btn2"
                  : "btn4"
              }
            >
              19
            </div>
            <div
              className={
                (Player1 == 13) & (Player2 == 13)
                  ? "btn3"
                  : Player1 == 13
                  ? "btn1"
                  : Player2 == 13
                  ? "btn2"
                  : "btn4"
              }
            >
              13
            </div>
            <div
              className={
                (Player1 == 14) & (Player2 == 14)
                  ? "btn3"
                  : Player1 == 14
                  ? "btn1"
                  : Player2 == 14
                  ? "btn2"
                  : "btn4"
              }
            >
              14
            </div>
            <div
              className={
                (Player1 == 15) & (Player2 == 15)
                  ? "btn3"
                  : Player1 == 15
                  ? "btn1"
                  : Player2 == 15
                  ? "btn2"
                  : "btn4"
              }
            >
              15
            </div>
            <div
              className={
                (Player1 == 16) & (Player2 == 16)
                  ? "btn3"
                  : Player1 == 16
                  ? "btn1"
                  : Player2 == 16
                  ? "btn2"
                  : "btn4"
              }
            >
              16
            </div>
            <div
              className={
                (Player1 == 17) & (Player2 == 17)
                  ? "btn3"
                  : Player1 == 17
                  ? "btn1"
                  : Player2 == 17
                  ? "btn2"
                  : "btn4"
              }
            >
              17
            </div>
            <div
              className={
                (Player1 == 18) & (Player2 == 18)
                  ? "btn3"
                  : Player1 == 18
                  ? "btn1"
                  : Player2 == 18
                  ? "btn2"
                  : "btn4"
              }
            >
              18
            </div>
            <div
              className={
                (Player1 == 12) & (Player2 == 12)
                  ? "btn3"
                  : Player1 == 12
                  ? "btn1"
                  : Player2 == 12
                  ? "btn2"
                  : "btn4"
              }
            >
              12
            </div>
            <div
              className={
                (Player1 == 11) & (Player2 == 11)
                  ? "btn3"
                  : Player1 == 11
                  ? "btn1"
                  : Player2 == 11
                  ? "btn2"
                  : "btn4"
              }
            >
              11
            </div>
            <div
              className={
                (Player1 == 10) & (Player2 == 10)
                  ? "btn3"
                  : Player1 == 10
                  ? "btn1"
                  : Player2 == 10
                  ? "btn2"
                  : "btn4"
              }
            >
              10
            </div>
            <div
              className={
                (Player1 == 9) & (Player2 == 9)
                  ? "btn3"
                  : Player1 == 9
                  ? "btn1"
                  : Player2 == 9
                  ? "btn2"
                  : "btn4"
              }
            >
              9
            </div>
            <div
              className={
                (Player1 == 8) & (Player2 == 8)
                  ? "btn3"
                  : Player1 == 8
                  ? "btn1"
                  : Player2 == 8
                  ? "btn2"
                  : "btn4"
              }
            >
              8
            </div>
            <div
              className={
                (Player1 == 7) & (Player2 == 7)
                  ? "btn3"
                  : Player1 == 7
                  ? "btn1"
                  : Player2 == 7
                  ? "btn2"
                  : "btn4"
              }
            >
              7
            </div>
            <div
              className={
                (Player1 == 1) & (Player2 == 1)
                  ? "btn3"
                  : Player1 == 1
                  ? "btn1"
                  : Player2 == 1
                  ? "btn2"
                  : "btn4"
              }
            >
              1
            </div>
            <div
              className={
                (Player1 == 2) & (Player2 == 2)
                  ? "btn3"
                  : Player1 == 2
                  ? "btn1"
                  : Player2 == 2
                  ? "btn2"
                  : "btn4"
              }
            >
              2
            </div>
            <div
              className={
                (Player1 == 3) & (Player2 == 3)
                  ? "btn3"
                  : Player1 == 3
                  ? "btn1"
                  : Player2 == 3
                  ? "btn2"
                  : "btn4"
              }
            >
              3
            </div>
            <div
              className={
                (Player1 == 4) & (Player2 == 4)
                  ? "btn3"
                  : Player1 == 4
                  ? "btn1"
                  : Player2 == 4
                  ? "btn2"
                  : "btn4"
              }
            >
              4
            </div>
            <div
              className={
                (Player1 == 5) & (Player2 == 5)
                  ? "btn3"
                  : Player1 == 5
                  ? "btn1"
                  : Player2 == 5
                  ? "btn2"
                  : "btn4"
              }
            >
              5
            </div>
            <div
              className={
                (Player1 == 6) & (Player2 == 6)
                  ? "btn3"
                  : Player1 == 6
                  ? "btn1"
                  : Player2 == 6
                  ? "btn2"
                  : "btn4"
              }
            >
              6
            </div>
          </div>
        </div>
        {Player1}
        <button
          onClick={() => {
            RollDice();
          }}
          style={{ width: 60, height: 60 }}
        >
          {Dice}
        </button>
        {Player2}
      </div>
      {Player1 == 3
        ? setTimeout(() => {
            setPlayer1(16);
          }, 200)
        : Player2 == 3
        ? setTimeout(() => {
            setPlayer2(16);
          }, 200)
        : null}
        {Player1 == 5 ? setTimeout(()=>{setPlayer1(8)}, 200) : Player2 == 5 ? setTimeout(()=>{setPlayer2(8)}, 200) : null}
        {Player1 == 11 ? setTimeout(()=>{setPlayer1(26)}, 200) : Player2 == 11 ? setTimeout(()=>{setPlayer2(26)}, 200) : null}
        {Player1 == 20 ? setTimeout(()=>{setPlayer1(29)}, 200) : Player2 == 20 ? setTimeout(()=>{setPlayer2(29)}, 200) : null}
        {Player1 == 17 ? setTimeout(()=>{setPlayer1(4)}, 200) : Player2 == 17 ? setTimeout(()=>{setPlayer2(4)}, 200) : null}
        {Player1 == 21 ? setTimeout(()=>{setPlayer1(9)}, 200) : Player2 == 21 ? setTimeout(()=>{setPlayer2(9)}, 200) : null}
        {Player1 == 19 ? setTimeout(()=>{setPlayer1(7)}, 200) : Player2 == 19 ? setTimeout(()=>{setPlayer2(7)}, 200) : null}
        {Player1 == 27 ? setTimeout(()=>{setPlayer1(1)}, 200) : Player2 == 27 ? setTimeout(()=>{setPlayer2(1)}, 200) : null}
        {Player1 == 25 ? setTimeout(()=>{setPlayer1(13)}, 200) : Player2 == 25 ? setTimeout(()=>{setPlayer2(13)}, 200) : null}
      {Player1 == 30
        ? setTimeout(() => {
            alert("Player 1 won");
          }, 200)
        : null}
      {Player2 == 30
        ? setTimeout(() => {
            alert("Player 2 won");
          }, 200)
        : null}
    </div>
  );
}

export default Snake;
