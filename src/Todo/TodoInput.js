export default function TodoInput({
  inputValue,
  onChangeInput,
  onClickAddTaskButton,
}) {
  function handleChange({ target: { value } }) {
    onChangeInput({ category: 'inputValue', value });
  }

  return (
    <>
      <input
        data-testid="new-todo-input"
        type="text"
        value={inputValue}
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
      />
      <button
        data-testid="new-todo-add-button"
        type="button"
        onClick={onClickAddTaskButton}
      >
        추가
      </button>
    </>
  );
}
