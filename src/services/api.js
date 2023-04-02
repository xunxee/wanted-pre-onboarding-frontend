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

  if (response.status === 400) {
    throw new Error('이미 존재하는 회원입니다.');
  }

  return response;
}
