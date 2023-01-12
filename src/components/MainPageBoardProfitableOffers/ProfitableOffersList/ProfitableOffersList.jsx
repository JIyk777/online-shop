import scss from './ProfitableOffersList.module.scss';

export const ProfitableOffersList = () => {
  return (
    <ul className={scss.profitableOffersList}>
      <li className={scss.summerCollection}>
        <p className={scss.profitableOffersListText}>Summer Collections</p>
        <h3 className={scss.profitableOffersListTitle}>Sale Up to 70%</h3>
        <a className={scss.profitableOffersListLink} href="/">
          Explore new prices
        </a>
      </li>
      <li className={scss.deaOfTheWeek}>
        <p className={scss.profitableOffersListText}>Deal of the week</p>
        <h3 className={scss.profitableOffersListTitle}>
          Stay Warm With Our New Sweaters
        </h3>
        <a className={scss.profitableOffersListLink} href="/">
          Shop now
        </a>
      </li>
      <li className={scss.newCollection}>
        <p className={scss.profitableOffersListText}>New collection</p>
        <h3 className={scss.profitableOffersListTitle}>
          Shoes & Bags autumn / winter 2020{' '}
        </h3>
        <a className={scss.profitableOffersListLink} href="/">
          See offers
        </a>
      </li>
      <li className={scss.freeDelivery}>
        <p className={scss.profitableOffersListText}>
          For All new Email Subscribers
        </p>
        <h3 className={scss.profitableOffersListTitle}>
          Get 5% Off & Free Delivery
        </h3>
        <form className={scss.profitableOffersListForm}>
          <label className={scss.profitableOffersListFormLabel}>
            <span className={scss.profitableOffersListFormLabelText}>
              Email
            </span>
            <div>
              <input
                className={scss.profitableOffersListFormLabelInput}
                type="text"
                placeholder="Your working email"
              />
              <button
                className={scss.profitableOffersListFormLabelButton}
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </label>
        </form>
      </li>
    </ul>
  );
};
