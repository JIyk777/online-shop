import { CiHeart } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import scss from './FavoritesBtn.module.scss';

export const FavoritesBtn = () => {
  return (
    <div className={scss.box}>
      <div className={scss.iconBox}>
        <CiHeart className={scss.favoritesIcon}></CiHeart>
        <span>0</span>
      </div>

      <span>|</span>

      <div className={scss.iconBox}>
        <AiOutlineShoppingCart
          className={scss.favoritesIcon}
        ></AiOutlineShoppingCart>
        <span>0</span>
      </div>
    </div>
  );
};
