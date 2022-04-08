const TodoItem = ({ todo }) => {
  const { id: todoId, title, description, status, createdAt } = todo;
  return (
    <section className="flex flex-row gap-2 px-3 py-2 border border-gray-600 border-1">
      <input type="checkbox" className="mr-2" checked={status === 1} />
      <h4 className="font-semibold capitalize">{title}</h4>
      <button className="w-auto h-8 px-2 py-1 font-medium text-white capitalize bg-gray-800 cursor-pointer hover:bg-gray-600" todoId={todoId}>
        Detail
      </button>
    </section>
  );
};

export default TodoItem;
