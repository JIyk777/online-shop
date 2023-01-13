import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import shirt from './img/shirt.jpg';
import shirt2x from './img/shirt@2x.jpg';
import watch from './img/watch.jpg';
import watch2x from './img/watch@2x.jpg';
import coat from './img/coat.jpg';
import coat2x from './img/coat@2x.jpg';
import scss from './MainPageTrendingNow.module.scss';
import { isRetina } from 'helpers/isRetina';

export const MainPageTrendingNow = () => {
  return (
    <section className={scss.mainPageTrendingNow}>
      <div className={scss.container}>
        <div className={scss.mainPageTrendingNowHeadBox}>
          <h2 className={scss.mainPageTrendingNowTitle}>Trending now</h2>
          <div className={scss.mainPageTrendingNowPagination}>
            <button
              className={scss.mainPageTrendingNowPaginationBtn}
              type="button"
            >
              <HiArrowNarrowLeft
                className={scss.mainPageTrendingNowPaginationBtnIcon}
              ></HiArrowNarrowLeft>
            </button>
            <button
              className={scss.mainPageTrendingNowPaginationBtn}
              type="button"
            >
              <HiArrowNarrowRight
                className={scss.mainPageTrendingNowPaginationBtnIcon}
              ></HiArrowNarrowRight>
            </button>
          </div>
        </div>

        <ul className={scss.mainPageTrendingNowProductList}>
          <li className={scss.mainPageTrendingNowProductItem}>
            <a href="/">
              <img
                className={scss.mainPageTrendingNowProductItemImg}
                src={isRetina(shirt, shirt2x)}
                alt="shirt"
              />
              <button
                type="button"
                className={scss.mainPageTrendingNowProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageTrendingNowProductItemInfo}>
                <p className={scss.mainPageTrendingNowProductItemText}>
                  Shirt with insertion lace trims
                </p>
                <span className={scss.mainPageTrendingNowProductItemPrice}>
                  $49.95
                </span>
              </div>
            </a>
          </li>
          <li className={scss.mainPageTrendingNowProductItem}>
            <a href="/">
              <img
                className={scss.mainPageTrendingNowProductItemImg}
                src={isRetina(watch, watch2x)}
                alt="watch"
              />
              <button
                type="button"
                className={scss.mainPageTrendingNowProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageTrendingNowProductItemInfo}>
                <p className={scss.mainPageTrendingNowProductItemText}>
                  Watch with blue leather belt
                </p>
                <span className={scss.mainPageTrendingNowProductItemPrice}>
                  $120.60
                </span>
              </div>
            </a>
          </li>
          <li className={scss.mainPageTrendingNowProductItem}>
            <a href="/">
              <img
                className={scss.mainPageTrendingNowProductItemImg}
                src={isRetina(coat, coat2x)}
                alt="coat"
              />
              <button
                type="button"
                className={scss.mainPageTrendingNowProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageTrendingNowProductItemInfo}>
                <p className={scss.mainPageTrendingNowProductItemText}>
                  Check coat with color contrast
                </p>
                <span className={scss.mainPageTrendingNowProductItemPrice}>
                  $183.45
                </span>
              </div>
            </a>
          </li>
        </ul>
        <a className={scss.mainPageTrendingNowLink} href="/">
          Explore top sales
        </a>
      </div>
    </section>
  );
};
