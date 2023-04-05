import { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import {
  getTodo,
  postCreateTodo,
  updateTodo,
  deleteTodo,
} from '../services/api';

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

  async function handleClickAddTask() {
    const task = await postCreateTodo({ inputValue });

    setState({
      inputValue: '',
      tasks: [...tasks, task],
    });
  }

  function handleChangeUpdateTodo({ id, todo, isCompleted }) {
    updateTodo({ id, todo, isCompleted });
  }

  function handleClickDeleteTodo({ id }) {
    deleteTodo({ id });
  }

  if (tasks.length === 0) return null;

  return (
    <>
      <TodoInput
        onChangeTodo={handleChangeTodo}
        handleClickAddTask={handleClickAddTask}
      />
      <TodoList
        tasks={tasks}
        inputValue={inputValue}
        setState={setState}
        onChangeTitle={handleChangeTodo}
        onChangeUpdateTodo={handleChangeUpdateTodo}
        onEditing={onEditing}
        setOnEditing={setOnEditing}
        onClickDeleteTodo={handleClickDeleteTodo}
      />
    </>
  );
}
