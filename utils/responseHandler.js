const generateAdditionalInfo = ({ status, statusText }) => ({
  httpStatus: { status, statusText }
});

export const responseHandler = async response => {
  const additionalInfo = generateAdditionalInfo(response);
  const result = await response.json();

  return { ...result, ...additionalInfo };
};
