import React from 'react'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Home from '../components/Home';

const schema = yup.object().shape({
  firstname: yup.string().required().matches(/^[a-zA-Z]{5,20}$/),
  lastname: yup.string().required().matches(/^[a-zA-Z]{5,20}$/),
  age: yup.number().min(18).max(99),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')]),
});

export default function RHFexample2() {
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
    resolver: yupResolver(schema),
  });
  
  const onSubmitHandler = (data, e) => {
    console.log(data);
    console.log(e);
    reset(defaultValues);
  }
  
  return (
    <div className={styles.container}>
    <Home></Home>
      <form className={styles.main}>
        <input 
          id='firstname'
          {...register('firstname')} 
          placeholder="First Name" 
        ></input>
        {errors.firstname && <span className={styles.errorMsg}>Invalid first Name</span>}
        <input 
          id="lastname"
          {...register('lastname')} 
          placeholder="Last Name"
        ></input>
        {errors.lastname && <span className={styles.errorMsg}>Invalid Last Name</span>}
        <input 
          id="age"
          {...register('age')} 
          type="number" 
          placeholder="Age"
        ></input>
        {errors.age && <span className={styles.errorMsg}>Age must be within 18 - 99</span>}
        <input 
          id="email"
          {...register('email')} 
          placeholder="Email Address"
        ></input>
        {errors.email && <span className={styles.errorMsg}>Invalid Email Address</span>}
        <input 
          {...register('password')} 
          type="password" 
          placeholder="Password"
        ></input>
        {errors.password && <span className={styles.errorMsg}>Invalid Password</span>}
        <input 
          {...register('confirmPassword')} 
          type="password" 
          placeholder="Confirm Password"
        ></input>
        {errors.confirmPassword && <span className={styles.errorMsg}>Invalid confirmPassword</span>}
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