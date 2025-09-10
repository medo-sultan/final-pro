import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin, onForgotClick }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [msg, setMsg] = useState(null); // {type:'error'|'success', text:string}
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!id.trim() || !password) {
      setMsg({ type: "error", text: "املأ البريد/اليوزر وكلمة المرور." });
      return;
    }

    const REGISTERED_USER_KEY = "user";
    const CURRENT_USER_KEY = "currentUser";

    const localFallback = async (typedId, pwd, keep) => {
      const saved = (() => {
        try {
          return JSON.parse(localStorage.getItem(REGISTERED_USER_KEY));
        } catch {
          return null;
        }
      })();
      if (!saved) return false;

      const matchId =
        (saved.email && saved.email.toLowerCase() === typedId.toLowerCase()) ||
        (saved.username &&
          saved.username.toLowerCase() === typedId.toLowerCase());

      if (!matchId) return false;
      if (saved.password !== pwd) return false;

      const cu = { username: saved.username, email: saved.email };
      const storage = keep ? localStorage : sessionStorage;
      storage.setItem(CURRENT_USER_KEY, JSON.stringify(cu));
      window.dispatchEvent(new Event("auth:changed"));
      return true;
    };

    const loginFn = onLogin
      ? (typedId, pwd, keep) => Promise.resolve(onLogin(typedId, pwd, keep))
      : localFallback;

    const ok = await loginFn(id.trim(), password, remember);

    if (ok) {
      setMsg({ type: "success", text: "تم تسجيل الدخول بنجاح 🎉" });
      navigate("/dashboard", { replace: true });
    } else {
      setMsg({ type: "error", text: "بيانات الدخول غير صحيحة." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="acc-form">
      <input
        type="text"
        placeholder="Username or email address"
        value={id}
        onChange={(e) => setId(e.target.value)}
        autoComplete="username email"
        required
        className="auth-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
        className="auth-input"
      />

      <div className="acc-row">
        <label className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span>Remember Me</span>
        </label>

        {onForgotClick ? (
          <button type="button" className="linklike" onClick={onForgotClick}>
            Lost your password?
          </button>
        ) : (
          <a className="acc-link" href="/forgot">
            Lost your password?
          </a>
        )}
      </div>

      {msg && (
        <p
          className={`reg-msg ${msg.type === "success" ? "ok" : "err"}`}
          role="alert"
        >
          {msg.text}
        </p>
      )}

      <button type="submit" className="btn-black">
        LOG IN
      </button>
    </form>
  );
}
