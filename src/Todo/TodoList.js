import TodoItem from './TodoItem';

export default function TodoList({ tasks, setState }) {
  return (
    <>
      {tasks.map(({ id, todo, isCompleted }) => (
        <TodoItem
          key={id}
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          setState={setState}
        />
      ))}
    </>
  );
}
