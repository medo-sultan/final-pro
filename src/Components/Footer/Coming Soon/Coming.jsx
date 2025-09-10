import React, { useEffect, useMemo, useState } from "react";
import "./Coming.css";
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const pad = (n) => String(n).padStart(2, "0");

/** عداد تنازلي بسيط */
function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return { days, hours, mins, secs, finished: diff === 0 };
}

export default function Coming({
  launchAt = "2027-12-31T00:00:00", // غيّر التاريخ لو تحب
  contact = "modtherSultan.com",
  bgUrl = "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?q=80&w=1920&auto=format&fit=crop",
}) {
  const { days, hours, mins, secs } = useCountdown(launchAt);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    // هنا تقدر ترسل الإيميل لسيرفرك
    // fetch('/api/subscribe', { method:'POST', body: JSON.stringify({ email }) })
  };

  return (
    <main className="coming" style={{ ["--bg-url"]: `url(${bgUrl})` }}>
      <header className="coming-logo" aria-label="Merto">
        <span className="logo-bar" />
        <span className="logo-text">Sultan</span>
      </header>

      <section className="coming-center">
        <h1 className="coming-title">Coming Soon</h1>
        <p className="coming-sub">
          We will be celebrating the launch of our
          <br />
          new site very soon!
        </p>

        <div className="coming-timer" role="timer" aria-live="polite">
          <div className="t-block">
            <div className="num">{pad(days)}</div>
            <div className="lbl">days</div>
          </div>
          <span className="t-sep" aria-hidden>
            :
          </span>
          <div className="t-block">
            <div className="num">{pad(hours)}</div>
            <div className="lbl">hours</div>
          </div>
          <span className="t-sep" aria-hidden>
            :
          </span>
          <div className="t-block">
            <div className="num">{pad(mins)}</div>
            <div className="lbl">mins</div>
          </div>
          <span className="t-sep" aria-hidden>
            :
          </span>
          <div className="t-block">
            <div className="num">{pad(secs)}</div>
            <div className="lbl">secs</div>
          </div>
        </div>

        <form className="coming-form" onSubmit={onSubmit}>
          <input
            type="email"
            inputMode="email"
            className="coming-input"
            placeholder="enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"
            required
          />
          <button className="coming-go" aria-label="Subscribe">
            →
          </button>
        </form>

        {done && (
          <div className="coming-note" role="status">
            Thanks! We’ll keep you posted.
          </div>
        )}

        <nav className="coming-social" aria-label="social links">
          <a href="#!" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#!" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="#!" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#!" aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
          <a href="#!" aria-label="Instagram">
            <FaInstagram />
          </a>
        </nav>

        <a className="coming-mail" href={`sul:${contact}`}>
          {contact}
        </a>
      </section>
    </main>
  );
}
