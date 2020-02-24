import Hashids from "hashids/dist/hashids";

const hashids = new Hashids("Manevis.com");

export const encodeId = id => hashids.encode(id);

export const decodeId = id => hashids.decode(id);

export const postSlug = (postTitle, postId) => {
  const titleArr = postTitle.split(" ");
  titleArr.push(encodeId(postId));

  return titleArr.join("-");
};

export const postId = slug => {
  const slugArr = slug.split("-");
  const reversed = slugArr.reverse();
  return decodeId(reversed[0])[0];
};
