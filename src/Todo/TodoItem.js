import { deleteTodo, updateTodo } from '../services/api';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditMode from './EditMode';

import { changeCheckbox, changeOnEditing, deleteTask } from '../utils';

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

    setState(deleteTask({ id }));
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
        {onEditing[index] ? null : <span>{todo}</span>}
      </label>
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
          <EditButton
            setOnEditing={setOnEditing}
            onClick={handleClickEditButton}
          />
          <DeleteButton onClick={handleClickDelete} />
        </>
      )}
    </li>
  );
}
