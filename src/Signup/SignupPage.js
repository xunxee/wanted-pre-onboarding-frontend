import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { getItem } from '../utils';

import FormPage from '../components/FormPage';

import { postSignUp } from '../services/api';

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

  return (
    <>
      <h1>Sign Up</h1>
      <FormPage category="Sign" onSubmit={handleSubmit} />
    </>
  );
}
