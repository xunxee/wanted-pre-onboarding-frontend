import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';
import H2 from '../components/H2';

const { white, vividBlue } = PALETTE;

const { WRAPPER, BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  ...WRAPPER,
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
      <H2 title="Welcome" />
      <Button name="signin" onClick={handleClick}>
        Sign In
      </Button>
      <Button name="signup" onClick={handleClick}>
        Sign Up
      </Button>
    </Wrapper>
  );
}
