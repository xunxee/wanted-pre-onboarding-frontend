import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

const {
  saddleBrown,
  outrageousOrange,
  californiaOrange,
  supernova,
  appleGreen,
  deepSkyBlue,
} = PALETTE;

const { WRAPPER } = BASE_STYLES;

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

export default function Listify() {
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
    </Wrapper>
  );
}
