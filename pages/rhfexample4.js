import React from "react";
import styles from "../styles/Home.module.css";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Home from "../components/Home";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required()
    .matches(/^[a-zA-Z]{5,20}$/),
  lastname: yup
    .string()
    .required()
    .matches(/^[a-zA-Z]{5,20}$/),
  email: yup.string().email().required(),
});

export default function RHFexample4() {
  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "prasan@gmail.com",
  };

  const {
    formState: { errors },
    reset,
    handleSubmit,
    control,
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  const onSubmitHandler = (data, e) => {
    console.log(data);
    console.log(e);
    reset(defaultValues);
  };

  return (
    <div className={styles.container}>
      <Home></Home>
      <form className={styles.controlledMain}>
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <Input
              id="firstname"
              placeholder="First Name"
              w="300px"
              m={2}
              {...field}
            />
          )}
        />
        {errors.firstname && (
          <span className={styles.errorMsg}>Invalid first Name</span>
        )}
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <Input
              id="lastname"
              placeholder="Last Name"
              w="300px"
              m={2}
              {...field}
            />
          )}
        />
        {errors.lastname && (
          <span className={styles.errorMsg}>Invalid Last Name</span>
        )}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              placeholder="Email Address"
              w="300px"
              m={2}
              {...field}
            />
          )}
        />
        {errors.email && (
          <span className={styles.errorMsg}>Invalid Email Address</span>
        )}
        <Button
          colorScheme="teal"
          type="button"
          w="300px"
          m={2}
          name="submit"
          onClick={handleSubmit(onSubmitHandler)}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
