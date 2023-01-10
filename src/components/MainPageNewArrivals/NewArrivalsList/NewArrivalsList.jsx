import { CiHeart } from 'react-icons/ci';
import hat1x from './Img/hat_new_arrivals.jpg';
import hat2x from './Img/hat_new_arrivals@2x.jpg';
import earring1x from './Img/earring_new_arrivals.jpg';
import earring2x from './Img/earring_new_arrivals@2x.jpg';
import glass1x from './Img/glass_new_arrivals.jpg';
import glass2x from './Img/glass_new_arrivals@2x.jpg';
import jeans1x from './Img/jeans_new_arrivals.jpg';
import jeans2x from './Img/jeans_new_arrivals@2x.jpg';
import romper1x from './Img/romper_new_arrivals.jpg';
import romper2x from './Img/romper_new_arrivals@2x.jpg';
import shoes1x from './Img/shoes_new_arrivals.jpg';
import shoes2x from './Img/shoes_new_arrivals@2x.jpg';
import { isRetina } from 'helpers/isRetina';
import scss from './NewArrivalsList.module.scss';

export const NewArrivalsList = () => {
  return (
    <div className={scss.newArrivalsListBox}>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img src={isRetina(hat1x, hat2x)} alt="Black and white sport cap" />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Black and white sport cap</p>
        <span className={scss.productPrice}>$18.15</span>
      </a>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img src={isRetina(glass1x, glass2x)} alt="Metal bridge sunglasses" />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Metal bridge sunglasses</p>
        <span className={scss.productPrice}>$89.95</span>
      </a>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img src={isRetina(romper1x, romper2x)} alt="Green baby romper" />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Green baby romper</p>
        <span className={scss.productPrice}>$20.40</span>
      </a>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img
          src={isRetina(jeans1x, jeans2x)}
          alt="Mid-rise slim cropped fit jeans"
        />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Mid-rise slim cropped fit jeans</p>
        <span className={scss.productPrice}>$40.00</span>
      </a>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img src={isRetina(earring1x, earring2x)} alt="Red dangle earrings" />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Red dangle earrings</p>
        <span className={scss.productPrice}>$29.95</span>
      </a>
      <a className={scss.newArrivalsLinkBox} href="/">
        <img src={isRetina(shoes1x, shoes2x)} alt="Baby shoes with laces" />
        <button type="button" className={scss.newArrivalsFavoritesIconBox}>
          <CiHeart></CiHeart>
        </button>
        <p className={scss.productText}>Baby shoes with laces</p>
        <span className={scss.productPrice}>$30.60</span>
      </a>
    </div>
  );
};
