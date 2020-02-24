import unfetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";
import { errorHandler, responseHandler } from "./responseHandler";

export const baseURL = "http://localhost:8888/api/";
export const URL = url => (url.startsWith("http") ? url : `${baseURL}${url}`);

const METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};

const headers = () => {
  const headersObj = {};
  const { token } = parseCookies() || {};
  headersObj["Content-Type"] = "application/json";
  headersObj["Application"] = "Autor";
  if (token) headersObj["Authorization"] = `Bearer ${token}`;

  return headersObj;
};

const httpRequest = async (url, method, body, ctx) => {
  const options = {
    method,
    headers: headers()
  };
  if (body) options["body"] = JSON.stringify(body);
  try {
    const response = await unfetch(URL(url), options);
    return await responseHandler(response, ctx);
  } catch (e) {
    await errorHandler(e, ctx);
  }
};

export const httpGet = async (url, ctx) => {
  return await httpRequest(url, METHOD.GET, null, ctx);
};

export const httpPost = async (url, body, ctx) => {
  return await httpRequest(url, METHOD.POST, body, ctx);
};

export const httpDelete = async (url, ctx) => {
  return await httpRequest(url, METHOD.DELETE, null, ctx);
};

export const httpPut = async (url, body, ctx) => {
  return await httpRequest(url, METHOD.PUT, body, ctx);
};

export const httpPatch = async (url, body, ctx) => {
  return await httpRequest(url, METHOD.PATCH, body, ctx);
};
