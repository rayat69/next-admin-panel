import useCookieParse from "../../hooks/useCookieParse";
import cookie from "cookie";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";

const index = ({ gas }) => {
  const router = useRouter();
  //const ck = cookie.parse("admin");
  const result = gas ? JSON.parse(gas) : "";
  //console.log(window.document);
  let main = <div>loading</div>;
  useEffect(() => {
    (function () {
      if (!result) {
        router.replace("/admin/login");
        //window.location.href = "/admin/login";
      } else {
        main = <div>Welcome {result.username}</div>;
      }
    })();
  }, []);

  return <div>welcome {result.username}</div>;
};

index.getInitialProps = async ({ req }) => {
  const ck = cookie.parse(req.headers.cookie);

  return { gas: ck.admin ? ck.admin : "" };
};

export default index;
