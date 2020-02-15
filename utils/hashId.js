import Hashids from "hashids/dist/hashids";

const hashids = new Hashids("Autor.iR");

export const encodeId = id => hashids.encode(id);

export const decodeId = id => hashids.decode(id);

export const postSlug = (postTitle, postId) => {
  const titleArr = postTitle.split(" ");
  titleArr.push(encodeId(postId));

  return titleArr.join("-");
};

export const postId = slug => {
  const slugArr = slug.split('-');

  return decodeId(slugArr.reverse()[0]);
};
