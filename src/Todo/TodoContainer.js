import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoContainer() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  function handleChangeTitle(value) {
    setState({
      ...state,
      taskTitle: value,
    });
  }

  return (
    <>
      <TodoInput onChange={handleChangeTitle} />
      <TodoList />
    </>
  );
}
