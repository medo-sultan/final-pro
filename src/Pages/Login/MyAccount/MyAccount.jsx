import { useEffect, useRef } from "react";
import LoginForm from "../LoginForm";
import "./MyAccount.css";
import Register from "../Register/Register";

export default function MyAccount({ onLogin, onRegister }) {
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  // scroll + focus حسب الهاش
  useEffect(() => {
    const applyFromHash = () => {
      const isRegister = (window.location.hash || "")
        .toLowerCase()
        .includes("register");
      const el = isRegister ? registerRef.current : loginRef.current;
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => el?.querySelector("input")?.focus(), 150);
    };

    applyFromHash(); // أول تحميل
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const go = (target) => {
    window.location.hash = target === "register" ? "#register" : "#login";
  };

  return (
    <main className="acc-page">
      <h1 className="sr-only">My Account</h1>

      <nav className="acc-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <span aria-current="page">My Account</span>
      </nav>

      <div className="acc-grid">
        {/* LOGIN */}
        <section
          className="acc-card"
          id="login"
          ref={loginRef}
          aria-labelledby="login-title"
        >
          <div className="acc-card-head">
            <h2 id="login-title">Login</h2>
            <p className="acc-card-sub">
              Welcome back. Please sign in to continue.
            </p>
          </div>

          <LoginForm
            onLogin={onLogin}
            onForgotClick={() => (window.location.href = "/forgot")}
          />

          <p className="acc-switch">
            Don’t have an account?{" "}
            <button
              type="button"
              className="linklike"
              onClick={() => go("register")}
            >
              Create one
            </button>
          </p>
        </section>

        <div className="acc-divider" aria-hidden="true" />

        {/* REGISTER */}
        <section
          className="acc-card"
          id="register"
          ref={registerRef}
          aria-labelledby="register-title"
        >
          <div className="acc-card-head">
            <h2 id="register-title">Register</h2>
            <p className="acc-card-sub">
              Create a new account to track orders and manage addresses.
            </p>
          </div>

          <Register onSubmit={onRegister} />

          <p className="acc-switch">
            Already have an account?{" "}
            <button
              type="button"
              className="linklike"
              onClick={() => go("login")}
            >
              Log in
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}
