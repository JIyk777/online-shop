import { MainNavBar } from './MainNavBar/MainNavBar';
import { Hero } from './Hero/Hero';
import { MainPageCategory } from './MainPageCategory/MainPageCategory';
import { MainPageNewArrivals } from './MainPageNewArrivals/MainPageNewArrivals';

export const App = () => {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <Hero></Hero>
      <MainPageCategory></MainPageCategory>
      <MainPageNewArrivals></MainPageNewArrivals>
    </div>
  );
};
