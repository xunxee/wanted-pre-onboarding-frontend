import { useState } from 'react';

import { FormLayout } from './FormLayout';

import VALID_FIELDS from '../fixtures/validFields';

export default function FormContainer({ category, onSubmit, onClick }) {
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
    <FormLayout
      category={category}
      onChange={handleChange}
      onSubmit={onSubmit}
      onClick={onClick}
      fields={fields}
      isButtonActive={isButtonActive}
    />
  );
}
