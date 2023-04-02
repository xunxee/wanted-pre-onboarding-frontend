export default function Input({ onChange }) {
  function handleChange(event) {
    const {
      target: { value },
    } = event;

    onChange(value);
  }

  return (
    <>
      <input
        data-testid="new-todo-input"
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
      />
      <button data-testid="new-todo-add-button" type="button">
        추가
      </button>
    </>
  );
}
