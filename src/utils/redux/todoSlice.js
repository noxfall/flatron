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
    }
  }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;