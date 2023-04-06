import { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { getTodo, postCreateTodo, deleteTodo } from '../services/api';

export default function TodoContainer() {
  const [state, setState] = useState({
    inputValue: '',
    editModeInputValue: '',
    tasks: [],
  });

  const { inputValue, editModeInputValue, tasks } = state;

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

  function handleChangeInput({ category, value }) {
    setState((prevState) => ({
      ...prevState,
      [category]: value,
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
        onChangeInput={handleChangeInput}
        onClickAddTaskButton={handleClickAddTaskButton}
      />
      <TodoList
        tasks={tasks}
        editModeInputValue={editModeInputValue}
        onEditing={onEditing}
        onChangeInput={handleChangeInput}
        setOnEditing={setOnEditing}
        onClickDeleteTodo={handleClickDeleteTodo}
      />
    </>
  );
}
