import axios from "axios";
import Link from "next/link";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import Input from "../../components/Input";
import useForm from "../../hooks/useForm";
import useInput from "../../hooks/useInput";

import styles from "../../styles/scss/Login.module.scss";
import { loginForm } from "../../utils/formConfig";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Error from "../../components/Error";
import Tooltip from "../../components/Tooltip";

const Login = () => {
  const [input, inputHandler] = useInput();

  const router = useRouter();

  const [form, Inputx, getInfo] = useForm(loginForm);

  const [cookie, setCookie] = useCookies(["admin"]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const info = getInfo();
    console.log(info);

    const body = JSON.stringify(info);

    try {
      const resp = await axios
        .post("/api/admin/login", body, {
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then((r) => r.data);
      console.log(resp);
      setCookie("admin", JSON.stringify(resp.result), {
        path: "/admin",
        maxAge: 86400, // Expires after 1 day
        sameSite: true,
      });
      if (resp.status) router.push("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  let err = false;

  const Unauthorized = (
    <header>
      <p className="errornote">
        Please enter the correct username and password for a staff account. Note
        that both fields may be case-sensitive.
      </p>
    </header>
  );

  return (
    <div className={styles.admin}>
      <Card>
        <header className={styles.header}>
          <h1>
            <Link href="/admin">
              <a>COOKit administration</a>
            </Link>
          </h1>
        </header>

        <main className={styles.main}>
          <article>
            {err && <Error.Login />}

            <main>
              <Tooltip>
                Log into COOKit Admin account if you have one. If not, create
                through the command line
              </Tooltip>
              <form onSubmit={submitHandler} id="login-form">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="1o8SVyjvuRG3984XxgQVsyJh9LEODU0vtaXxLk8dF4qVWU6eTGuTf1rPji8GVGBe"
                />

                {Inputx()}

                <Button type="submit">Log in</Button>
              </form>
            </main>
          </article>
        </main>
      </Card>
    </div>
  );
};

export default Login;
