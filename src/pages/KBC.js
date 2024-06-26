import axios from "axios";
import React, { useEffect, useState } from "react";
import TicTic from "../assests/_Kbc_Clock_Ringtone_(by Fringster.com).mp3";

function KBC() {
  const [timer, setTimer] = useState(30);
  

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
    
  }, [timer]);
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");
  const [showData, setShowData] = useState([]);
  const [check1, setCheck1] = useState(0);
  const [check2, setCheck2] = useState(0);
  const [check3, setCheck3] = useState(0);
  const [check4, setCheck4] = useState(0);

  const [showQue, setShowQue] = useState(0);
  useEffect(() => getData(), []);

  const postQuetion = () => {
    const quesObj = {
      Questions: question,
      OptionA: optionA,
      OptionB: optionB,
      OptionC: optionC,
      OptionD: optionD,
      Answer: answer,
    };
    axios
      .post("http://localhost:5002/api/kbc", quesObj)
      .then((res) => alert("successful"));
  };
  const getData = () => {
    axios
      .get("http://localhost:5002/api/kbc")
      .then((res) => setShowData(res.data.data));
  };

  const priceList = new Array(5).fill(1)

  for (let i in priceList){
    if(i>0){
      priceList[i] = priceList[i-1]*2
    }

  }

  return (
    <div className="flex items-center justify-center w-[100%] h-[100vh]">
      {JSON.stringify(priceList)}
      <div className="flex flex-col-reverse gap-4 bg-blue-500">
      {priceList.map((i, index)=>
         <div style={{backgroundColor: showQue == index ? "blue" : showQue>index ? "yellow" : null}} className=" border w-[150px] rounded-lg flex justify-center items-center">{i}</div>)}
      </div>
      
      {showData.map((i, index) => {
        if (index === showQue) {
          return (
            <div className="w-[80%] h-[50vh] flex flex-col items-center justify-center   gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-500 flex justify-center items-center">{`00 : ${timer}`}</div>
              <div className="w-[69%] h-[10vh] flex items-center justify-center bg-blue-950 text-white rounded-2xl">
                <p>{i?.Questions}</p>
              </div>
              <div className="w-[69%] flex flex-wrap  gap-2">
                <div
                  style={{
                    backgroundColor:
                      check1 == 1 ? "green" : check1 == 2 ? "red" : null,
                  }}
                  onClick={() => {
                    if (i.OptionA === i.Answer) {
                      setCheck1(1);
                      setTimeout(() => {
                        setShowQue(showQue + 1);
                        setCheck1(0);
                      }, 2000);
                    } else {
                      setCheck1(2);
                    }
                  }}
                  className="w-[49%] h-[7vh] bg-blue-950 flex items-center px-4 text-white border rounded-xl"
                >
                  A {i?.OptionA}
                </div>
                <div
                  style={{
                    backgroundColor:
                      check2 == 1 ? "green" : check2 == 2 ? "red" : null,
                  }}
                  onClick={() => {
                    if (i.OptionB === i.Answer) {
                      setCheck2(1);
                      setTimeout(() => {
                        setShowQue(showQue + 1);
                        setCheck2(0);
                      }, 2000);
                    } else {
                      setCheck2(2);
                    }
                  }}
                  className="w-[49%] h-[7vh] bg-blue-950 flex items-center px-4 text-white border rounded-xl"
                >
                  B {i?.OptionB}
                </div>
                <div
                  style={{
                    backgroundColor:
                      check3 == 1 ? "green" : check3 == 2 ? "red" : null,
                  }}
                  onClick={() => {
                    if (i.OptionC === i.Answer) {
                      setCheck3(1);
                      setTimeout(() => {
                        setShowQue(showQue + 1);
                        setCheck3(0);
                      }, 2000);
                    } else {
                      setCheck3(2);
                    }
                  }}
                  className="w-[49%] h-[7vh] bg-blue-950 flex items-center px-4 text-white border rounded-xl"
                >
                  C {i?.OptionC}
                </div>
                <div
                  style={{
                    backgroundColor:
                      check4 == 1 ? "green" : check4 == 2 ? "red" : null,
                  }}
                  onClick={() => {
                    if (i.OptionD === i.Answer) {
                      setCheck4(1);
                      setTimeout(() => {
                        setShowQue(showQue + 1);
                        setCheck4(0);
                      }, 2000);
                    } else {
                      setCheck4(2);
                    }
                  }}
                  className="w-[49%] h-[7vh] bg-blue-950 flex items-center px-4 text-white border rounded-xl"
                >
                  D {i?.OptionD}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default KBC;
