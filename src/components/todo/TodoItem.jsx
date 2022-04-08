import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, description, status, createdAt } = todo;
  const handleChecked = () => {
    const newStatus = status === 1 ? 0 : 1;
    dispatch(toggleTodo({ id, status: newStatus }));
  };

  return (
    <section className="flex flex-row justify-between gap-2 px-3 py-2 border border-gray-600 border-1">
      <input type="checkbox" className="mr-2" checked={status === 1} onChange={handleChecked} />
      <h4 className="font-semibold capitalize">{title}</h4>
    </section>
  );
};

export default TodoItem;
