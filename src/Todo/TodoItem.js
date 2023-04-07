import { deleteTodo, updateTodo } from '../services/api';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditMode from './EditMode';

import { changeCheckbox, changeOnEditing, deleteTask } from '../utils';

export default function TodoItem({
  index,
  task,
  editModeInputValue,
  onEditing,
  setState,
  setOnEditing,
  onChangeInput,
}) {
  const { id, todo, isCompleted } = task;

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
          task={task}
          editModeInputValue={editModeInputValue}
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
