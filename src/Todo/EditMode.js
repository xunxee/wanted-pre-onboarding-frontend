import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { updateTodo } from '../services/api';

import { changeTask } from '../utils';

const { white, conifer, kellyGreen } = PALETTE;

const { BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '120px',
  },
});

const SubmitButton = styled.button({
  ...BUTTON,
  padding: '8px 14px',
  fontSize: '1rem',
  color: white,
  backgroundColor: kellyGreen,
});

const CancelButton = styled.button({
  ...BUTTON,
  padding: '8px 14px',
  fontSize: '1rem',
  color: white,
  backgroundColor: conifer,
});

export default function EditMode({
  task,
  editModeInputValue,
  setState,
  onChangeInput,
  onClickSubmitButton,
}) {
  const { id, todo, isCompleted } = task;

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
    <Wrapper>
      <input
        type="text"
        data-testid="modify-input"
        defaultValue={todo}
        onChange={handleChange}
      />
      <div>
        <SubmitButton
          type="button"
          data-testid="submit-button"
          onClick={handleClickSubmit}
        >
          제출
        </SubmitButton>
        <CancelButton
          type="button"
          data-testid="cancel-button"
          onClick={handleClickCancel}
        >
          취소
        </CancelButton>
      </div>
    </Wrapper>
  );
}
