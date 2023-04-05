import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  inputValue,
  setState,
  onChangeTitle,
  onEditing,
  onChangeUpdateTodo,
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
          inputValue={inputValue}
          isCompleted={isCompleted}
          setState={setState}
          onChangeTitle={onChangeTitle}
          onEditing={onEditing}
          setOnEditing={setOnEditing}
          onChangeUpdateTodo={onChangeUpdateTodo}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </>
  );
}
