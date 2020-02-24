import { myRouter } from "./MyRouter";

const generateAdditionalInfo = ({ status: code, statusText: text }) => ({
  httpStatus: { code, text }
});

export const errorHandler = async (error, ctx) => {
  const redirectPath = error.status ? `/errors/${error.status}` : "/errors/500";
  await myRouter(ctx, redirectPath);
};

export const responseHandler = async (response, ctx) => {
  if (response.ok || response.status === 401) {
    const additionalInfo = generateAdditionalInfo(response);
    const result = await response.json();
    return { ...result, ...additionalInfo };
  } else {
    await errorHandler(response, ctx);
  }
};
