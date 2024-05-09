import React, {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react"
import InputField from "../components/InputField"
import schema from '../components/SchemaObject'
import Home from '../components/Home';

export default function RHFexample3() {
  const defaultValues = {
    firstname: "",
    lastname: "",
    address: "",
    email: "prasan@gmail.com",
  }

  useEffect(() => {
    // console.log(schema.properties);
    document.querySelector('#firstname').focus();
  }, [])
  

  const { 
    formState: { errors }, 
    reset, 
    handleSubmit,
    control 
  } = useForm({
    mode: 'onTouched',
    defaultValues,
  });
  
  const onSubmitHandler = (data) => {
    console.log(data);
    reset(defaultValues);
  }
  
  return (
    <div className={styles.container}>
    <Home></Home>
      <form className={styles.controlledMain}>
        <Controller
          name="firstname"
          rules={
            { 
              required: schema.properties.first_name.description, 
              maxLength: schema.properties.first_name.maxLength, 
              minLength: schema.properties.first_name.minLength, 
              pattern: schema.properties.first_name.pattern
            }
          }
          control={control}
          render={({ field }) => <Input id='firstname' placeholder="First Name" {...field} />}
        />
        {errors.firstname && <span className={styles.errorMsg}>Invalid first Name</span>}
        <Controller
          name="lastname"
          rules={
            { 
              required: schema.properties.last_name.description, 
              pattern: schema.properties.last_name.pattern,
              maxLength: schema.properties.last_name.maxLength, 
              minLength: schema.properties.last_name.minLength
            }
          }
          control={control}
          render={({ field }) => <Input id='lastname' placeholder="Last Name" {...field} />}
        />
        {errors.lastname && <span className={styles.errorMsg}>Invalid Last Name</span>}
        <Controller
          name="address"
          control={control}
          rules={
            { 
              required: schema.properties.address.description, 
              maxLength: schema.properties.address.maxLength, 
              minLength: schema.properties.address.minLength,
              pattern: /^[a-zA-Z\d\s@-]{5,30}$/ 
            }
          }
          render={({ field }) => (
            <InputField 
              inputId='address' 
              inputName={field.name}
              inputPlaceholder="Address" 
              inputRef={field.ref}
              inputValue={field.value} 
              onChangeHandler={(value) => {
                field.onChange(value);
              }}
            />) }
        />
        {errors.address && <span className={styles.errorMsg}>Invalid Address</span>}
        <Controller
          name="email"
          control={control}
          rules={{ required: schema.required[0], pattern: /^[a-zA-Z0-9\.-_]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/ }}
          render={({ field }) => <Input id='email' placeholder="Email" {...field} />}
        />
        {errors.email && <span className={styles.errorMsg}>Invalid Email</span>}
        <Button 
          colorScheme="teal"
          type="button" 
          w="300px"
          m={2}
          name="submit" 
          onClick={handleSubmit(onSubmitHandler)}
        >SUBMIT
        </Button>        
      </form>
    </div>
  )
}