import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  const todoIsDone = (todo) => todo.status === 1;
  const todoIsNotDone = (todo) => todo.status === 0;
  const todosDone = todos.filter(todoIsDone).sort((a, d) => new Date(d.createdAt) - new Date(a.createdAt));
  const todosNotDone = todos.filter(todoIsNotDone).sort((a, d) => new Date(a.createdAt) - new Date(d.createdAt));

  return (
    <section className="flex flex-row gap-6">
      <div className="flex flex-col gap-2 px-3 border-r-2 border-gray-600">
        <h3>Doing</h3>
        {todosNotDone.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h3>Done</h3>
        {todosDone.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
