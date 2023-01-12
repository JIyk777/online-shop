import { ProfitableOffersList } from './ProfitableOffersList/ProfitableOffersList';
import scss from './MainPageBoardProfitableOffers.module.scss';

export const MainPageBoardProfitableOffers = () => {
  return (
    <section className={scss.mainPageBoardProfitableOffersBox}>
      <ProfitableOffersList></ProfitableOffersList>
    </section>
  );
};
