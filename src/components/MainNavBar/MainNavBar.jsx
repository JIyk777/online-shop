import { TopNavBar } from './TopNavBar/TopNavBar';
import { BottomNavBar } from './BottomNavBar/BottomNavBar';
import { SaleBar } from './SaleBar/SaleBar';

export const MainNavBar = () => {
  return (
    <div>
      <TopNavBar></TopNavBar>
      <BottomNavBar></BottomNavBar>
      <SaleBar></SaleBar>
    </div>
  );
};
