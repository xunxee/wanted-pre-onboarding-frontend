export default function EditButton({ onClick }) {
  function handleClickEditButton() {
    onClick();
  }

  return (
    <button
      type="button"
      data-testid="modify-button"
      onClick={handleClickEditButton}
    >
      수정
    </button>
  );
}
