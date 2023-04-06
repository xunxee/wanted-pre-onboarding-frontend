import { updateTodo } from '../services/api';

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
    updateTodo({ id, todo: editModeInputValue, isCompleted });

    setState((prevState) => {
      const { tasks } = prevState;

      return {
        ...prevState,
        tasks: tasks.map((task) => {
          const { id: keyName } = task;

          if (id !== keyName) return task;

          return {
            ...task,
            todo: editModeInputValue,
          };
        }),
      };
    });

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
