import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import scss from './SaleBar.module.scss';

export const SaleBar = () => {
  return (
    <div className={scss.box}>
      <div className={scss.container}>
        <FiChevronLeft className={scss.icon}></FiChevronLeft>
        <div>
          <span className={scss.text}>Up to 70% Off.</span>
          <a className={scss.link} href="/">
            Shop our latest sale styles
          </a>
        </div>
        <FiChevronRight className={scss.icon}></FiChevronRight>
      </div>
    </div>
  );
};
