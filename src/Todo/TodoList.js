import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  editModeInputValue,
  onEditing,
  setState,
  setOnEditing,
  onChangeInput,
}) {
  return tasks.map((task, index) => {
    const { id } = task;

    return (
      <TodoItem
        key={id}
        index={index}
        task={task}
        editModeInputValue={editModeInputValue}
        onEditing={onEditing}
        setState={setState}
        setOnEditing={setOnEditing}
        onChangeInput={onChangeInput}
      />
    );
  });
}
