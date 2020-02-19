const generateAdditionalInfo = ({ status: code, statusText: text }) => ({
  httpStatus: { code, text }
});

export const responseHandler = async response => {
  const additionalInfo = generateAdditionalInfo(response);
  const result = await response.json();

  return { ...result, ...additionalInfo };
};
