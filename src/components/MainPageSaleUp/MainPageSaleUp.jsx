import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import bag from './img/bag.jpg';
import bag2x from './img/bag@2x.jpg';
import boots from './img/boots.jpg';
import boots2x from './img/boots@2x.jpg';
import jeans from './img/jeans.jpg';
import jeans2x from './img/jeans@2x.jpg';
import scss from './MainPageSaleUp.module.scss';
import { isRetina } from 'helpers/isRetina';

export const MainPageSaleUp = () => {
  return (
    <section className={scss.mainPageSaleUp}>
      <div className={scss.container}>
        <div className={scss.mainPageSaleUpHeadBox}>
          <h2 className={scss.mainPageSaleUpTitle}>Sale up to 70%</h2>
          <div className={scss.mainPageSaleUpPagination}>
            <button className={scss.mainPageSaleUpPaginationBtn} type="button">
              <HiArrowNarrowLeft
                className={scss.mainPageSaleUpPaginationBtnIcon}
              ></HiArrowNarrowLeft>
            </button>
            <button className={scss.mainPageSaleUpPaginationBtn} type="button">
              <HiArrowNarrowRight
                className={scss.mainPageSaleUpPaginationBtnIcon}
              ></HiArrowNarrowRight>
            </button>
          </div>
        </div>

        <ul className={scss.mainPageSaleUpProductList}>
          <li className={scss.mainPageSaleUpProductItem}>
            <a href="/">
              <img
                className={scss.mainPageSaleUpProductItemImg}
                src={isRetina(bag, bag2x)}
                alt="shirt"
              />
              <button
                type="button"
                className={scss.mainPageSaleUpProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageSaleUpProductItemSaleInfo}>-50%</div>
              <div className={scss.mainPageSaleUpProductItemInfo}>
                <p className={scss.mainPageSaleUpProductItemText}>
                  Shirt with insertion lace trims
                </p>
                <div className={scss.mainPageSaleUpProductItemPriceBox}>
                  <span className={scss.mainPageSaleUpProductItemPrice}>
                    $89.50
                  </span>
                  <span className={scss.mainPageSaleUpProductItemPriceSale}>
                    $179.00
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className={scss.mainPageSaleUpProductItem}>
            <a href="/">
              <img
                className={scss.mainPageSaleUpProductItemImg}
                src={isRetina(jeans, jeans2x)}
                alt="watch"
              />
              <button
                type="button"
                className={scss.mainPageSaleUpProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageSaleUpProductItemSaleInfo}>-50%</div>
              <div className={scss.mainPageSaleUpProductItemInfo}>
                <p className={scss.mainPageSaleUpProductItemText}>
                  Watch with blue leather belt
                </p>
                <div className={scss.mainPageSaleUpProductItemPriceBox}>
                  <span className={scss.mainPageSaleUpProductItemPrice}>
                    $40.00
                  </span>
                  <span className={scss.mainPageSaleUpProductItemPriceSale}>
                    $80
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className={scss.mainPageSaleUpProductItem}>
            <a href="/">
              <img
                className={scss.mainPageSaleUpProductItemImg}
                src={isRetina(boots, boots2x)}
                alt="coat"
              />
              <button
                type="button"
                className={scss.mainPageSaleUpProductItemFavoriteBtn}
              >
                <CiHeart></CiHeart>
              </button>
              <div className={scss.mainPageSaleUpProductItemSaleInfo}>-20%</div>
              <div className={scss.mainPageSaleUpProductItemInfo}>
                <p className={scss.mainPageSaleUpProductItemText}>
                  Check coat with color contrast
                </p>
                <div className={scss.mainPageSaleUpProductItemPriceBox}>
                  <span className={scss.mainPageSaleUpProductItemPrice}>
                    $119.16
                  </span>
                  <span className={scss.mainPageSaleUpProductItemPriceSale}>
                    $148.95
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <a className={scss.mainPageSaleUpLink} href="/">
          See all sale products
        </a>
      </div>
    </section>
  );
};
