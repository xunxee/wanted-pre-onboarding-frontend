import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { postCreateTodo } from '../services/api';

export default function TodoContainer() {
  const [state, setState] = useState({
    inputValue: '',
    tasks: [],
  });

  const { inputValue, tasks } = state;

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

  return (
    <>
      <TodoInput
        onChange={handleChangeTitle}
        handleClickAddTask={handleClickAddTask}
      />
      <TodoList />
    </>
  );
}
