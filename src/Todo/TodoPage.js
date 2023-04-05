import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { clearItem, getItem } from '../utils';

import TodoContainer from './TodoContainer';

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
    <>
      <div>
        <div>TodoPage</div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
      <TodoContainer />
    </>
  );
}
