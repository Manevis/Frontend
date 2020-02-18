import unfetch from "isomorphic-unfetch";

export const baseURL = "http://localhost:8888/api/";
export const URL = url => (url.startsWith("http") ? url : `${baseURL}${url}`);

export const Get = async url => {
  const request = await unfetch(URL(url), {
    headers: { "Content-Type": "application/json" }
  });
  return await request.json();
};

export const Post = async (url, body) => {
  const request = await unfetch(URL(url), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return await request.json();
};
