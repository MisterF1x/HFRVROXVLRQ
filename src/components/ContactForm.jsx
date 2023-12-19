import { useState } from 'react';
import { Loader } from './Loader';
import { SuccessMessage } from './SuccessMessage';
import { useValidate } from '../hooks/useValidate';
import { clearStatus, validationRules } from '../utils/utils';
import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const ConactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
  const onSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      setLoading(true);

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', formData);
        clearFormData();
        setStatus('success');
        clearStatus(setStatus);
      } catch (error) {
        console.error('Error occurred:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (status === 'success') {
    return <SuccessMessage status={status} />;
  } else {
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
        <SubmitButton onClick={onSubmit} loading={loading} />
      </FormWrapper>
    );
  }
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

const SubmitButton = ({ onClick, loading }) => {
  const btnClass = `btn outline ${loading ? 'loading' : ''}`;
  return (
    <button
      disabled={loading}
      className={btnClass}
      type="submit"
      onClick={onClick}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          Submit
          <span className="btn__circle">
            <span className="wrapper">
              <ArrowRightIcon />
            </span>
          </span>
        </>
      )}
    </button>
  );
};

const FormWrapper = ({ children }) => (
  <form className="form" onSubmit={e => e.preventDefault()}>
    {children}
  </form>
);
