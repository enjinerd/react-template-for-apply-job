import { useEffect, useState } from 'react';
import { Page, PageContent } from '../../components/layout/page';
import { fetchTodos } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { initTodos } from '../../store/todoSlice';
import { TodoList, TodoForm } from '../../components/todo';
import { Spinner } from '../../components/ui';

const HomePage = () => {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todosData.todos);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTodos().then((todos) => {
      dispatch(initTodos(todos));
      setIsLoading(false);
    });
  }, []);

  return (
    <Page>
      <PageContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TodoForm />
            <TodoList todos={todosData} />
          </>
        )}
      </PageContent>
    </Page>
  );
};

export default HomePage;
