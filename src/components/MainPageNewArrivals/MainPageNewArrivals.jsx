import { NewArrivalsList } from './NewArrivalsList/NewArrivalsList';
import scss from './MainPageNewArrivals.module.scss';

export const MainPageNewArrivals = () => {
  return (
    <div className={scss.container}>
      <h2 className={scss.newArrivalsTitle}>New arrivals</h2>
      <p className={scss.newArrivalsText}>
        Check out our latest arrivals for the upcoming season
      </p>
      <a className={scss.newArrivalsLink} href="/">
        See the collection here
      </a>
      <NewArrivalsList></NewArrivalsList>
      <div className={scss.newArrivalsPagination}>
        <button
          className={scss.newArrivalsPaginationItem}
          type="button"
        ></button>
        <button
          className={scss.newArrivalsPaginationItem}
          type="button"
        ></button>
        <button
          className={scss.newArrivalsPaginationItem}
          type="button"
        ></button>
        <button
          className={scss.newArrivalsPaginationItem}
          type="button"
        ></button>
        <button
          className={scss.newArrivalsPaginationItem}
          type="button"
        ></button>
      </div>
    </div>
  );
};
