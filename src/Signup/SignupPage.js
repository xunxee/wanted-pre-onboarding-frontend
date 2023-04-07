import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { getItem } from '../utils';

import FormPage from '../components/FormPage';

import { postSignUp } from '../services/api';

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

export default function SignupPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getItem('jwt_token')) navigate('/todo');
  });

  async function handleSubmit({ email, password }) {
    try {
      const data = await postSignUp({ email, password });

      if (data.status === 201) navigate('/signin');
    } catch (error) {
      alert(error);
    }
  }

  function handleClick() {
    navigate('/signin');
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
      <FormPage
        category="Sign Up"
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </Wrapper>
  );
}
