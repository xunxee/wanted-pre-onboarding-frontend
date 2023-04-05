export default function TodoInput({ onChangeTodo, handleClickAddTask }) {
  function handleChange(event) {
    const {
      target: { value },
    } = event;

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
        onClick={handleClickAddTask}
      >
        추가
      </button>
    </>
  );
}
