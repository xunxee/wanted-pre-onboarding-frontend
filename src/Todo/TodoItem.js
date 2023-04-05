import { updateTodo } from '../services/api';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditMode from './EditMode';

export default function TodoItem({
  id,
  index,
  todo,
  isCompleted,
  setState,
  onEditing,
  setOnEditing,
}) {
  function handleChange({ target }) {
    const { name, checked } = target;

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

    updateTodo({ id, todo, isCompleted: checked });
  }

  function handleClickEditButton() {
    setOnEditing((prevState) => [
      ...prevState.map((state, number) => {
        if (number === index) return !state;

        return state;
      }),
    ]);
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
      </label>
      {onEditing[index] ? (
        <EditMode todo={todo} />
      ) : (
        <>
          <span>{todo}</span>
          <EditButton
            setOnEditing={setOnEditing}
            onClick={handleClickEditButton}
          />
          <DeleteButton />
        </>
      )}
    </li>
  );
}
