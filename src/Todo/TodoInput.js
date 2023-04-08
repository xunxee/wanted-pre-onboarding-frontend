import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

const { white, vividBlue } = PALETTE;

const { BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Input = styled.input({
  height: '45px',
});

const Button = styled.button({
  ...BUTTON,
  color: white,
  backgroundColor: vividBlue,
});

export default function TodoInput({
  inputValue,
  onChangeInput,
  onClickAddTaskButton,
}) {
  function handleChange({ target: { value } }) {
    onChangeInput({ category: 'inputValue', value });
  }

  function handleKeyDown({ code }) {
    if (code !== 'Enter') return;

    return onClickAddTaskButton();
  }

  return (
    <Wrapper>
      <Input
        data-testid="new-todo-input"
        type="text"
        value={inputValue}
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        data-testid="new-todo-add-button"
        type="button"
        onClick={onClickAddTaskButton}
      >
        추가
      </Button>
    </Wrapper>
  );
}
