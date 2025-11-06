import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const resetForm = () => {
    setForm(initialValue);
  };
  return {
    form,
    handleChange,
    resetForm,
  };
};
