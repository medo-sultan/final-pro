import "./BlogPage.css";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-1.jpg",
    category: "BEAUTY & FASHION",
    date: "April 25, 2025",
    author: "Myoui Mina",
    comments: 4,
    title: "Weekday Outfit Inspiration for All Occasions",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
  },
  {
    id: 2,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-2.jpg",
    category: "BEAUTY & FASHION",
    date: "April 22, 2025",
    author: "Myoui Mina",
    comments: 2,
    title: "100% Pure & Natural Sage Essential Oil",
    excerpt:
      "Discover the benefits of using pure and natural sage essential oil in your daily routine. This versatile oil can be used for aromatherapy, skincare, and much more...",
  },
  {
    id: 3,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-3.jpg",
    category: "COSMETICS",
    date: "April 20, 2025",
    author: "John Park",
    comments: 3,
    title: "Tips for Cleaning",
    excerpt:
      "Cleaning your home doesn’t have to be a chore. With these simple tips, you can keep your space spotless and organized every day...",
  },
  {
    id: 4,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-4.jpg",
    category: "COSMETICS",
    date: "April 17, 2025",
    author: "Linda Smith",
    comments: 5,
    title: "Giorgio Armani Si Intense Eau de Parfum Review",
    excerpt:
      "A deep dive into Giorgio Armani's Si Intense Eau de Parfum. Find out why it's a must-have fragrance for this season...",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/easter-decorations-table-home_1048944-19876045.jpg?w=1480",
    category: "DECOR & ACCENTS",
    date: "April 15, 2025",
    author: "Sara Lee",
    comments: 1,
    title: "Decor Ideas for Spring",
    excerpt:
      "Refresh your home this spring with these easy and affordable decor ideas. Brighten your rooms and welcome the season with style...",
  },
  {
    id: 6,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-6.jpg",
    category: "ELECTRONICS",
    date: "April 14, 2025",
    author: "Mike Dean",
    comments: 0,
    title: "Latest Trends in Electronics",
    excerpt:
      "Stay ahead of the curve with the latest trends in electronics for 2025. From smart home devices to wearable tech, here's what to expect...",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/premium-vector/car-illustration-vector-design_811396-10.jpg?w=1480",
    category: "AUTOPARTS",
    date: "April 12, 2025",
    author: "Emily Carter",
    comments: 2,
    title: "Car Maintenance Tips",
    excerpt:
      "Keep your car running smoothly with these easy maintenance tips. Learn about oil changes, tire care, and more...",
  },
  {
    id: 8,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-8.jpg",
    category: "QUOTES",
    date: "April 10, 2025",
    author: "Admin",
    comments: 4,
    title: "Monday Motivation: Inspirational Quotes",
    excerpt:
      "Start your week strong with these motivational quotes. Find the inspiration you need to achieve your goals...",
  },
  {
    id: 9,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-9.jpg",
    category: "BEAUTY & FASHION",
    date: "April 8, 2025",
    author: "Myoui Mina",
    comments: 3,
    title: "Best Fashion Trends for Summer",
    excerpt:
      "Explore the hottest fashion trends for summer 2025. Discover must-have outfits and accessories for the season...",
  },
  {
    id: 10,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/03/blog-10.jpg",
    category: "COSMETICS",
    date: "April 5, 2025",
    author: "Linda Smith",
    comments: 1,
    title: "Top 5 Skincare Products",
    excerpt:
      "Reveal your best skin ever with these top-rated skincare products. Find out what works best for your skin type...",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page-container">
      <div className="blog-breadcrumb">
        <Link to="/">Home</Link>
        <span className="sep">{">"}</span>
        <span className="active">Blog</span>
      </div>
      <h1 className="blog-main-title">
        News about our company
        <br />
        and fashion world!
      </h1>
      <div className="blog-content-area">
        <div className="blog-listing-main">
          {blogPosts.map((post) => (
            <div className="blog-featured-card" key={post.id}>
              <div className="blog-featured-image-wrap">
                <img
                  className="blog-featured-image"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="blog-featured-meta">
                <span className="blog-featured-category">{post.category}</span>
                <span className="blog-featured-dot">—</span>
                <span className="blog-featured-date">{post.date}</span>
                <span className="blog-featured-dot">—</span>
                <span className="blog-featured-author">By {post.author}</span>
                <span className="blog-featured-dot">—</span>
                <span className="blog-featured-comments">
                  {post.comments} Comments
                </span>
              </div>
              <h2 className="blog-featured-title">{post.title}</h2>
              <div className="blog-featured-excerpt">{post.excerpt}</div>
              <button className="blog-featured-readmore">READ MORE</button>
            </div>
          ))}
        </div>
        <aside className="blog-sidebar">
          <form className="blog-search-form">
            <input type="text" placeholder="Search for products..." />
            <button type="submit">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 18 18"
              >
                <circle cx="8" cy="8" r="7" />
                <path d="M17 17l-3.5-3.5" />
              </svg>
            </button>
          </form>
          <div className="blog-widget">
            <div className="blog-widget-title">Categories</div>
            <ul className="blog-cat-list">
              <li>
                • Autoparts <span>(3)</span>
              </li>
              <li>
                • Beauty &amp; Fashion <span>(4)</span>
              </li>
              <li>
                • Cosmetics <span>(7)</span>
              </li>
              <li>
                • Decor &amp; Accents <span>(3)</span>
              </li>
              <li>
                • Electronics <span>(5)</span>
              </li>
              <li>
                • Quote <span>(2)</span>
              </li>
            </ul>
          </div>
          <div className="blog-widget">
            <div className="blog-widget-title">Popular Posts</div>
            <div className="blog-popular-list">
              {blogPosts.slice(0, 5).map((post) => (
                <a className="blog-popular-item" href="#" key={post.id}>
                  <img src={post.image} alt={post.title} />
                  <div>
                    <div className="blog-popular-title">{post.title}</div>
                    <div className="blog-popular-date">{post.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
