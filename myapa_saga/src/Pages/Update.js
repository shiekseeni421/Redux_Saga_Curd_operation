import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Update_user } from "../Redux/Action/acton";
import { useNavigate } from "react-router-dom";

function Update() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = location.state;

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      completed: "",
      user_id: id,
    },
  });
  const onSubmit = (data) => {
    dispatch(Update_user(data));
    navigate("/");
  };

  return (
    <div className="Update">
      <h1>Update Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Task" className="input_1" />
        <input {...register("completed")} placeholder="completed" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Update;
