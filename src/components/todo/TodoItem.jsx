import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/todoSlice';
import TodoEditModal from './TodoEditModal';

const TodoItem = ({ todo }) => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { id, title, description, status, createdAt } = todo;
  const handleChecked = () => {
    const newStatus = status === 1 ? 0 : 1;
    dispatch(toggleTodo({ id, status: newStatus }));
  };

  return (
    <>
      <section className="flex flex-row justify-between gap-2 px-3 py-2 border border-gray-600 hover:bg-gray-800 hover:text-white hover:cursor-pointer border-1" onClick={() => setOpen(!isOpen)}>
        <input type="checkbox" className="mr-2" checked={status === 1} onChange={handleChecked} />
        <h4 className="font-semibold capitalize">{title}</h4>
        <TodoEditModal isOpen={isOpen} setOpen={setOpen} todoId={id} />
      </section>
    </>
  );
};

export default TodoItem;
