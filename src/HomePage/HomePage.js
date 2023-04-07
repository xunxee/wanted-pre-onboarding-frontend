import styled from '@emotion/styled';

import PALETTE from '../styles/palette';

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

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '290px',
  maxWidth: '460px',
  margin: '0 auto',
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
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '5% 0 0',
  padding: '16px 17px',
  borderRadius: '2px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: white,
  backgroundColor: vividBlue,
  boxShadow: 'inset 0 -2px 0',
  cursor: 'pointer',
});

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick({ target: { name } }) {
    navigate(`/${name}`);
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledWord color={saddleBrown}>We</StyledWord>
        <StyledWord color={outrageousOrange}>l</StyledWord>
        <StyledWord color={californiaOrange}>c</StyledWord>
        <StyledWord color={supernova}>o</StyledWord>
        <StyledWord color={appleGreen}>m</StyledWord>
        <StyledWord color={deepSkyBlue}>e</StyledWord>
      </TitleWrapper>
      <H2>Listify</H2>
      <Button name="signin" onClick={handleClick}>
        Sign In
      </Button>
      <Button name="signup" onClick={handleClick}>
        Sign Up
      </Button>
    </Wrapper>
  );
}
