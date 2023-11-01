import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../Redux/Action/acton";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      completed: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(AddUser(data));
    navigate("/");
  };
  return (
    <div className="Update">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" className="input_1" />
        <input {...register("completed")} placeholder="completed" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Add;
