import React, { useState, useContext } from "react";
import cs from "classnames";
import styles from "./Entrance.module.scss";
import Link from "next/link";
import Input from "../../components/Design/Input";
import { httpPost } from "../../utils/request";
import { useRouter } from "next/router";
import { UserContext } from "../../components/_Context_/UserContext";
import { parseCookies, setCookie } from "nookies";
import { myRouter } from "../../utils/MyRouter";
import { redirectAfterLogin } from "../../utils/redirect";

const Entrance = props => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const sendEmail = async () => {
    const { userStatus, validationToken } = await httpPost("users", {
      email
    });
    setLoading(false);

    if (validationToken) {
      setCookie({}, "validationToken", validationToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
      await router.replace("/register");
    } else {
      setUserStatus(userStatus);
    }
  };

  const resendActivationEmail = async () => {
    const { userStatus } = await httpPost(
      "users/register/resend-activation-email",
      {
        email
      }
    );
    setLoading(false);
    setUserStatus(userStatus);
  };

  const login = async () => {
    const { token, user } = await httpPost("users/login", {
      username: email,
      password
    });
    setLoading(false);
    if (token) {
      setUser(user, token);
      redirectAfterLogin(router);
    }
  };

  const renderForm = () => {
    switch (userStatus) {
      case null:
        return (
          <>
            <Input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="آدرس ایمیل"
              fullWidth
              required
              disabled={loading}
              autoFocus
            />
            <button type="submit">بررسی ایمیل</button>
          </>
        );

      case "ACTIVE":
        return (
          <>
            <Input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="رمز عبور"
              fullWidth
              required
              disabled={loading}
              autoFocus
            />
            <button type="submit">ورود</button>
          </>
        );

      case "RECEIVED_ACTIVATION_EMAIL":
        return (
          <>
            <div>
              <p>
                ایمیل فعال‌سازی برای شما ارسال شده است! لطفا Inbox خود را بررسی
                نمایید.
              </p>
            </div>
            <button type="submit">ارسال مجدد ایمیل</button>
          </>
        );

      default:
        return null;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    switch (userStatus) {
      case null: {
        return sendEmail();
      }
      case "ACTIVE": {
        return login();
      }
      case "RECEIVED_ACTIVATION_EMAIL": {
        return resendActivationEmail();
      }
    }
  };

  return (
    <div className={cs(styles.root, "container-fluid")}>
      <div className="row h-100 justify-content-center align-items-center">
        <div
          className={cs(
            "col-md-10 col-sm-12 col-lg-8 col-xl-6 h-fit",
            styles.entranceBox
          )}
        >
          <div className="row">
            <div className="col-6 input-row">
              <form onSubmit={handleSubmit}>{renderForm()}</form>
            </div>
            <div className="col-6 image-section">
              <Link href="/">
                <a>
                  <img src="/logo-with-text.png" alt="Autor.ir" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Entrance.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);

  if (token) {
    myRouter(ctx, "/");
  }

  return {
    noLayout: true,
    SEO: {
      title: "ورود / ثبت نام در Autor.ir",
      description:
        "ثبت نام و ورود به سایت Autor.ir جهت نوشتن مقاله و مطالب مفید فارسی",
      keywords: "ورود,ثبت نام,نویسندگی"
    }
  };
};

export default Entrance;
