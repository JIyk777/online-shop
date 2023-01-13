import { MainNavBar } from './MainNavBar/MainNavBar';
import { Hero } from './Hero/Hero';
import { MainPageCategory } from './MainPageCategory/MainPageCategory';
import { MainPageNewArrivals } from './MainPageNewArrivals/MainPageNewArrivals';
import { MainPageBoardProfitableOffers } from './MainPageBoardProfitableOffers/MainPageBoardProfitableOffers';
import { MainPagePopularCategories } from './MainPagePopularCategories/MainPagePopularCategories';
import { MainPageTrendingNow } from './MainPageTrendingNow/MainPageTrendingNow';

export const App = () => {
  return (
    <>
      <MainNavBar></MainNavBar>
      <Hero></Hero>
      <MainPageCategory></MainPageCategory>
      <MainPageNewArrivals></MainPageNewArrivals>
      <MainPageBoardProfitableOffers></MainPageBoardProfitableOffers>
      <MainPagePopularCategories></MainPagePopularCategories>
      <MainPageTrendingNow></MainPageTrendingNow>
    </>
  );
};
