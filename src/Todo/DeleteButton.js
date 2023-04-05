export default function DeleteButton({ onClick }) {
  function handleClickDelete() {
    onClick();
  }

  return (
    <button
      type="button"
      data-testid="delete-button"
      onClick={handleClickDelete}
    >
      삭제
    </button>
  );
}
