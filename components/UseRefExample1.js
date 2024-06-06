import React, { useRef, useEffect } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function UseRefExample1() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);

  const onsubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    console.log("firstnameRef = ", firstnameRef);
    console.log("firstnameRef.current = ", firstnameRef.current);
    console.log("firstnameRef.current.name = ", firstnameRef.current.name);
    console.log("firstnameRef.current.type = ", firstnameRef.current.type);
    console.log("firstnameRef.current.value = ", firstnameRef.current.value);
    // const firstNameValue = firstnameRef.current.value;
  };

  useEffect(() => {
    firstnameRef.current.focus();
    // document.querySelector('#lastname').focus()
  }, []);

  return (
    <Box
      sx={{
        border: "2px solid grey",
        padding: "20px",
        margin: "15px",
        borderRadius: "15px",
      }}
    >
      <p>UseRef-Hook-Example 1</p>
      <form className={styles.form}>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          ref={firstnameRef}
        ></Input>
        <Input
          type="text"
          name="lastname"
          id="lastname"
          ref={lastnameRef}
        ></Input>
        <Button type="submit" onClick={onsubmitHandler}>
          submit
        </Button>
      </form>
    </Box>
  );
}
