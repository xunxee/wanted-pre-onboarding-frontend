import { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { getTodos, postCreateTodo } from '../services/api';

export default function TodoContainer() {
  const [state, setState] = useState({
    inputValue: '',
    tasks: [],
  });

  const { inputValue, tasks } = state;

  useEffect(() => {
    async function fetchData() {
      const todos = await getTodos();

      setState((prevState) => ({
        ...prevState,
        tasks: todos,
      }));
    }

    fetchData();
  }, []);

  function handleChangeTitle(inputValue) {
    setState({
      ...state,
      inputValue,
    });
  }

  async function handleClickAddTask() {
    const task = await postCreateTodo({ inputValue });

    setState({
      inputValue: '',
      tasks: [...tasks, task],
    });
  }

  if (tasks.length === 0) return null;

  return (
    <>
      <TodoInput
        onChange={handleChangeTitle}
        handleClickAddTask={handleClickAddTask}
      />
      <TodoList tasks={tasks} setState={setState} />
    </>
  );
}
