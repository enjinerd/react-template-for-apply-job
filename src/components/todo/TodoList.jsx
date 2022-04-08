import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  const todoIsDone = (todo) => todo?.status === 1;
  const todoIsNotDone = (todo) => todo?.status === 0;
  const todosDone = todos.filter(todoIsDone).sort((a, d) => new Date(d.createdAt) - new Date(a.createdAt));
  const todosNotDone = todos.filter(todoIsNotDone).sort((a, d) => new Date(a.createdAt) - new Date(d.createdAt));

  return (
    <section className="grid grid-flow-col grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 px-3 py-3 bg-orange-200 border-gray-600 border-r-1">
        <h3 className="font-bold">Doing</h3>
        {todosNotDone.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="flex flex-col gap-2 px-3 py-3 bg-green-200 border-gray-600 border-l-1">
        <h3 className="font-bold">Done</h3>
        {todosDone.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
