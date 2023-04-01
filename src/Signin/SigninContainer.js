import { useState } from 'react';

import { Form } from '../components/Form';

export default function SigninContainer() {
  const [fields, setFields] = useState({ email: '', password: '' });

  function handleChange({ name, value }) {
    setFields({
      ...fields,
      [name]: value,
    });
  }

  return (
    <>
      <h1>Login</h1>
      <Form category="Sign in" onChange={handleChange} fields={fields} />
    </>
  );
}
