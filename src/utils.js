export function getItem(key) {
  return localStorage.getItem(key);
}

export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function clearItem() {
  localStorage.clear();
}

export function changeInput({ category, value }) {
  return (prevState) => ({
    ...prevState,
    [category]: value,
  });
}

export function addTask({ tasks, task }) {
  return (prevState) => ({
    ...prevState,
    inputValue: '',
    tasks: [...tasks, task],
  });
}

export function changeCheckbox({ id, checked }) {
  return (prevState) => {
    const { tasks } = prevState;

    return {
      ...prevState,
      tasks: tasks.map((task) => {
        const { id: keyName } = task;

        if (keyName === id) {
          return {
            ...task,
            isCompleted: checked,
          };
        }

        return task;
      }),
    };
  };
}

export function changeOnEditing({ index }) {
  return (prevState) => [
    ...prevState.map((state, number) => {
      if (number === index) return !state;

      return state;
    }),
  ];
}

export function deleteTask({ id }) {
  return (prevState) => {
    const { tasks } = prevState;

    return {
      ...prevState,
      tasks: tasks.filter((task) => {
        const { id: keyName } = task;

        if (keyName === id) return false;

        return true;
      }),
    };
  };
}

export function changeTask({ id, editModeInputValue }) {
  return (prevState) => {
    const { tasks } = prevState;

    return {
      ...prevState,
      tasks: tasks.map((task) => {
        const { id: keyName } = task;

        if (id === keyName) {
          return {
            ...task,
            todo: editModeInputValue,
          };
        }

        return task;
      }),
    };
  };
}
