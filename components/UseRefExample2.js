import { Button,Box } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

export default function UseRefExample2() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((previousValue) => previousValue + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  console.log({ timer });

  return (
    <Box sx={{
      border: "2px solid grey",
      padding: "20px",
      margin: "15px",
      borderRadius: "15px",
    }}>
      <p>UseRef Hook Example 2</p>
      <p>
        Hook Timer - {timer} {timer ? "running" : ""}
      </p>
      <Button
        onClick={() => {
          clearInterval(intervalRef.current);
          setTimer(0);
        }}
      >
        Clear Timer
      </Button>
    </Box>
  );
}
