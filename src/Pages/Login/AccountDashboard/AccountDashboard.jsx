import { useState, useMemo } from "react";
import "./AccountDashboard.css";

export default function AccountDashboard({ user, onLogout }) {
  const [tab, setTab] = useState("dashboard");

  const name = useMemo(() => {
    // جِب الاسم من props أو من localStorage كفولباك
    if (user?.username) return user.username;
    const stored = JSON.parse(localStorage.getItem("user") || "null");
    return stored?.username || stored?.email?.split("@")[0] || "User";
  }, [user]);

  const logout = () => {
    onLogout?.(); // لو عندك لوجيك خارجي
    // امسح "الجلسة" فقط
    sessionStorage.removeItem("currentUser");
    localStorage.removeItem("currentUser");
    // سيب localStorage.user زي ما هو عشان تقدر تدخل تاني بنفس الداتا
    window.location.href = "/MyAccount";
  };

  return (
    <div className="accdash">
      {/* Sidebar */}
      <aside
        className="accdash-side"
        role="navigation"
        aria-label="Account navigation"
      >
        <button
          className={`side-link ${tab === "dashboard" ? "active" : ""}`}
          onClick={() => setTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`side-link ${tab === "orders" ? "active" : ""}`}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>
        <button
          className={`side-link ${tab === "downloads" ? "active" : ""}`}
          onClick={() => setTab("downloads")}
        >
          Downloads
        </button>
        <button
          className={`side-link ${tab === "addresses" ? "active" : ""}`}
          onClick={() => setTab("addresses")}
        >
          Addresses
        </button>
        <button
          className={`side-link ${tab === "details" ? "active" : ""}`}
          onClick={() => setTab("details")}
        >
          Account details
        </button>
        <button className="side-link danger" onClick={logout}>
          Log out
        </button>
      </aside>

      {/* Content */}
      <section className="accdash-content">
        <header className="accdash-hello">
          <p>
            Hello <strong>{name}</strong>{" "}
            <span className="muted">
              (not {name}?{" "}
              <button className="linklike" onClick={logout}>
                Log out
              </button>
              )
            </span>
          </p>
        </header>

        {tab === "dashboard" && (
          <div className="panel">
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        )}

        {tab === "orders" && (
          <div className="panel">
            <h3>Orders</h3>
            <p>No recent orders found.</p>
            {/* TODO: اربط جدول الطلبات الحقيقي هنا */}
          </div>
        )}

        {tab === "downloads" && (
          <div className="panel">
            <h3>Downloads</h3>
            <p>No downloads available yet.</p>
          </div>
        )}

        {tab === "addresses" && (
          <div className="panel">
            <h3>Addresses</h3>
            <div className="grid2">
              <div className="card">
                <h4>Billing address</h4>
                <p>Set your billing address.</p>
                <button className="btn-outline">Edit</button>
              </div>
              <div className="card">
                <h4>Shipping address</h4>
                <p>Set your shipping address.</p>
                <button className="btn-outline">Edit</button>
              </div>
            </div>
          </div>
        )}

        {tab === "details" && (
          <div className="panel">
            <h3>Account details</h3>
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <label>
                Display name
                <input type="text" defaultValue={name} />
              </label>
              <label>
                Email address
                <input type="email" defaultValue={`${name}@example.com`} />
              </label>
              <label>
                Password
                <input type="password" placeholder="New password" />
              </label>
              <button className="btn-black" type="submit">
                Save changes
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
