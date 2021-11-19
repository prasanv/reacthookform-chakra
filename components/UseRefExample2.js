import React,{ useState, useEffect, useRef } from 'react'

export default function UseRefExample2() {

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(previousValue => previousValue+1);
    }, 1000);  
    return () => {
      clearInterval(intervalRef.current);
    }
  }, [])

  return (
    <div>
      <p>UseRef Hook Example 2</p>
      <p>Hook Timer - {timer}</p>
      <button onClick={ () => clearInterval(intervalRef.current) }>Clear Timer</button>
    </div>
  )
}
