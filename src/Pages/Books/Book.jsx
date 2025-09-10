import React, { useRef } from "react";
import "./Book.css";

export default function Book() {
  const trendRef = useRef(null);
  const scroll = (x) =>
    trendRef.current?.scrollBy({ left: x, behavior: "smooth" });

  const genres = [
    {
      name: "Fiction",
      image:
        "https://img.freepik.com/free-psd/poster-with-yellow-day-theme_23-2148471297.jpg?t=st=1756437596~exp=1756441196~hmac=7baf8bd640445dc74d936adaf3286060f1039b68c4df45e60d48dd2558a60d5e&w=1480",
      link: "/genre/fiction",
    },
    {
      name: "Self‑Help",
      image:
        "https://img.freepik.com/free-photo/medium-shot-kids-first-communion-portraits_23-2151230231.jpg?t=st=1756437764~exp=1756441364~hmac=1a35cb09f6065f9e9278840b7932c530af3b50c8e41c9343fa98b7d6072b03cc&w=1480",
      link: "/genre/self-help",
    },
    {
      name: "Business",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
      link: "/genre/business",
    },
    {
      name: "Sci‑Fi",
      image:
        "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop",
      link: "/genre/scifi",
    },
  ];

  const trending = [
    {
      title: "The Silent Library",
      author: "Nora Hale",
      price: "$14.90",
      rating: 4.5,
      cover: "https://cdn.europosters.eu/image/1300/214933.jpg",
    },
    {
      title: "Atomic Habits (Guide)",
      author: "James C.",
      price: "$18.00",
      rating: 5,
      cover:
        "https://marketplace.canva.com/EAGUhHGuQOg/1/0/1003w/canva-orange-and-blue-anime-cartoon-illustrative-novel-story-book-cover-WZE2VIj5AVQ.jpg",
    },
    {
      title: "Designing Calm UIs",
      author: "Ivy Park",
      price: "$22.00",
      rating: 4,
      cover: "https://mtba3a.com/storage/2023/12/53642699-768x1152.jpg.webp",
    },
    {
      title: "Moonshot",
      author: "S. Patel",
      price: "$16.40",
      rating: 4.5,
      cover: "https://m.media-amazon.com/images/I/61E0iQavyDL._SY466_.jpg",
    },
    {
      title: "Deep Work (Notes)",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover:
        "https://static.wixstatic.com/media/911330_04631cc9b99947ce923cb756978ce6f9~mv2.jpg/v1/fill/w_812,h_1086,al_c,q_85,enc_avif,quality_auto/9781838457907.jpg",
    },
    {
      title: "Deep Work ",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/51QgGMBw-VL._AC_SY550_.jpg",
    },
    {
      title: "Batotaa ",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/81E2vc6tAgL._SY425_.jpg",
    },
    {
      title: "The laws ",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/61GXPFhrKeL._AC_SX679_.jpg",
    },
    {
      title: "I loved a despicable person ",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/41OiPaXB-YL._AC_SX679_.jpg",
    },
    {
      title: "كافكا علي الشاطئ ",
      author: "Cal N.",
      price: "$12.00",
      rating: 4,
      cover:
        "https://f.nooncdn.com/p/pzsku/ZFEFE6E13D651C1E3914EZ/45/1751114890/2a780a93-0868-4a3d-87c8-6ce113ff28c8.jpg?width=800",
    },
  ];

  return (
    <main className="book container">
      {/* 1) HERO */}
      <section className="bk-hero">
        <div className="bk-hero__copy">
          <span className="eyebrow">Read better · Live quieter</span>
          <h1>Books that slow the noise.</h1>
          <p>
            Hand‑picked titles across genres. Clear summaries, sample pages, and
            calm design so choosing your next read is easy.
          </p>
          <div className="actions">
            <a className="btn btn--solid" href="/collections/new">
              Explore new
            </a>
            <a className="btn btn--ghost" href="/lists/editors-picks">
              Editor’s picks
            </a>
          </div>
        </div>
        <div className="bk-hero__cover">
          <img
            src="https://img.freepik.com/free-photo/student-trying-find-new-ideas-schoolwork_1098-1582.jpg?t=st=1756437265~exp=1756440865~hmac=552e9c20e7aac623d8715b86ae4db0eb3825e5abf3316cc647a1779564de5bcb&w=1480"
            alt="Hardcover book on a soft fabric background"
          />
        </div>
      </section>

      {/* 2) GENRES */}
      <section className="bk-genres">
        <header className="section-head">
          <h2>Browse by genre</h2>
          <a className="link" href="/genres">
            View all
          </a>
        </header>
        <div className="genre-grid">
          {genres.map((g) => (
            <a key={g.name} href={g.link} className="genre">
              <img src={g.image} alt={g.name} loading="lazy" />
              <div className="genre__text">
                <h3>{g.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3) TRENDING NOW (Horizontal cards) */}
      <section className="bk-trending">
        <header className="section-head">
          <h2>Trending now</h2>
          <div className="scroller-ctrls">
            <button
              className="icon-btn"
              onClick={() => scroll(-320)}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              className="icon-btn"
              onClick={() => scroll(320)}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </header>
        <div className="trend-row" ref={trendRef}>
          {trending.map((b) => (
            <article key={b.title} className="book-card">
              <div className="book-card__cover">
                <img src={b.cover} alt={b.title} loading="lazy" />
              </div>
              <div className="book-card__body">
                <h4 className="book-title">{b.title}</h4>
                <span className="author">{b.author}</span>
                <div
                  className="rating"
                  aria-label={`Rating ${b.rating} out of 5`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`star ${
                        i < Math.floor(b.rating)
                          ? "full"
                          : i < b.rating
                          ? "half"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <div className="meta">
                  <span className="price">{b.price}</span>
                  <a className="btn btn--sm btn--solid" href="/cart">
                    Add
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4) AUTHOR SPOTLIGHT */}
      <section className="bk-spotlight">
        <div className="spotlight__media">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="Author portrait"
          />
        </div>
        <div className="spotlight__text">
          <span className="eyebrow">Author spotlight</span>
          <h3>Ivy Park</h3>
          <p className="ivy-quote">
            آيفي تؤمن أن لكل فكرة حكاية، ولكل تفصيلة روح. تكتب لتوقظ شغف
            الاكتشاف وتفتح نوافذ أوسع نحو الجمال والإنسانية. كلماتها تنساب
            كالموسيقى، تحمل هدوءًا عميقًا وتروي القلوب قبل العقول. في كتبها،
            يلتقي الصمت بالحكايات، وتولد المعاني بين السطور، لتتحول الصفحات إلى
            نوافذ لعالم أكثر رحابة وسكينة…{" "}
            <span className="ivy-highlight">وكن أنت آيفي،</span>
            <br />
            <span className="ivy-end">
              واترك لقلبك حرية التعبير عمّا بداخله.
            </span>
          </p>
          <div className="chip-row">
            <a className="chip" href="/authors/ivy-park">
              Profile
            </a>
            <a className="chip" href="/lists/ivy-essentials">
              Top titles
            </a>
            <a className="chip" href="/talks/ivy-park">
              Talks
            </a>
          </div>
        </div>
      </section>

      {/* 5) COMMUNITY / NEWSLETTER */}
      <section className="bk-nl">
        <div className="nl__box">
          <h3>Join the quiet readers</h3>
          <p>
            One short email weekly — no fluff, just crisp picks and 3‑minute
            notes.
          </p>
          <form className="nl__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="email"
              required
            />
            <button className="btn btn--solid" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <blockquote className="bk-quote">
          <p className="quote-en">
            “A room without books is like a body without a soul.”
          </p>
          <p className="quote-ar">"غرفة بلا كتب كالجسد بلا روح."</p>
          <footer>— Cicero</footer>
        </blockquote>
      </section>
    </main>
  );
}
