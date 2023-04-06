import { deleteTodo, updateTodo } from '../services/api';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditMode from './EditMode';
import { changeCheckbox, changeOnEditing } from '../utils';

export default function TodoItem({
  id,
  index,
  todo,
  editModeInputValue,
  isCompleted,
  onEditing,
  setState,
  setOnEditing,
  onChangeInput,
}) {
  function handleChangeCheckbox({ target }) {
    const { checked } = target;

    updateTodo({ id, todo, isCompleted: checked });

    setState(changeCheckbox({ id, checked }));
  }

  function handleClickEditButton() {
    setOnEditing(changeOnEditing({ index }));
  }

  function handleClickDelete() {
    deleteTodo({ id });

    setState((prevState) => {
      const { tasks } = prevState;

      return {
        ...prevState,
        tasks: tasks.filter((task) => {
          const { id: keyName } = task;

          if (keyName === id) return false;

          return true;
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
          onChange={handleChangeCheckbox}
        />
        {onEditing[index] ? (
          <EditMode
            id={id}
            todo={todo}
            editModeInputValue={editModeInputValue}
            isCompleted={isCompleted}
            setState={setState}
            onChangeInput={onChangeInput}
            onClickSubmitButton={handleClickEditButton}
          />
        ) : (
          <>
            <span>{todo}</span>
            <EditButton
              setOnEditing={setOnEditing}
              onClick={handleClickEditButton}
            />
            <DeleteButton onClick={handleClickDelete} />
          </>
        )}
      </label>
    </li>
  );
}
