import React, { useEffect, useState } from "react";

function Practice() {
  useEffect(() => {
    let interval = setInterval(() => {
      setReduceTime((prev)=> prev - 1);
    }, 1000);
    return ()=> clearInterval(interval)
  }, []);
  const [reduceTime, setReduceTime] = useState(20);
  

  return (
    <div>
      <div>{reduceTime<10 && "0"}{reduceTime}</div>
    </div>
  );
}

export default Practice;
