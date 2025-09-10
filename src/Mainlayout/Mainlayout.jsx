// src/Mainlayout/Mainlayout.jsx
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Login/Login"; // ← المودال

export default function Mainlayout() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  // دالة اللوجين (اختبرها مبدئياً بدون API)
  const handleLogin = async (id, password, remember) => {
    if (!id || !password) return false;

    // هات بيانات المستخدم المخزنة وقت التسجيل
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser") || "null"
    );

    // لو المستخدم موجود و البيانات متطابقة
    if (
      registeredUser &&
      (registeredUser.email === id || registeredUser.username === id) &&
      registeredUser.password === password
    ) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem("user", JSON.stringify(registeredUser)); // نخزن كل حاجة
      window.dispatchEvent(new Event("auth:changed"));
      return true;
    }

    return false;
  };

  return (
    <>
      <Header setShowLogin={setShowLogin} />
      <Outlet />
      <Footer />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={async (id, password, remember) => {
            const ok = await handleLogin(id, password, remember);
            if (ok) {
              setShowLogin(false);
              navigate("/dashboard"); // بعد الدخول
            }
            return ok;
          }}
          onRegisterClick={() => {
            setShowLogin(false);
            navigate("/MyAccount#register");
          }}
          onForgotClick={() => {
            setShowLogin(false);
            navigate("/forgot");
          }}
        />
      )}
    </>
  );
}
