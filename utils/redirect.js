import { getItem, removeItem } from "./storage";

export const redirectAfterLogin = router => {
  const backTo = getItem("backTo");
  if (backTo) {
    removeItem("backTo");
    router.replace(backTo.route, backTo.asPath);
  } else {
    router.replace("/");
  }
};
