import styled from '@emotion/styled';

import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { getItem } from '../utils';

import FormPage from '../components/FormPage';

import { postSignUp } from '../services/api';

const { WRAPPER } = BASE_STYLES;

const Wrapper = styled.div({
  ...WRAPPER,
});

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
      <FormPage
        category="Sign Up"
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </Wrapper>
  );
}
