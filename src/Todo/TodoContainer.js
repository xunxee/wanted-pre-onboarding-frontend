import { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { getTodo, postCreateTodo } from '../services/api';

import { addTask, changeInput } from '../utils';

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
  }, []);

  if (tasks.length > onEditing.length) {
    setOnEditing(tasks.map((_) => false));
  }

  function handleChangeInput({ category, value }) {
    setState(changeInput({ category, value }));
  }

  async function handleClickAddTaskButton() {
    const task = await postCreateTodo({ inputValue });

    setState(addTask({ tasks, task }));
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
        setState={setState}
        setOnEditing={setOnEditing}
        onChangeInput={handleChangeInput}
      />
    </>
  );
}
