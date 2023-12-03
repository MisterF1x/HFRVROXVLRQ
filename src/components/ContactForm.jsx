import { validationRules } from '../data/constant';
import { useValidate } from '../hooks/useValidate';
import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const ConactForm = () => {
  const { formData, errors, handleInputChange, validateForm, clearFormData } =
    useValidate(
      {
        fullname: '',
        email: '',
        phone: '',
        text: '',
      },
      validationRules
    );
  const onSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted:', formData);
      clearFormData();
    }
  };

  return (
    <FormWrapper>
      <InputField
        label="*Fullname:"
        name="fullname"
        type="text"
        value={formData.fullname}
        onChange={handleInputChange}
        error={errors.fullname}
        placeholder="John Rosie"
      />
      <InputField
        label="*Email:"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
        placeholder="johnrosie@gmail.com"
      />
      <InputField
        label="*Phone:"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
        placeholder="380961234567"
      />
      <TextArea
        label="Message:"
        name="text"
        placeholder="Message..."
        value={formData.text}
        onChange={handleInputChange}
      />
      <SubmitButton onClick={onSubmit} />
    </FormWrapper>
  );
};

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div className="form__input-field">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={error ? 'error' : ''}
      placeholder={placeholder}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);
const TextArea = ({ name, placeholder, value, onChange, label }) => (
  <div className="form__input-field">
    <label>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  </div>
);

const SubmitButton = ({ onClick }) => (
  <button className="btn outline" type="submit" onClick={onClick}>
    Submit
    <span className="btn__circle">
      <span className="wrapper">
        <ArrowRightIcon />
      </span>
    </span>
  </button>
);

const FormWrapper = ({ children }) => (
  <form className="form" onSubmit={e => e.preventDefault()}>
    {children}
  </form>
);
