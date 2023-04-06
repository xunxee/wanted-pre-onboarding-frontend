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
