import { useState } from "react";
import "./Register.css";

export default function Register({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!username.trim() || !email.trim() || !password) {
      setMsg({ type: "error", text: "املأ كل الحقول." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMsg({ type: "error", text: "بريد إلكتروني غير صالح." });
      return;
    }

    setLoading(true);
    try {
      const ok = onSubmit
        ? await onSubmit({
            username: username.trim(),
            email: email.trim(),
            password,
          })
        : true;

      if (ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password, // نص صريح ليتوافق مع Login الحالي
          })
        );
        window.dispatchEvent(new Event("auth:changed"));

        setMsg({
          type: "success",
          text: "تم إنشاء الحساب بنجاح 🎉 يمكنك الآن تسجيل الدخول.",
        });
        setUsername("");
        setEmail("");
        setPassword("");
        // مفيش navigate هنا
      } else {
        setMsg({ type: "error", text: "فشل التسجيل. جرّب تاني." });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMsg({ type: "error", text: "حصل خطأ غير متوقع." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reg-card" aria-labelledby="reg-title">
      <form className="reg-form" onSubmit={handleSubmit} noValidate>
        <div className="reg-field">
          <label htmlFor="reg-username">
            Username <span className="req">*</span>
          </label>
          <input
            id="reg-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <div className="reg-field">
          <label htmlFor="reg-email">
            Email address <span className="req">*</span>
          </label>
          <input
            id="reg-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className="reg-field">
          <label htmlFor="reg-password">
            Password <span className="req">*</span>
          </label>
          <div className="pwd-wrap">
            <input
              id="reg-password"
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="pwd-toggle"
              onClick={() => setShowPwd((s) => !s)}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? "👍🏿" : "☠"}
            </button>
          </div>
        </div>

        {msg && (
          <p
            className={`reg-msg ${msg.type === "success" ? "ok" : "err"}`}
            role="alert"
          >
            {msg.text}
          </p>
        )}

        <button className="reg-btn" type="submit" disabled={loading}>
          {loading ? "Processing..." : "REGISTER"}
        </button>
      </form>
    </section>
  );
}
