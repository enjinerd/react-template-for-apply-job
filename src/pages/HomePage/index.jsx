import { useEffect, useEffectl, useState } from 'react';
import { Page, PageContent } from '../../components/layout/page';
import { fetchTodos } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { initTodos } from '../../store/todoSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todosData.todos);
  useEffect(() => {
    fetchTodos().then((todos) => {
      dispatch(initTodos(todos));
    });
  }, []);
  useEffect(() => {
    console.log('todosData', todosData);
  }, [todosData]);
  return (
    <Page>
      <PageContent>
        <p>HomePage</p>
      </PageContent>
    </Page>
  );
};

export default HomePage;
