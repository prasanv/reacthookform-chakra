import React from 'react'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";

export default function RHFexample1() {
  const defaultValues = {
    firstname: "",
    lastname: "",
    age: null,
    email: "",
    password: "",
    confirmPassword: "",
  }
  
  const { 
    register, 
    formState: { errors }, 
    reset, 
    handleSubmit 
  } = useForm({
    mode: 'onTouched',
    defaultValues,
  });
  
  const onSubmitHandler = (data, e) => {
    console.log(data);
    console.log(e);
    reset(defaultValues);
  }
  
  return (
    <div className={styles.container}>
      <form className={styles.main}>
        <input 
          id='firstname'
          {...register('firstname', { required: true, pattern: /^[a-zA-Z]{5,20}$/ })} 
          placeholder="First Name" 
        ></input>
        {errors.firstname && <span className={styles.errorMsg}>Invalid first Name</span>}
        <input 
          id="lastname"
          {...register('lastname', { required: true, pattern: /^[a-zA-Z]{5,20}$/ })} 
          placeholder="Last Name"
        ></input>
        {errors.lastname && <span className={styles.errorMsg}>Invalid Last Name</span>}
        <input 
          id="age"
          {...register('age', {min:18, max: 120})} 
          type="number" 
          placeholder="Age"
        ></input>
        {errors.age && <span className={styles.errorMsg}>Age must be within 18 - 99</span>}
        <input 
          {...register('email', { pattern: /^[a-zA-Z0-9\.-_]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/})} 
          placeholder="Email Address"
        ></input>
        {errors.email && <span className={styles.errorMsg}>Invalid Email Address</span>}
        <input 
          {...register('password')} 
          type="password" 
          placeholder="Password"
        ></input>
        <input 
          {...register('confirmPassword')} 
          type="password" 
          placeholder="Confirm Password"
        ></input>
        <input 
          type="button" 
          name="submit" 
          value="SUBMIT" 
          onClick={handleSubmit(onSubmitHandler)}
        ></input>
        <input 
          type="button" 
          name="reset" 
          value="RESET" 
          onClick={() => reset(defaultValues)}
        ></input>
      </form>
    </div>
  )
}