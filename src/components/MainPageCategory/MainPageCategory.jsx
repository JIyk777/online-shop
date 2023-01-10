import woman1x from './img/MainPageCategoryWoman.jpg';
import woman2x from './img/MainPageCategoryWoman@2x.jpg';
import man1x from './img/MainPageCategoryMan.jpg';
import man2x from './img/MainPageCategoryMan@2x.jpg';
import kids1x from './img/MainPageCategoryKids.jpg';
import kids2x from './img/MainPageCategoryKids@2x.jpg';
import { isRetina } from '../../helpers/isRetina';
import scss from './MainPageCategory.module.scss';

export const MainPageCategory = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainPageCategoryBox}>
        <a className={scss.mainPageCategoryLink} href="/">
          <img
            className={scss.mainPageCategoryImg}
            src={isRetina(woman1x, woman2x)}
            alt="woman"
            width="390"
            height="390"
          />
          <span>Women’s</span>
        </a>
        <a className={scss.mainPageCategoryLink} href="/">
          <img
            className={scss.mainPageCategoryImg}
            src={isRetina(man1x, man2x)}
            alt="man"
            width="390"
            height="390"
          />
          <span>Men’s</span>
        </a>
        <a className={scss.mainPageCategoryLink} href="/">
          <img
            className={scss.mainPageCategoryImg}
            src={isRetina(kids1x, kids2x)}
            alt="kids"
            width="390"
            height="390"
          />
          <span>Kids’</span>
        </a>
      </div>
    </div>
  );
};
