import React from 'react'
import { Input } from "@chakra-ui/react"

const InputField = ({inputName, inputId, inputRef, inputPlaceholder, inputValue, onChangeHandler}) => {

  return (
      <Input 
        name={inputName} 
        id={inputId} 
        placeholder={inputPlaceholder}
        ref={inputRef} 
        value={inputValue}
        onChange={onChangeHandler}
      ></Input>
  )
}

export default InputField
