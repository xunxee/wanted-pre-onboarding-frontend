import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  editModeInputValue,
  onEditing,
  setState,
  setOnEditing,
  onChangeInput,
  onClickDeleteTodo,
}) {
  return (
    <>
      {tasks.map(({ id, todo, isCompleted }, index) => (
        <TodoItem
          key={id}
          id={id}
          index={index}
          todo={todo}
          editModeInputValue={editModeInputValue}
          isCompleted={isCompleted}
          onEditing={onEditing}
          setState={setState}
          setOnEditing={setOnEditing}
          onChangeInput={onChangeInput}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </>
  );
}
