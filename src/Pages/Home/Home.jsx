import HomeSlider from "./HomeSlider/HomeSlider";
import HomeFeatures from "./HomeFeatures/HomeFeatures";
import Homecircles from "./Homecircles/Homecircles";
import HomeCouponBar from "./HomeCouponBar/HomeCouponBar";
import FlashDeals from "./FlashDeals/FlashDeals";
import HomePromos from "./HomePromos/HomePromos";
import NewArrivals from "./NewArrivals/NewArrivals";
import CarouselCard from "./CarouselCard/CarouselCard";
import BestDeals from "./BestDeals/BestDeals";
import BlogCardsCarousel from "./BlogCardsCarousel/BlogCardsCarousel";
import SearchHero from "./SearchHero/SearchHero";
// import TestOverlay from "./TestOverlay/TestOverlay";

export default function HomePage() {
  return (
    <div>
      <HomeSlider />
      <HomeFeatures />
      <Homecircles />
      <HomeCouponBar />
      <FlashDeals />
      <HomePromos />
      <NewArrivals />
      <CarouselCard />
      <BestDeals />
      <BlogCardsCarousel />
      <SearchHero />
    </div>
  );
}
{
  /* <TestOverlay /> */
}
