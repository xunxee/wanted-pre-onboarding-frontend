import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  inputValue,
  onChangeTitle,
  onEditing,
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
          onChangeTitle={onChangeTitle}
          onEditing={onEditing}
          setOnEditing={setOnEditing}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </>
  );
}
