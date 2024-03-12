import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import {
  TodoInitialState,
  addTodo,
  deleteTodo,
} from "../redux/todo_slice/todoSlice";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todoSelector = useSelector<RootState>(
    (state) => state.todoSlice
  ) as TodoInitialState;

  const appDispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleAdd = () => {
    if (title.trim().length < 1) {
      return;
    }
    if (description.trim().length < 1) return;
    appDispatch(
      addTodo({
        id: Date.now(),
        title: title,
        body: description,
      })
    );
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <TodoForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        addTodo={handleAdd}
      />
      <div className="mt-5 ">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {todoSelector.todos.map((it) => (
            <li key={it.id}>
              <div className="card w-80 bg-base-100 shadow-xl p-2 my-2">
                <div className="card-body">
                  <h2
                    className="card-title"
                    onClick={() => {
                      navigate(`/todo/${it.id}`);
                    }}
                  >
                    {it.title}
                  </h2>
                  <p>{it.body}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        appDispatch(deleteTodo(it.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

