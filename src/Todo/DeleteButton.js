import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

const { white, babyBlueEyes } = PALETTE;

const { BUTTON } = BASE_STYLES;

const Button = styled.button({
  ...BUTTON,
  padding: '8px 14px',
  fontSize: '1rem',
  color: white,
  backgroundColor: babyBlueEyes,
});

export default function DeleteButton({ onClick }) {
  function handleClickDelete() {
    onClick();
  }

  return (
    <Button
      type="button"
      data-testid="delete-button"
      onClick={handleClickDelete}
    >
      삭제
    </Button>
  );
}
