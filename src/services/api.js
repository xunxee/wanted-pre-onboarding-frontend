const API_URL = process.env.REACT_APP_API_URL;

export async function postSignUp({ email, password }) {
  const url = `${API_URL}auth/signup`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status === 400) throw new Error('이미 존재하는 회원입니다.');

  return response;
}

export async function postSignIn({ email, password }) {
  const url = `${API_URL}auth/signin`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const { access_token } = await response.json();

  if (!access_token) throw new Error('아이디나 비밀번호를 확인하세요.');

  return access_token;
}
