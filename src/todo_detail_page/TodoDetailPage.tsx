import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store/store";
import { TodoInitialState, updateTodo } from "../redux/todo_slice/todoSlice";

const TodoDetailPage = () => {
  const { id } = useParams();
  const todoSelector = useSelector<RootState>(
    (state) => state.todoSlice
  ) as TodoInitialState;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    todoSelector.todos.filter((it) => {
      if (it.id.toString() === id) {
        setTitle(it.title);
        setDescription(it.body);
      }
    });
  }, []);

  const appDispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    if (title.trim().length < 1) {
      return;
    }
    if (description.trim().length < 1) return;
    appDispatch(
      updateTodo({
        id: Date.now(),
        title: title,
        body: description,
      })
    );
    navigate(-1);
  };

  return (
    <div className="flex flex-col place-items-center ">
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
      <button className="btn my-5" onClick={handleUpdate}> 
        Update Todo
      </button>
    </div>
  );
};

export default TodoDetailPage;
