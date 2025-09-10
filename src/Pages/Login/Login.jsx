import "./Login.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({
  onClose,
  onLogin, // (id, password, remember) => Promise<boolean>
  onRegisterClick, // () => void
  onForgotClick, // () => void
}) {
  const [id, setId] = useState(""); // Username or Email
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { type: 'error'|'success', text: string }

  const dialogRef = useRef(null);
  const navigate = useNavigate();

  // ESC + منع سكرول + فوكس أول إنبوت
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", handleEsc);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    dialogRef.current?.querySelector("input")?.focus();

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);
  const REGISTERED_USER_KEY = "user";
  const CURRENT_USER_KEY = "currentUser";
  // قفل عند الضغط على الخلفية
  const handleOverlayClick = (e) => {
    if (loading) return;
    if (e.target === e.currentTarget) onClose?.();
  };

  // Fallback لو onLogin مش متوصّلة (للاختبار فقط)
  const fallbackLogin = async (theId, thePassword, keep) => {
    const saved = (() => {
      try {
        return JSON.parse(localStorage.getItem(REGISTERED_USER_KEY));
      } catch {
        return null;
      }
    })();

    if (!saved) return false; // لسه ما تسجّلش حد

    const typed = theId.trim();
    const matchId =
      (saved.email && saved.email.toLowerCase() === typed.toLowerCase()) ||
      (saved.username && saved.username === typed);

    if (!matchId) return false;
    if (saved.password !== thePassword) return false; // (لو هتشفر لاحقًا نزود مقارنة الهاش)

    const currentUser = { username: saved.username, email: saved.email };
    const storage = keep ? localStorage : sessionStorage;
    storage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    window.dispatchEvent(new Event("auth:changed"));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setMsg(null);

    // فالياديشن بسيط
    if (!id.trim() || !password) {
      setMsg({ type: "error", text: "املأ البريد/اليوزر وكلمة المرور." });
      return;
    }

    setLoading(true);
    try {
      // جرّب onLogin لو موجودة، وإلا استخدم fallback
      const loginFn = onLogin ?? fallbackLogin;
      const ok = await loginFn(id.trim(), password, remember);

      if (ok) {
        setMsg({ type: "success", text: "تم تسجيل الدخول بنجاح 🎉" });
        onClose?.();
        navigate("/dashboard"); // تحويل بعد النجاح
      } else {
        setMsg({
          type: "error",
          text: "البريد/اليوزر أو كلمة المرور غير صحيحة.",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // لو onLogin رمى Error
      // console.error(err);
      setMsg({
        type: "error",
        text: "حصل خطأ غير متوقع أثناء تسجيل الدخول.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modall-overlay" onClick={handleOverlayClick}>
      <div
        className="modall-content"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        <button
          className="icoon-btn"
          onClick={onClose}
          aria-label="Close login dialog"
        >
          ✖
        </button>

        <div className="modall-body">
          {/* الشمال: صورة */}
          <div className="logiin-left" aria-hidden="true" />

          {/* اليمين: فورم */}
          <div className="logiin-right">
            <h2 id="login-title">Login</h2>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                placeholder="Username or email address"
                value={id}
                onChange={(e) => setId(e.target.value)}
                autoComplete="username"
                name="username"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                name="current-password"
                required
              />

              <div className="options">
                <label>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />{" "}
                  Remember Me
                </label>

                {onForgotClick ? (
                  <button
                    type="button"
                    className="linklike"
                    onClick={onForgotClick}
                  >
                    Forgot Password?
                  </button>
                ) : (
                  <a href="/forgot">Forgot Password?</a>
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

              <button className="logiin-btn" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "LOG IN"}
              </button>

              <p>
                You don’t have an account yet{" "}
                {onRegisterClick ? (
                  <button
                    type="button"
                    className="linklike"
                    onClick={onRegisterClick}
                  >
                    Register Now
                  </button>
                ) : (
                  <a href="/MyAccount#register">Register Now</a>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
