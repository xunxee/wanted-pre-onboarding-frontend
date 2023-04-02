import { useNavigate } from 'react-router-dom';

import FormPage from '../components/FormPage';

import { postSignUp } from '../services/api';

export default function SignupPage() {
  const navigate = useNavigate();

  async function handleSubmit({ email, password }) {
    try {
      alert('회원가입 성공! 다시 로그인 해주세요.');
      const data = await postSignUp({ email, password });

      if (data.status === 201) navigate('/signin');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <FormPage onSubmit={handleSubmit} />
    </>
  );
}
