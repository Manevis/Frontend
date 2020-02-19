import React, { useState, useEffect, useContext } from "react";
import cs from "classnames";
import styles from "./Enterance.module.scss";
import Link from "next/link";
import Input from "../../components/Design/Input";
import { HttpPost } from "../../utils/request";
import { useRouter } from "next/router";
import { UserContext } from '../../components/_Context_/UserContext';

const Entrance = props => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const {setUser} = useContext(UserContext);

  const sendEmail = async () => {
    const { userStatus } = await HttpPost("users", {
      email
    });
    setLoading(false);
    setUserStatus(userStatus);
  };

  const login = async () => {
    const { token, user } = await HttpPost("users/login", {
      username: email,
      password
    });
    setLoading(false);
    if (token) {
      setUser(user);
      await router.replace("/");
    }
  };

  useEffect(() => {
    if (userStatus === "CONFIRMED_EMAIL") {
      router.replace("/register");
    }
  }, [userStatus]);

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
    }
  };

  return (
    <div className={cs(styles.root, "container")}>
      <div className="row justify-content-center align-items-center vh-100 flex-column">
        <div className={cs(styles.logo, "mb-5")}>
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Autor.ir" />
            </a>
          </Link>
        </div>
        <div className={cs("col-md-6 col-sm-12 col-lg-4", styles.entranceBox)}>
          <form onSubmit={handleSubmit}>{renderForm()}</form>
        </div>
      </div>
    </div>
  );
};

Entrance.getInitialProps = async ctx => {
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
