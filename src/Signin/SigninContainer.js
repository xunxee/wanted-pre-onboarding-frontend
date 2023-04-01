import { useState } from 'react';

import { Form } from '../components/Form';

import VALID_FIELDS from '../fixtures/validFields';

export default function SigninContainer() {
  const [fields, setFields] = useState({ email: '', password: '' });

  const [isButtonActive, setIsButtonActive] = useState(false);

  function checkUserInfo({ name, value }) {
    function validateRestField() {
      const restField = { ...fields };

      delete restField[name];

      const restFieldsEntry = Object.entries(restField);

      for (const array of restFieldsEntry) {
        const [restFieldName, restFieldValue] = array;

        return VALID_FIELDS[restFieldName].regexps.test(restFieldValue);
      }
    }

    function validateField() {
      if (!validateRestField()) return false;

      return VALID_FIELDS[name].regexps.test(value);
    }

    const isValid = validateField();

    if (isButtonActive === isValid) return;

    if (isValid) {
      setIsButtonActive((value) => !value);

      return;
    }

    setIsButtonActive((value) => !value);
  }

  function handleChange({ name, value }) {
    setFields({
      ...fields,
      [name]: value,
    });

    checkUserInfo({ name, value });
  }
  return (
    <>
      <h1>Login</h1>
      <Form
        category="Sign in"
        onChange={handleChange}
        fields={fields}
        isButtonActive={isButtonActive}
      />
    </>
  );
}
