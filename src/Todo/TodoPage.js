import styled from '@emotion/styled';

import PALETTE from '../styles/palette';
import BASE_STYLES from '../styles/baseStyles';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { clearItem, getItem } from '../utils';

import TodoContainer from './TodoContainer';
import H2 from '../components/H2';

const { white, babyBlueEyes } = PALETTE;

const { WRAPPER, BUTTON } = BASE_STYLES;

const Wrapper = styled.div({
  ...WRAPPER,
});

const LogoutButton = styled.button({
  ...BUTTON,
  width: '30%',
  margin: '20px 0',
  fontSize: '1rem',
  color: white,
  backgroundColor: babyBlueEyes,
});

export default function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getItem('jwt_token')) navigate('/signin');
  });

  function handleLogout() {
    clearItem();

    navigate('/');
  }

  if (!getItem('jwt_token')) return null;

  return (
    <Wrapper>
      <H2 title="Todo List" />
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      <TodoContainer />
    </Wrapper>
  );
}
