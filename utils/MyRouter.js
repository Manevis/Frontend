import Router from "next/router";

export const myRouter = (ctx, Location, statusCode = 302) => {
  if (ctx.res) {
    ctx.res.writeHead(statusCode, {
      Location
    });
    ctx.res.end();
  } else {
    Router.replace("/");
  }
};
