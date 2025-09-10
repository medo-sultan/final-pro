import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import {
  SiApplepay,
  SiVisa,
  SiMastercard,
  SiJcb,
  SiPaypal,
  SiDiscover,
} from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            Su<span className="logo-accent">LT</span>an
          </div>
          <div className="footer-contact">
            <div className="footer-contact-row">
              <FaMapMarkerAlt />
              <span>SUDAN , Khartoum,...</span>
            </div>
            <div className="footer-contact-row">
              <FaEnvelope />
              <span>modthersultan.com</span>
            </div>
            <div className="footer-contact-row footer-phone">
              <FaPhoneAlt />
              <span>(+249) 968599994</span>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-title">SHOPPING</div>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="#">Shop by Brand</a>
            </li>
            <li>
              <a href="/Offers">Offers</a>
            </li>
            <li>
              <a href="#">Track order</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">INFOMATION</div>
          <ul>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/Contact">Contact us</a>
            </li>
            <li>
              <a href="/Coming">Coming SOON</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">ACCOUNT</div>
          <ul>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">My account</a>
            </li>
            <li>
              <a href="#">My orders</a>
            </li>
            <li>
              <a href="/Wishlist">Wishlist</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-newsletter">
          <div className="footer-title">Let’s keep in touch</div>
          <form className="newsletter-form">
            <input type="email" placeholder="enter your email address" />
            <button type="submit" aria-label="subscribe">
              {"→"}
            </button>
          </form>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-row footer-supports">
        <div className="footer-support-box">
          <span className="footer-support-icon">
            <FaPhoneAlt />
          </span>
          <div>
            <div className="support-title">
              Didn't find what you were looking for?
            </div>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-support-box">
          <span className="footer-support-icon">🧑‍💻</span>
          <div>
            <div className="support-title">How can we help you today?</div>
            <a href="#">Help Center</a>
          </div>
        </div>
        <div className="footer-support-box">
          <span className="footer-support-icon">💬</span>
          <div>
            <div className="support-title">
              We’d love to hear what you think!
            </div>
            <a href="#">Give Feedback</a>
          </div>
        </div>
      </div>
      <div className="footer-row footer-bottom">
        <div className="footer-copyright">
          Modther-sultan. All Rights Reserved
        </div>
        <div className="footer-payments">
          <SiPaypal />
          <SiApplepay />
          <SiVisa />
          <SiDiscover />
          <SiJcb />
          <SiMastercard />
        </div>
      </div>
    </footer>
  );
}
