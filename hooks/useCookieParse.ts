import cookie from "cookie";

const useCookieParse = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
};

export default useCookieParse;
