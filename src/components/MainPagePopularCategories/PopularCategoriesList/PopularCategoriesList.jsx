import caps from '../img/caps.jpg';
import caps2x from '../img/caps@2x.jpg';
import coats from '../img/coats.jpg';
import coats2x from '../img/coats@2x.jpg';
import jackets from '../img/jackets.jpg';
import jackets2x from '../img/jackets@2x.jpg';
import sandals from '../img/sandals.jpg';
import sandals2x from '../img/sandals@2x.jpg';
import shirts from '../img/shirts.jpg';
import shirts2x from '../img/shirts@2x.jpg';
import tops from '../img/tops.jpg';
import tops2x from '../img/tops@2x.jpg';
import { isRetina } from 'helpers/isRetina';
import scss from './PopularCategoriesList.module.scss';

export const PopularCategoriesList = () => {
  return (
    <ul className={scss.popularCategoriesList}>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(tops, tops2x)} alt="Tops" />
          <p>Tops</p>
        </a>
      </li>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(shirts, shirts2x)} alt="T-shirts" />
          <p>T-shirts</p>
        </a>
      </li>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(caps, caps2x)} alt="Caps" />
          <p>Caps</p>
        </a>
      </li>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(sandals, sandals2x)} alt="Sandals" />
          <p>Sandals</p>
        </a>
      </li>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(jackets, jackets2x)} alt="Jackets" />
          <p>Jackets</p>
        </a>
      </li>
      <li className={scss.popularCategoriesListItem}>
        <a className={scss.popularCategoriesListLink} href="/">
          <img src={isRetina(coats, coats2x)} alt="Coats" />
          <p>Coats</p>
        </a>
      </li>
    </ul>
  );
};
