import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import FormPage from '../components/FormPage';

import { postSignIn } from '../services/api';

import { getItem, saveItem } from '../utils';

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

  return (
    <>
      <h1>Sign In</h1>
      <FormPage category="Sign in" onSubmit={handleSubmit} />
    </>
  );
}
