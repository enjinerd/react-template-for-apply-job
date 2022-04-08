import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: null,
    title: '',
    description: '',
    createdAt: new Date().toLocaleString(),
    status: 0,
  });
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim().length < 5) {
      alert('Title must be at least 5 characters');
      return;
    } else if (todo.description.trim().length < 10) {
      alert('Description must be at least 10 characters');
      return;
    } else {
      dispatch(addTodo({ todo }));
      alert('Todo added');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value={todo.title} onChange={handleChange} />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" value={todo.description} onChange={handleChange} />
      <button type="submit" className="w-auto h-8 px-3 py-1 text-white bg-blue-800 hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
