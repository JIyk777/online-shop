import { PopularCategoriesList } from './PopularCategoriesList/PopularCategoriesList';
import scss from './MainPagePopularCategories.module.scss';

export const MainPagePopularCategories = () => {
  return (
    <section>
      <div className={scss.container}>
        <h2 className={scss.mainPagePopularCategoriesTitle}>
          Popular categories
        </h2>
        <PopularCategoriesList></PopularCategoriesList>
      </div>
    </section>
  );
};
