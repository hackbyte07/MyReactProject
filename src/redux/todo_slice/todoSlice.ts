import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TodoInitialState = {
  todos: Array<{ id: number; title: string; body: string }>;
};

const initialState: TodoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      payload: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      state.todos = [...state.todos, payload.payload];
    },
    deleteTodo: (state, payload: PayloadAction<number>) => {
      const newTodos = state.todos.filter((it) => it.id !== payload.payload);
      state.todos = newTodos;
    },
    updateTodo: (
      state,
      payload: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      const updatedTodos = state.todos.map((it) => {
        if (it.id === payload.payload.id) {
          (it.title = payload.payload.title), (it.body = payload.payload.body);
        }
        return it;
      });
      state.todos = updatedTodos;
    },
  },
});

export default todoSlice.reducer
export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions
