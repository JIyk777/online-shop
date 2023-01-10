import { MainNavBar } from './MainNavBar/MainNavBar';
import { Hero } from './Hero/Hero';
import { MainPageCategory } from './MainPageCategory/MainPageCategory';

export const App = () => {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <Hero></Hero>
      <MainPageCategory></MainPageCategory>
    </div>
  );
};
