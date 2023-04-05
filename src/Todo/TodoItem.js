import { deleteTodo, updateTodo } from '../services/api';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditMode from './EditMode';

export default function TodoItem({
  id,
  index,
  todo,
  inputValue,
  isCompleted,
  onChangeTitle,
  onEditing,
  setOnEditing,
}) {
  function handleChangeCheckbox({ target }) {
    const { checked } = target;

    updateTodo({ id, todo: inputValue, isCompleted: checked });
  }

  function handleClickEditButton() {
    setOnEditing((prevState) => [
      ...prevState.map((state, number) => {
        if (number === index) return !state;

        return state;
      }),
    ]);
  }

  function handleClickDelete() {
    deleteTodo({ id });
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
      </label>
      {onEditing[index] ? (
        <EditMode
          id={id}
          todo={todo}
          inputValue={inputValue}
          isCompleted={isCompleted}
          onChangeTitle={onChangeTitle}
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
    </li>
  );
}
