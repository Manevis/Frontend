import unfetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";
import { responseHandler } from "./responseHandler";

export const baseURL = "http://192.168.30.121:8888/api/";
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

const httpRequest = async (url, method, body) => {
  const options = {
    method,
    headers: headers()
  };
  if (body) options["body"] = JSON.stringify(body);
  const response = await unfetch(URL(url), options);
  return await responseHandler(response);
};

export const httpGet = async url => {
  return await httpRequest(url, METHOD.GET);
};

export const httpPost = async (url, body) => {
  return await httpRequest(url, METHOD.POST, body);
};

export const httpDelete = async url => {
  return await httpRequest(url, METHOD.DELETE);
};

export const httpPut = async (url, body) => {
  return await httpRequest(url, METHOD.PUT, body);
};

export const httpPatch = async (url, body) => {
  return await httpRequest(url, METHOD.PATCH, body);
};
