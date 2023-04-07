import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

const { white, slateGrey, vividBlue, babyBlueEyes } = PALETTE;

const { BUTTON } = BASE_STYLES;

const Wrapper = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Input = styled.input({
  height: '45px',
  '&[type="password"]': {
    marginTop: '10px',
  },
});

const Button = styled.button(({ isButtonActive }) => ({
  ...BUTTON,
  color: white,
  backgroundColor: isButtonActive ? vividBlue : babyBlueEyes,
}));

const GoToButton = styled.button({
  ...BUTTON,
  border: `1px solid ${slateGrey}`,
  color: vividBlue,
  backgroundColor: white,
});

export function FormLayout({
  category,
  onChange,
  onSubmit,
  onClick,
  fields,
  isButtonActive,
}) {
  const { email, password } = fields;

  function handleChange(event) {
    const {
      target: { name, value },
    } = event;

    onChange({ name, value });
  }

  function handleSubmit() {
    return (event) => {
      event.preventDefault();

      onSubmit({ email, password });
    };
  }

  function handleClick() {
    onClick();
  }

  return (
    <Wrapper onSubmit={handleSubmit()}>
      <Input
        type="email"
        name="email"
        data-testid="email-input"
        value={email}
        placeholder="아이디(이메일)"
        onChange={handleChange}
      />

      <Input
        type="password"
        name="password"
        data-testid="password-input"
        value={password}
        placeholder="비밀번호"
        onChange={handleChange}
      />

      <Button
        type="submit"
        data-testid={category === 'Sign in' ? 'signin-button' : 'signup-button'}
        disabled={!isButtonActive}
        isButtonActive={isButtonActive}
        color={vividBlue}
      >
        {category}
      </Button>

      <GoToButton type="button" onClick={handleClick}>
        {category === 'Sign in' ? '회원가입으로 이동' : '로그인으로 이동'}
      </GoToButton>
    </Wrapper>
  );
}
