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

const HttpRequest = async (url, method, body) => {
  const options = {
    method,
    headers: headers()
  };
  if (body) options["body"] = JSON.stringify(body);
  const response = await unfetch(URL(url), options);
  return await responseHandler(response);
};

export const HttpGet = async url => {
  return await HttpRequest(url, METHOD.GET);
};

export const HttpPost = async (url, body) => {
  return await HttpRequest(url, METHOD.POST, body);
};

export const HttpDelete = async url => {
  return await HttpRequest(url, METHOD.DELETE);
};

export const HttpPut = async (url, body) => {
  return await HttpRequest(url, METHOD.PUT, body);
};

export const HttpPatch = async (url, body) => {
  return await HttpRequest(url, METHOD.PATCH, body);
};
