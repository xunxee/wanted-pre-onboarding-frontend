import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  editModeInputValue,
  onEditing,
  onChangeInput,
  setOnEditing,
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
          onChangeInput={onChangeInput}
          onEditing={onEditing}
          setOnEditing={setOnEditing}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </>
  );
}
