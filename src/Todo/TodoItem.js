export default function TodoItem({ id, todo, isCompleted, setState }) {
  function handleChange({ target }) {
    const { name } = target;

    setState((prevState) => {
      const { tasks } = prevState;

      return {
        ...prevState,
        tasks: tasks.map((task) => {
          if (task.id !== Number(name)) return task;

          return {
            ...task,
            isCompleted: !isCompleted,
          };
        }),
      };
    });
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          name={id}
          checked={isCompleted}
          onChange={handleChange}
        />
        <span>{todo}</span>
      </label>
    </li>
  );
}
