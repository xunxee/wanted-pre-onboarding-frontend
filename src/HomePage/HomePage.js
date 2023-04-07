import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';

const {
  white,
  slateGrey,
  saddleBrown,
  outrageousOrange,
  californiaOrange,
  supernova,
  appleGreen,
  deepSkyBlue,
  vividBlue,
} = PALETTE;

const { WRAPPER, BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  ...WRAPPER,
});

const TitleWrapper = styled.div({
  padding: '10% 0 0',
});

const StyledLetter = styled.span({
  fontSize: '3rem',
  fontWeight: 'bold',
});

const StyledWord = styled(StyledLetter)(({ color }) => ({
  color,
}));

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
      <TitleWrapper>
        <StyledWord color={saddleBrown}>Li</StyledWord>
        <StyledWord color={outrageousOrange}>s</StyledWord>
        <StyledWord color={californiaOrange}>t</StyledWord>
        <StyledWord color={supernova}>i</StyledWord>
        <StyledWord color={appleGreen}>f</StyledWord>
        <StyledWord color={deepSkyBlue}>y</StyledWord>
      </TitleWrapper>
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
