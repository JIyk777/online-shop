import { AuthBar } from './AuthBar/AuthBar';
import { TopNavBarMenu } from './TopNavBarMenu/TopNavBarMenu';
import { TopNavBarInfo } from './TopNavBarInfo/TopNavBarInfo';
import scss from './TopNavBar.module.scss';

export const TopNavBar = () => {
  return (
    <div className={scss.topNavBarBg}>
      <div className={scss.container}>
        <TopNavBarInfo></TopNavBarInfo>
        <TopNavBarMenu></TopNavBarMenu>
        <AuthBar></AuthBar>
      </div>
    </div>
  );
};
