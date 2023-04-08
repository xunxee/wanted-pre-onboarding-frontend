import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

const { white, vividBlue } = PALETTE;

const { BUTTON } = BASE_STYLES;

const Button = styled.button({
  ...BUTTON,
  padding: '8px 14px',
  fontSize: '1rem',
  color: white,
  backgroundColor: vividBlue,
});

export default function EditButton({ onClick }) {
  function handleClickEditButton() {
    onClick();
  }

  return (
    <Button
      type="button"
      data-testid="modify-button"
      onClick={handleClickEditButton}
    >
      수정
    </Button>
  );
}
