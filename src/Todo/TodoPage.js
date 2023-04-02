import { useEffect } from 'react';

import { clearItem, getItem } from '../utils';

import { useNavigate } from 'react-router-dom';

export default function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getItem('jwt_token')) navigate('/signin');
  });

  function handleLogout() {
    clearItem();

    navigate('/');
  }

  return (
    <>
      <div>TodoPage</div>
      <button onClick={handleLogout}>로그아웃</button>
    </>
  );
}
