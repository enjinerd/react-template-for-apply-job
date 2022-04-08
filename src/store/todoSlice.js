import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todosData',
  initialState: {
    todos: [],
  },
  reducers: {
    initTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = action.payload.todo;
      todo.id = state.todos.length + 1;
      const prevTodos = [...state.todos];
      prevTodos.push(todo);
      state.todos = prevTodos;
    },
    removeTodo: (state, action) => {
      const todoId = action.payload.todoId;
      const prevTodos = [...state.todos];
      const index = prevTodos.findIndex((todo) => todo.id === todoId);
      prevTodos.splice(index, 1);
      state.todos = prevTodos;
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload.todoId;
      const prevTodos = [...state.todos];
      const index = prevTodos.findIndex((todo) => todo.id === todoId);
      if (prevTodos[index].status === 0) {
        prevTodos[index].status = 1;
      } else {
        prevTodos[index].status = 0;
      }
      state.todos = prevTodos;
    },
    updateTodo: (state, action) => {
      const todoId = action.payload.todoId;
      const updatedTodo = action.payload.updatedTodo;
      const prevTodos = [...state.todos];
      const index = prevTodos.findIndex((todo) => todo.id === todoId);
      prevTodos[index] = updatedTodo;
      state.todos = prevTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo, initTodos } = todoSlice.actions;
export default todoSlice.reducer;
