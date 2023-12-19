export const formatPhoneNumber = phoneNumber => {
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 5);
  const firstPart = phoneNumber.slice(5, 8);
  const secondPart = phoneNumber.slice(8, 10);
  const lastPart = phoneNumber.slice(10);

  return `${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${lastPart}`;
};

export const validationRules = Object.freeze({
  fullname: { required: true, minLength: 5, maxLength: 20 },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: { required: true, pattern: /^380\d{9}$/ },
  text: {
    required: false,
  },
});

export const clearStatus = fn => {
  setTimeout(() => {
    fn(null);
  }, 6000);
};
