import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';

const { white, slateGrey, vividBlue } = PALETTE;

const { WRAPPER, BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  ...WRAPPER,
});

const H2 = styled.h2({
  padding: '10% 0 0',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: slateGrey,
});

const Button = styled.button({
  ...BUTTON,
  color: white,
  backgroundColor: vividBlue,
});

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick({ target: { name } }) {
    navigate(`/${name}`);
  }

  return (
    <Wrapper>
      <H2>Welcome</H2>
      <Button name="signin" onClick={handleClick}>
        Sign In
      </Button>
      <Button name="signup" onClick={handleClick}>
        Sign Up
      </Button>
    </Wrapper>
  );
}
