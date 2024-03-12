import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";

type props = {
  title: string;
  description: string;
  setTitle: (it: string) => void;
  setDescription: (it: string) => void;
  addTodo: () => void;
};

export const TodoForm: FC<props> = ({
  title,
  description,
  setTitle,
  setDescription,
  addTodo,
}) => {


  return (
    <div className="flex flex-col place-items-center">
      <h2 className="text-2xl">Todo Form</h2>
      <input
        placeholder="title"
        className="input input-bordered w-full my-2 max-w-xs"
        value={title}
        onChange={(it) => setTitle(it.target.value)}
      />
      <input
        placeholder="description"
        className="input input-bordered w-full my-2 max-w-xs"
        value={description}
        onChange={(it) => setDescription(it.target.value)}
      />
      <button className="btn my-5" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};
