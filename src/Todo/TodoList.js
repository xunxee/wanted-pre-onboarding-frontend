import TodoItem from './TodoItem';

export default function TodoList({ tasks, setState, onEditing, setOnEditing }) {
  return (
    <>
      {tasks.map(({ id, todo, isCompleted }, index) => (
        <TodoItem
          key={id}
          id={id}
          index={index}
          todo={todo}
          isCompleted={isCompleted}
          setState={setState}
          onEditing={onEditing}
          setOnEditing={setOnEditing}
        />
      ))}
    </>
  );
}
