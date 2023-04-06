import { updateTodo } from '../services/api';

import { changeTask } from '../utils';

export default function EditMode({
  id,
  todo,
  editModeInputValue,
  isCompleted,
  setState,
  onChangeInput,
  onClickSubmitButton,
}) {
  function handleChange({ target: { value } }) {
    onChangeInput({ category: 'editModeInputValue', value });
  }

  function handleClickSubmit() {
    if (editModeInputValue === '') {
      onClickSubmitButton();

      return;
    }

    updateTodo({ id, todo: editModeInputValue, isCompleted });

    setState(changeTask({ id, editModeInputValue }));

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
