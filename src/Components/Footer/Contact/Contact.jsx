import React, { useState } from "react";
import "./Contact.css";
import {
  FiPhoneCall,
  FiMessageSquare,
  FiMail,
  FiUserPlus,
} from "react-icons/fi";
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact({
  heading = "Contact us",
  addressLine1 = "34 Main Street, Los Angeles 9021",
  addressLine2 = "United States",
  phone = "+249 68599994",
  email = "modtherSultan.com",
  liveChatText = "Live Chat",
  liveChatHref = "#!",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.288996393968!2d-118.243684!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9d9f2fffd%3A0x1f1d6d8b8c2b9b3c!2sLos%20Angeles%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // تحقق بسيط
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSent(true);
    // ارسل لباك-إندك هنا لو حابب
    // await fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <main className="contact" dir="ltr">
      <div className="c-wrap">
        <header className="c-head">
          <h1 className="c-title">{heading}</h1>
          <p className="c-addr">{addressLine1}</p>
          <p className="c-addr muted">{addressLine2}</p>
        </header>

        {/* Top info grid */}
        <section className="c-grid">
          <div className="c-card">
            <div className="c-ico">
              <FiPhoneCall />
            </div>
            <div className="c-card-title">Customer service</div>
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="c-link">
              {phone}
            </a>
            <div className="c-hint">Call us from 8am to 8pm</div>
          </div>

          <div className="c-card">
            <div className="c-ico">
              <FiMessageSquare />
            </div>
            <div className="c-card-title">Chat with us</div>
            <a href={liveChatHref} className="c-link">
              <span className="c-dot" /> {liveChatText}
            </a>
            <div className="c-hint">Daily: 8 am to 11 pm</div>
          </div>

          <div className="c-card">
            <div className="c-ico">
              <FiMail />
            </div>
            <div className="c-card-title">Write to us</div>
            <a href={`mailto:${email}`} className="c-link">
              {email}
            </a>
          </div>

          <div className="c-card">
            <div className="c-ico">
              <FiUserPlus />
            </div>
            <div className="c-card-title">Follow us</div>
            <div className="c-social">
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
            </div>
          </div>
        </section>

        <h2 className="c-q-title">Do you have some questions?</h2>

        {/* Form */}
        <form className="c-form" onSubmit={onSubmit} noValidate>
          <div className="c-row">
            <input
              className="c-input"
              name="name"
              placeholder="Name and Surname *"
              value={form.name}
              onChange={onChange}
              required
            />
            <input
              className="c-input"
              name="email"
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <input
            className="c-input"
            name="subject"
            placeholder="Subject *"
            value={form.subject}
            onChange={onChange}
            required
          />
          <textarea
            className="c-textarea"
            name="message"
            placeholder="Message"
            rows={8}
            value={form.message}
            onChange={onChange}
            required
          />
          <button className="c-submit" type="submit">
            GET IN TOUCH
          </button>
          {sent && (
            <div className="c-success" role="status">
              Thanks! Your message has been sent.
            </div>
          )}
        </form>
      </div>

      {/* Map */}
      <div className="c-map-wrap" aria-label="map">
        <iframe
          title="Our location"
          src={mapSrc}
          className="c-map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
