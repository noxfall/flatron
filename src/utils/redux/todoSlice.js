import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const exists = state.todos.find((item) => item.id === action.payload.id);
      if (!exists) state.todos.push(action.payload);
    },
    delTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    }
  }
});

export const { addTodo, delTodo } = todoSlice.actions;

export default todoSlice.reducer;