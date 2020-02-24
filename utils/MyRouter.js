import Router from "next/router";

export const myRouter = async (ctx, location, statusCode = 302) => {
  if (ctx && ctx.res) {
    ctx.res.writeHead(statusCode, {
      Location: encodeURI(location),
    });
    ctx.res.end();
  } else {
    await Router.push(location);
  }
};
