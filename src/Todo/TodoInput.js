export default function TodoInput({ onChangeTodo, onClickAddTaskButton }) {
  function handleChange({ target: { value } }) {
    onChangeTodo(value);
  }

  return (
    <>
      <input
        data-testid="new-todo-input"
        type="text"
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
