import scss from './HeroPagesBtn.module.scss';

export const HeroPagesBtn = () => {
  return (
    <div className={scss.box}>
      <button className={scss.pageBtn} type="button">
        <span>01</span>
      </button>
      <button className={scss.pageBtn} type="button">
        <span>02</span>
      </button>
      <button className={scss.pageBtn} type="button">
        <span>03</span>
      </button>
      <button className={scss.pageBtn} type="button">
        <span>04</span>
      </button>
    </div>
  );
};
