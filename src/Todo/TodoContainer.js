import { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { getTodo, postCreateTodo, deleteTodo } from '../services/api';

export default function TodoContainer() {
  const [state, setState] = useState({
    inputValue: '',
    tasks: [],
  });

  const { inputValue, tasks } = state;

  const [onEditing, setOnEditing] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const todoList = await getTodo();

      setState((prevState) => ({
        ...prevState,
        tasks: todoList,
      }));
    }

    fetchData();
  }, [state]);

  if (tasks.length > onEditing.length) {
    setOnEditing(tasks.map((_) => false));
  }

  function handleChangeTodo(inputValue) {
    setState((prevState) => ({
      ...prevState,
      inputValue,
    }));
  }

  async function handleClickAddTaskButton() {
    const task = await postCreateTodo({ inputValue });

    setState((prevState) => ({
      ...prevState,
      inputValue: '',
      tasks: [...tasks, task],
    }));
  }

  function handleClickDeleteTodo({ id }) {
    deleteTodo({ id });
  }

  return (
    <>
      <TodoInput
        inputValue={inputValue}
        onChangeTodo={handleChangeTodo}
        onClickAddTaskButton={handleClickAddTaskButton}
      />
      <TodoList
        tasks={tasks}
        inputValue={inputValue}
        onChangeTitle={handleChangeTodo}
        onEditing={onEditing}
        setOnEditing={setOnEditing}
        onClickDeleteTodo={handleClickDeleteTodo}
      />
    </>
  );
}
