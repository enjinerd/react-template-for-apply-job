import { Modal } from '../ui';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../../store/todoSlice';

const TodoEditModal = ({ isOpen, setOpen, todoId }) => {
  const todo = useSelector((state) => state.todosData.todos.find((todo) => todo?.id === todoId));

  const dispatch = useDispatch();
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  console.log(updatedTodo);
  const closeModal = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setUpdatedTodo({
      ...updatedTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedTodo.title.trim().length < 5) {
      alert('Title must be at least 5 characters');
      return;
    } else if (updatedTodo.description.trim().length < 10) {
      alert('Description must be at least 10 characters');
      return;
    } else {
      dispatch(updateTodo({ id: todo.id, updatedTodo }));
      alert('Todo updated');
      closeModal();
    }
  };
  const handleRemove = () => {
    if (todo.status !== 1) {
      dispatch(removeTodo({ id: todo.id }));
      alert('Todo removed');
      closeModal();
    } else {
      alert('You can not remove completed todo');
    }
  };

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title="Edit Todo">
      {' '}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input className="text-black border border-black border-1" type="text" name="title" id="title" value={updatedTodo.title} onChange={handleChange} />
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <textarea className="text-black border border-black border-1" name="description" id="description" value={updatedTodo.description} onChange={handleChange} />
        <button type="submit" className="w-auto h-8 px-3 py-1 text-white bg-blue-800 hover:bg-blue-600">
          Update Todo
        </button>
        <button type="button" className="w-auto h-8 px-3 py-1 text-white bg-red-800 hover:bg-red-600" onClick={handleRemove}>
          Remove Todo
        </button>
      </form>
    </Modal>
  );
};

export default TodoEditModal;
