import { createBrowserRouter, Navigate } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Pages/Error/Error";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BlogPage from "../Pages/Blog/BlogPage";
import DiscountsPage from "../Pages/Discounts/DiscountsPage";

import Woman from "../Pages/Woman/Woman";
import GameBoy from "../Pages/GameBoy/GameBoy";
import Autopart from "../Pages/Autopart/Autopart";
import Cosmetics from "../Pages/Cosmetics/Cosmetics";
import MyInfinity from "../Pages/Infinity/MyInfinity";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Categories from "../Pages/Categories/Categories";
import Offers from "../Pages/Offers/Offers";
import Checkout from "../Components/Checkout/Checkout";
import Contact from "../Components/Footer/Contact/Contact";
import Coming from "../Components/Footer/Coming Soon/Coming";
import Furniture from "../Pages/Furniture/Furniture";
import Book from "../Pages/Books/Book";

import MyAccount from "../Pages/Login/MyAccount/MyAccount";
import AccountDashboard from "../Pages/Login/AccountDashboard/AccountDashboard";
import SearchResults from "../Components/SearchResults/SearchResults";
import BlogDetails from "../Pages/Home/BlogCardsCarousel/BlogDetels/BlogDetails";
import CartPage from "../Components/CartPage/CartPage";
import OrderSuccess from "../Components/Checkout/OrderSuccess/OrderSuccess";
import Wishlist from "../Components/Wishlist/Wishlist";
import Supermarket from "../Pages/Supermarket/Supermarket";
import Mobile from "../Pages/Mobile/Mobile";
import Man from "../Pages/ForMan/Man";
import MarketPage from "../Pages/Supermarket/MarketPage";
import MobilePage from "../Pages/Mobile/MobilePage";
import Fashoon from "../Pages/Woman/Fashioon/Fashoon";
import Perfumes from "../Pages/Woman/perfumes/Perfumes";
import RequestItem from "../Pages/Home/SearchHero/RequestItem/RequestItem";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import PrivacyPolicy from "../Components/privacy/Privacy";
const handleRegister = async ({ username, email, password }) => {
  if (username && email && password) {
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email: email.toLowerCase(), password })
    );
    return true;
  }
  return false;
};

const handleLogin = async (id, password) => {
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  if (!saved) return false;

  const typed = id.trim().toLowerCase();
  const matchId =
    (saved.email && saved.email.toLowerCase() === typed) ||
    (saved.username && saved.username.toLowerCase() === typed);

  if (!matchId) return false;
  if (saved.password !== password) return false;

  localStorage.setItem(
    "currentUser",
    JSON.stringify({ username: saved.username, email: saved.email })
  );
  return true;
};

<ScrollToTop behavior="auto" />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/About", element: <About /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/discount", element: <DiscountsPage /> },
      { path: "/Supermarket", element: <Supermarket /> },
      { path: "/market", element: <MarketPage /> },
      { path: "/market/:sectionId", element: <MarketPage /> },
      { path: "/Mobile", element: <Mobile /> },
      { path: "/mobilep/:sectionId", element: <MobilePage /> },
      { path: "/Man", element: <Man /> },
      { path: "/Woman", element: <Woman /> },
      { path: "/Fashoon", element: <Fashoon /> },
      { path: "/Perfumes", element: <Perfumes /> },
      { path: "/GameBoy", element: <GameBoy /> },
      { path: "/Autopart", element: <Autopart /> },
      { path: "/Cosmetics", element: <Cosmetics /> },
      { path: "/MyInfinity", element: <MyInfinity /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/Categories", element: <Categories /> },
      { path: "/Offers", element: <Offers /> },
      { path: "/Checkout", element: <Checkout /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Coming", element: <Coming /> },
      { path: "/Furniture", element: <Furniture /> },
      { path: "/Book", element: <Book /> },
      { path: "/Wishlist", element: <Wishlist /> },
      { path: "/Blog/:slug", element: <BlogDetails /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/Privacy", element: <PrivacyPolicy /> },
      { path: "/order-success", element: <OrderSuccess /> },
      { path: "/request-item", element: <RequestItem /> },

      {
        path: "/MyAccount",
        element: (
          <MyAccount onLogin={handleLogin} onRegister={handleRegister} />
        ),
      },
      {
        path: "/register",
        element: <Navigate to="/register" replace />,
      },

      { path: "/dashboard", element: <AccountDashboard /> },
    ],
  },
]);

export default router;
