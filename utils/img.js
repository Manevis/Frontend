import { URL } from "./request";

export const imgFile = img => {
  const response = URL(`photos/${img}/file`);
  console.log(response);
  return response;
};
