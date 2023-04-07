import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import FormPage from '../components/FormPage';

import { postSignIn } from '../services/api';

import { getItem, saveItem } from '../utils';

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

export default function SigninPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getItem('jwt_token')) navigate('/todo');
  });

  async function handleSubmit({ email, password }) {
    try {
      const access_token = await postSignIn({ email, password });

      saveItem('jwt_token', access_token);

      navigate('/todo');
    } catch (error) {
      alert(error);
    }
  }

  function handleClick() {
    navigate('/signup');
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
        category="Sign in"
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </Wrapper>
  );
}
