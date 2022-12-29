import { useState } from 'react';

export const UseFormHook = (initialValues: {} = {}) => {
  const [values, setForm] = useState(initialValues);

  const resetValues = () => setForm(initialValues);

  return { values, resetValues };
};
