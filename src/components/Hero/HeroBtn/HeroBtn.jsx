import scss from './HeroBtn.module.scss';

export const HeroBtn = () => {
  return (
    <div className={scss.box}>
      <a className={scss.heroBtn} href="/">
        Shop sale
      </a>
      <a className={scss.heroBtn} href="/">
        Shop the menswear
      </a>
    </div>
  );
};
