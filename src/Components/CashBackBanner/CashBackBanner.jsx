import React from "react";
import PropTypes from "prop-types";
import "./CashBackBanner.css";

/* لوجوهات افتراضية */
const DEFAULT_LOGOS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    alt: "Visa",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    alt: "MasterCard",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg",
    alt: "Amex",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    alt: "PayPal",
  },
];

const DEFAULT_CARD_IMG =
  "https://cdn-icons-png.flaticon.com/512/1041/1041916.png";

export default function CashBackBanner({
  titleLine1 = "Earn Cash Back For The Things",
  titleLine2 = "You Buy Every Where",
  blurb = "Application via Merto.",
  termsText = "Terms & Conditions.",
  termsHref = "#",
  logos = DEFAULT_LOGOS,
  cardImage = DEFAULT_CARD_IMG,
  onViewMore,
  viewMoreText = "VIEW MORE",
}) {
  return (
    <section className="cashback-banner">
      <div className="cb-left">
        <h2>
          {titleLine1} <br />
          {titleLine2}
        </h2>
        <p>
          {blurb}{" "}
          <a href={termsHref} className="cb-link">
            {termsText}
          </a>
        </p>
      </div>

      <div className="cb-center">
        <button className="cb-btn" onClick={onViewMore}>
          {viewMoreText}
        </button>
      </div>

      <div className="cb-right">
        <img src={cardImage} alt="Card Hand" className="cb-cardhand" />
        <div className="cb-logos">
          {logos.map((l, i) => (
            <img key={i} src={l.src} alt={l.alt || `logo-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

CashBackBanner.propTypes = {
  titleLine1: PropTypes.string,
  titleLine2: PropTypes.string,
  blurb: PropTypes.string,
  termsText: PropTypes.string,
  termsHref: PropTypes.string,
  logos: PropTypes.arrayOf(
    PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string })
  ),
  cardImage: PropTypes.string,
  onViewMore: PropTypes.func,
  viewMoreText: PropTypes.string,
};
