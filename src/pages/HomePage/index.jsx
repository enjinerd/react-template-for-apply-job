import { useEffect, useEffectl, useState } from 'react';
import { Page, PageContent } from '../../components/layout/page';
import { fetchTodos } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { initTodos } from '../../store/todoSlice';
import { TodoList } from '../../components/todo';

const HomePage = () => {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todosData.todos);
  useEffect(() => {
    fetchTodos().then((todos) => {
      dispatch(initTodos(todos));
    });
  }, []);

  return (
    <Page>
      <PageContent>
        <TodoList todos={todosData} />
      </PageContent>
    </Page>
  );
};

export default HomePage;
