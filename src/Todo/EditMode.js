import { updateTodo } from '../services/api';

export default function EditMode({
  id,
  todo,
  inputValue,
  isCompleted,
  onChangeTitle,
  onClickSubmitButton,
}) {
  function handleChange({ target: { value } }) {
    onChangeTitle(value);
  }

  function handleClickSubmit() {
    updateTodo({ id, todo: inputValue, isCompleted });

    onClickSubmitButton();
  }

  function handleClickCancel() {
    onClickSubmitButton();
  }

  return (
    <>
      <input
        type="text"
        data-testid="modify-input"
        defaultValue={todo}
        onChange={handleChange}
      />
      <button
        type="button"
        data-testid="submit-button"
        onClick={handleClickSubmit}
      >
        제출
      </button>
      <button
        type="button"
        data-testid="cancel-button"
        onClick={handleClickCancel}
      >
        취소
      </button>
    </>
  );
}
