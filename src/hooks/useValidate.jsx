import { useState } from 'react';

export const useValidate = (initialState, validationRules) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    Object.keys(validationRules).forEach(fieldName => {
      const rules = validationRules[fieldName];
      const fieldValue = formData[fieldName];

      if (rules.required && !fieldValue) {
        newErrors[fieldName] = 'This field is required';
      } else if (rules.minLength && fieldValue.length < rules.minLength) {
        newErrors[
          fieldName
        ] = `Minimum length is ${rules.minLength} characters`;
      } else if (rules.maxLength && fieldValue.length > rules.maxLength) {
        newErrors[
          fieldName
        ] = `Maximum length is ${rules.minLength} characters`;
      } else if (rules.pattern && !rules.pattern.test(fieldValue)) {
        newErrors[fieldName] = 'Invalid format';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const clearFormData = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleInputChange,
    clearFormData,
    validateForm,
  };
};
