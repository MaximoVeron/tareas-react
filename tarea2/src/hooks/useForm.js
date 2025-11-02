import { useState } from 'react';

export const useForm = (intialValue) => {
  const [formState, setFormState] = useState(intialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleReset = () => {
    setFormState(intialValue);
  };
  return { formState, handleChange, handleReset };
};
